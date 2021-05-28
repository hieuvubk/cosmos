package blog

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/keeper"
	"github.com/example/blog/x/blog/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
    msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
        // this line is used by starport scaffolding # 1
		case *types.MsgCreateInfor:
					res, err := msgServer.CreateInfor(sdk.WrapSDKContext(ctx), msg)
					return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateInfor:
					res, err := msgServer.UpdateInfor(sdk.WrapSDKContext(ctx), msg)
					return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteInfor:
					res, err := msgServer.DeleteInfor(sdk.WrapSDKContext(ctx), msg)
					return sdk.WrapServiceResult(ctx, res, err)

		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
