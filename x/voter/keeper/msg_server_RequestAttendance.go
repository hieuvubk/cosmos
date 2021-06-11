package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/username/voter/x/voter/types"
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
		Time:     msg.Time,
		Receiver: msg.Receiver,
	}

	// Checks that the element exists
	if !k.HasRequestAttendance(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetRequestAttendanceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRequestAttendance(ctx, RequestAttendance)

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
