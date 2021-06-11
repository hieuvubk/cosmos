package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
	"github.com/username/voter/x/voter/types"
	"strings"
	"time"
)

func (k msgServer) CreateAttendance(goCtx context.Context, msg *types.MsgCreateAttendance) (*types.MsgCreateAttendanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Each account should be allowed to have only 1 attendance per day.
	attendanceList := k.GetAllAttendance(ctx)
	msgTimeParts := strings.Fields(msg.Time)
	msgTime := msgTimeParts[0]
	//loc, _ := time.LoadLocation("Asia/Ho_Chi_Minh")
	//todayTime := time.Now().In(loc)
	//todayTimeString := todayTime.String()
	//todayTimeStringParts := strings.Fields(todayTimeString)
	//todayTimeStringPartsDate := todayTimeStringParts[0]
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

	// deduct a number of tokens from the account of the msg's creator if they were checking late
	currentHMSString := msgTimeParts[0] + " " + msgTimeParts[1]
	currentHMS, _ := time.Parse("2006-01-02 15:04:05.999999999", currentHMSString)
	currentHour := currentHMS.Hour()
	currentWeekday := currentHMS.Weekday().String()
	// checking late
	if currentHour >= 9 && currentWeekday != "Saturday" && currentWeekday != "Sunday" {
		moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
		// deduct token
		feeCoins, err := sdk.ParseCoinsNormalized("10token")
		if err != nil {
			return nil, err
		}
		creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
		if err != nil {
			return nil, err
		}
		if err := k.bankKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
			return nil, err
		}
	}

	id := k.AppendAttendance(
		ctx,
		msg.Creator,
		msg.Time,
	)

	time := msg.Time

	return &types.MsgCreateAttendanceResponse{
		Id:   id,
		Time: time,
	}, nil
}

func (k msgServer) UpdateAttendance(goCtx context.Context, msg *types.MsgUpdateAttendance) (*types.MsgUpdateAttendanceResponse, error) {
	return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "You cannot update your attendance by any means!")

	//ctx := sdk.UnwrapSDKContext(goCtx)

	//var attendance = types.Attendance{
	//	Creator: msg.Creator,
	//	Id:      msg.Id,
	//	Time:    msg.Time,
	//}
	//
	//// Checks that the element exists
	//if !k.HasAttendance(ctx, msg.Id) {
	//	return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	//}
	//
	//// Checks if the the msg sender is the same as the current owner
	//if msg.Creator != k.GetAttendanceOwner(ctx, msg.Id) {
	//	return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	//}
	//
	//k.SetAttendance(ctx, attendance)
	//
	//return &types.MsgUpdateAttendanceResponse{}, nil
}

func (k msgServer) DeleteAttendance(goCtx context.Context, msg *types.MsgDeleteAttendance) (*types.MsgDeleteAttendanceResponse, error) {
	return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "You cannot delete your attendance by any means!")
	//ctx := sdk.UnwrapSDKContext(goCtx)
	//
	//if !k.HasAttendance(ctx, msg.Id) {
	//	return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	//}
	//if msg.Creator != k.GetAttendanceOwner(ctx, msg.Id) {
	//	return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	//}
	//
	//k.RemoveAttendance(ctx, msg.Id)
	//
	//return &types.MsgDeleteAttendanceResponse{}, nil
}
