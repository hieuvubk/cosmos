package keeper

import (
    "fmt"
	"context"

    "github.com/example/blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)


func (k msgServer) CreateInfor(goCtx context.Context,  msg *types.MsgCreateInfor) (*types.MsgCreateInforResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    id := k.AppendInfor(
        ctx,
        msg.Creator,
        msg.Name,
        msg.Age,
    )

	return &types.MsgCreateInforResponse{
	    Id: id,
	}, nil
}

func (k msgServer) UpdateInfor(goCtx context.Context,  msg *types.MsgUpdateInfor) (*types.MsgUpdateInforResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    var infor = types.Infor{
		Creator: msg.Creator,
		Id:      msg.Id,
    	Name: msg.Name,
    	Age: msg.Age,
	}

    // Checks that the element exists
    if !k.HasInfor(ctx, msg.Creator) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
    }

    // Checks if the the msg sender is the same as the current owner
    if msg.Creator != k.GetInforOwner(ctx, msg.Creator) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
    }

	k.SetInfor(ctx, infor)

	return &types.MsgUpdateInforResponse{}, nil
}

func (k msgServer) DeleteInfor(goCtx context.Context,  msg *types.MsgDeleteInfor) (*types.MsgDeleteInforResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    if !k.HasInfor(ctx, msg.Creator) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
    }
    if msg.Creator != k.GetInforOwner(ctx, msg.Creator) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
    }

	k.RemoveInfor(ctx, msg.Creator)

	return &types.MsgDeleteInforResponse{}, nil
}
