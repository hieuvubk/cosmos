package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/username/voter/x/voter/types"
	"strings"
	"time"
	"github.com/tendermint/tendermint/crypto"

)

func (k msgServer) CreateRequestAttendance(goCtx context.Context, msg *types.MsgCreateRequestAttendance) (*types.MsgCreateRequestAttendanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendRequestAttendance(
		ctx,
		msg.Creator,
		msg.Time,
		msg.Receiver,
	)

	return &types.MsgCreateRequestAttendanceResponse{
		Id: id,
	}, nil
}


func (k msgServer) UpdateRequestAttendance(goCtx context.Context, msg *types.MsgUpdateRequestAttendance) (*types.MsgUpdateRequestAttendanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var RequestAttendance = types.RequestAttendance{
		Creator:  msg.Creator,
		Id:       msg.Id,
		Accepted: true,
	}

	// Checks that the element exists
	if !k.HasRequestAttendance(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Request %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetRequestAttendanceReceiver(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	attendanceList := k.GetAllAttendance(ctx)
	msgTimeParts := strings.Fields(msg.Time)
	msgTime := msgTimeParts[0]
	for _, existingAttendance := range attendanceList {
		// Check if the account has already checked attendance today
		if existingAttendance.Creator == msg.Creator {
			existingTimeParts := strings.Fields(existingAttendance.Time)
			existingTime := existingTimeParts[0]
			if existingTime == msgTime {
				// Return an error when an attendance has been checked by this account on this day
				return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "You have already checked for attendance today!")
			}
		}
	}

	currentHMSString := msgTimeParts[1]
	currentHMS, _ := time.Parse("15:04:05.999999999", currentHMSString)
	currentHour := currentHMS.Hour()
	// checking late

	creatorAddress, err := sdk.AccAddressFromBech32(k.GetRequestAttendanceReceiver(ctx, msg.Id))
	if err != nil {
		return nil, err
	}

	receiverAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	feeCoins, err := sdk.ParseCoinsNormalized("5token")
	if err != nil {
		return nil, err
	}
	if err := k.bankKeeper.SendCoins(ctx, creatorAddress, receiverAddress, feeCoins); err != nil {
		return nil, err
	}

	if currentHour >= 9 {
		moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
		// deduct token
		coinForReceiver, err := sdk.ParseCoinsNormalized("5token")
		if err != nil {
			return nil, err
		}
		if err := k.bankKeeper.SendCoins(ctx, receiverAddress, moduleAcct, coinForReceiver); err != nil {
			return nil, err
		}
	}

	k.SetRequestAttendance(ctx, RequestAttendance)
	k.AppendAttendance(
		ctx,
		msg.Creator,
		msg.Time,
	)

	return &types.MsgUpdateRequestAttendanceResponse{}, nil
}

func (k msgServer) DeleteRequestAttendance(goCtx context.Context, msg *types.MsgDeleteRequestAttendance) (*types.MsgDeleteRequestAttendanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasRequestAttendance(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetRequestAttendanceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRequestAttendance(ctx, msg.Id)

	return &types.MsgDeleteRequestAttendanceResponse{}, nil
}
