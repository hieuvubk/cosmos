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

func (k Keeper) RequestAttendanceAll(c context.Context, req *types.QueryAllRequestAttendanceRequest) (*types.QueryAllRequestAttendanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var RequestAttendances []*types.RequestAttendance
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	RequestAttendanceStore := prefix.NewStore(store, types.KeyPrefix(types.RequestAttendanceKey))

	pageRes, err := query.Paginate(RequestAttendanceStore, req.Pagination, func(key []byte, value []byte) error {
		var RequestAttendance types.RequestAttendance
		if err := k.cdc.UnmarshalBinaryBare(value, &RequestAttendance); err != nil {
			return err
		}

		RequestAttendances = append(RequestAttendances, &RequestAttendance)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRequestAttendanceResponse{RequestAttendance: RequestAttendances, Pagination: pageRes}, nil
}

func (k Keeper) RequestAttendance(c context.Context, req *types.QueryGetRequestAttendanceRequest) (*types.QueryGetRequestAttendanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var RequestAttendance types.RequestAttendance
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasRequestAttendance(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRequestAttendanceIDBytes(req.Id)), &RequestAttendance)

	return &types.QueryGetRequestAttendanceResponse{RequestAttendance: &RequestAttendance}, nil
}
