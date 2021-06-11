package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/username/voter/x/voter/types"
)

func (k msgServer) CreateAttendance(goCtx context.Context, msg *types.MsgCreateAttendance) (*types.MsgCreateAttendanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

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
	ctx := sdk.UnwrapSDKContext(goCtx)

	var attendance = types.Attendance{
		Creator: msg.Creator,
		Id:      msg.Id,
		Time:    msg.Time,
	}

	// Checks that the element exists
	if !k.HasAttendance(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetAttendanceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetAttendance(ctx, attendance)

	return &types.MsgUpdateAttendanceResponse{}, nil
}

func (k msgServer) DeleteAttendance(goCtx context.Context, msg *types.MsgDeleteAttendance) (*types.MsgDeleteAttendanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasAttendance(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetAttendanceOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAttendance(ctx, msg.Id)

	return &types.MsgDeleteAttendanceResponse{}, nil
}
