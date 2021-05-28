package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/example/blog/x/blog/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) InforAll(c context.Context, req *types.QueryAllInforRequest) (*types.QueryAllInforResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var infors []*types.Infor
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	inforStore := prefix.NewStore(store, types.KeyPrefix(types.InforKey))

	pageRes, err := query.Paginate(inforStore, req.Pagination, func(key []byte, value []byte) error {
		var infor types.Infor
		if err := k.cdc.UnmarshalBinaryBare(value, &infor); err != nil {
			return err
		}

		infors = append(infors, &infor)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllInforResponse{Infor: infors, Pagination: pageRes}, nil
}

func (k Keeper) Infor(c context.Context, req *types.QueryGetInforRequest) (*types.QueryGetInforResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var infor types.Infor
	ctx := sdk.UnwrapSDKContext(c)

    if !k.HasInfor(ctx, req.Id) {
        return nil, sdkerrors.ErrKeyNotFound
    }

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetInforIDBytes(req.Id)), &infor)

	return &types.QueryGetInforResponse{Infor: &infor}, nil
}
