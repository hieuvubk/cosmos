package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/username/voter/x/voter/types"
)

func (k msgServer) CreateInformation(goCtx context.Context, msg *types.MsgCreateInformation) (*types.MsgCreateInformationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendInformation(
		ctx,
		msg.Creator,
		msg.Name,
		msg.Dob,
		msg.Address,
		msg.Email,
		msg.Phone,
	)

	return &types.MsgCreateInformationResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateInformation(goCtx context.Context, msg *types.MsgUpdateInformation) (*types.MsgUpdateInformationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var information = types.Information{
		Creator: msg.Creator,
		Id:      msg.Id,
		Name:    msg.Name,
		Dob:     msg.Dob,
		Address: msg.Address,
		Email:   msg.Email,
		Phone:   msg.Phone,
	}

	// Checks that the element exists
	if !k.HasInformation(ctx, msg.Creator) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	if k.GetInformation(ctx, msg.Creator).Creator != msg.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("User %s cant update", msg.GetCreator()))
	}

	// Checks if the the msg sender is the same as the current owner
	// if msg.Creator != k.GetInformationOwner(ctx, msg.Id) {
	//     return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	// }
	k.SetInformation(ctx, information)

	return &types.MsgUpdateInformationResponse{}, nil
}

func (k msgServer) DeleteInformation(goCtx context.Context, msg *types.MsgDeleteInformation) (*types.MsgDeleteInformationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasInformation(ctx, msg.Creator) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	// if msg.Creator != k.GetInformationOwner(ctx, msg.Id) {
	//     return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	// }

	k.RemoveInformation(ctx, msg.Creator)

	return &types.MsgDeleteInformationResponse{}, nil
}
