package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/username/voter/x/voter/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) InformationAll(c context.Context, req *types.QueryAllInformationRequest) (*types.QueryAllInformationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var informations []*types.Information
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	informationStore := prefix.NewStore(store, types.KeyPrefix(types.InformationKey))

	pageRes, err := query.Paginate(informationStore, req.Pagination, func(key []byte, value []byte) error {
		var information types.Information
		if err := k.cdc.UnmarshalBinaryBare(value, &information); err != nil {
			return err
		}

		informations = append(informations, &information)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllInformationResponse{Information: informations, Pagination: pageRes}, nil
}

func (k Keeper) Information(c context.Context, req *types.QueryGetInformationRequest) (*types.QueryGetInformationResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var information types.Information
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasInformation(ctx, req.Creator) {
		return nil, sdkerrors.ErrKeyNotFound
	}
	key := []byte(types.InformationKey + req.Creator)
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(key), &information)

	return &types.QueryGetInformationResponse{Information: &information}, nil
}
