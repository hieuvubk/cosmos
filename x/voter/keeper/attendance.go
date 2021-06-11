package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/username/voter/x/voter/types"
	"strconv"
	"strings"
)

// GetAttendanceCount get the total number of attendance
func (k Keeper) GetAttendanceCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceCountKey))
	byteKey := types.KeyPrefix(types.AttendanceCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetAttendanceCount set the total number of attendance
func (k Keeper) SetAttendanceCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceCountKey))
	byteKey := types.KeyPrefix(types.AttendanceCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendAttendance appends a attendance in the store with a new id and update the count
func (k Keeper) AppendAttendance(
	ctx sdk.Context,
	creator string,
	time string,
) uint64 {
	// Create the attendance
	count := k.GetAttendanceCount(ctx)
	var attendance = types.Attendance{
		Creator: creator,
		Id:      count,
		Time:    time,
	}
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceKey))

	value := k.cdc.MustMarshalBinaryBare(&attendance)
	store.Set(GetAttendanceIDBytes(attendance.Id), value)

	// Update attendance count
	k.SetAttendanceCount(ctx, count+1)

	return count
}

// SetAttendance set a specific attendance in the store
func (k Keeper) SetAttendance(ctx sdk.Context, attendance types.Attendance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceKey))
	b := k.cdc.MustMarshalBinaryBare(&attendance)
	store.Set(GetAttendanceIDBytes(attendance.Id), b)
}

// GetAttendance returns a attendance from its id
func (k Keeper) GetAttendance(ctx sdk.Context, id uint64) types.Attendance {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceKey))
	var attendance types.Attendance
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAttendanceIDBytes(id)), &attendance)
	return attendance
}

// HasAttendance checks if the attendance exists in the store
func (k Keeper) HasAttendance(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceKey))
	return store.Has(GetAttendanceIDBytes(id))
}

// GetAttendanceOwner returns the creator of the attendance
func (k Keeper) GetAttendanceOwner(ctx sdk.Context, id uint64) string {
	return k.GetAttendance(ctx, id).Creator
}

func (k Keeper) GetAttendanceDate(ctx sdk.Context, id uint64) string {
	time := k.GetAttendance(ctx, id).Time
	date := strings.Split(time, " ")[0]
	return date
}

// RemoveAttendance removes a attendance from the store
func (k Keeper) RemoveAttendance(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceKey))
	store.Delete(GetAttendanceIDBytes(id))
}

// GetAllAttendance returns all attendance
func (k Keeper) GetAllAttendance(ctx sdk.Context) (list []types.Attendance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AttendanceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Attendance
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAttendanceIDBytes returns the byte representation of the ID
func GetAttendanceIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAttendanceIDFromBytes returns ID in uint64 format from a byte array
func GetAttendanceIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
