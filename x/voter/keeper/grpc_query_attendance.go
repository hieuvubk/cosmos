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

func (k Keeper) AttendanceAll(c context.Context, req *types.QueryAllAttendanceRequest) (*types.QueryAllAttendanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var attendances []*types.Attendance
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	attendanceStore := prefix.NewStore(store, types.KeyPrefix(types.AttendanceKey))

	pageRes, err := query.Paginate(attendanceStore, req.Pagination, func(key []byte, value []byte) error {
		var attendance types.Attendance
		if err := k.cdc.UnmarshalBinaryBare(value, &attendance); err != nil {
			return err
		}

		attendances = append(attendances, &attendance)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAttendanceResponse{Attendance: attendances, Pagination: pageRes}, nil
}

func (k Keeper) Attendance(c context.Context, req *types.QueryGetAttendanceRequest) (*types.QueryGetAttendanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var attendance types.Attendance
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasAttendance(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAttendanceIDBytes(req.Id)), &attendance)

	return &types.QueryGetAttendanceResponse{Attendance: &attendance}, nil
}
