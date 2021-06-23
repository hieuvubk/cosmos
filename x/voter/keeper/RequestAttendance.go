package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/username/voter/x/voter/types"
)

// GetRequestAttendanceCount get the total number of RequestAttendance
func (k Keeper) GetRequestAttendanceCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceCountKey))
	byteKey := types.KeyPrefix(types.RequestAttendanceCountKey)
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

// SetRequestAttendanceCount set the total number of RequestAttendance
func (k Keeper) SetRequestAttendanceCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceCountKey))
	byteKey := types.KeyPrefix(types.RequestAttendanceCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendRequestAttendance appends a RequestAttendance in the store with a new id and update the count
func (k Keeper) AppendRequestAttendance(
	ctx sdk.Context,
	creator string,
	time string,
	receiver string,
) uint64 {
	// Create the RequestAttendance
	count := k.GetRequestAttendanceCount(ctx)
	var RequestAttendance = types.RequestAttendance{
		Creator:  creator,
		Id:       count,
		Time:     time,
		Receiver: receiver,
		Accepted: false,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	value := k.cdc.MustMarshalBinaryBare(&RequestAttendance)
	store.Set(GetRequestAttendanceIDBytes(RequestAttendance.Id), value)

	// Update RequestAttendance count
	k.SetRequestAttendanceCount(ctx, count+1)

	return count
}

// SetRequestAttendance set a specific RequestAttendance in the store
func (k Keeper) SetRequestAttendance(ctx sdk.Context, RequestAttendance types.RequestAttendance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	b := k.cdc.MustMarshalBinaryBare(&RequestAttendance)
	store.Set(GetRequestAttendanceIDBytes(RequestAttendance.Id), b)
}

// GetRequestAttendance returns a RequestAttendance from its id
func (k Keeper) GetRequestAttendance(ctx sdk.Context, id uint64) types.RequestAttendance {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	var RequestAttendance types.RequestAttendance
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRequestAttendanceIDBytes(id)), &RequestAttendance)
	return RequestAttendance
}

// HasRequestAttendance checks if the RequestAttendance exists in the store
func (k Keeper) HasRequestAttendance(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	return store.Has(GetRequestAttendanceIDBytes(id))
}

func (k Keeper) CheckRequestReceiver(ctx sdk.Context, id uint64, receiver string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	var RequestAttendance types.RequestAttendance
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRequestAttendanceIDBytes(id)), &RequestAttendance)
	if(RequestAttendance.GetReceiver() == receiver) {
		return true
	}
	return false
}

// GetRequestAttendanceOwner returns the creator of the RequestAttendance
func (k Keeper) GetRequestAttendanceOwner(ctx sdk.Context, id uint64) string {
	return k.GetRequestAttendance(ctx, id).Creator
}

func (k Keeper) GetRequestAttendanceReceiver(ctx sdk.Context, id uint64) string {
	return k.GetRequestAttendance(ctx, id).Receiver
}

// RemoveRequestAttendance removes a RequestAttendance from the store
func (k Keeper) RemoveRequestAttendance(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	store.Delete(GetRequestAttendanceIDBytes(id))
}

// GetAllRequestAttendance returns all RequestAttendance
func (k Keeper) GetAllRequestAttendance(ctx sdk.Context) (list []types.RequestAttendance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RequestAttendance
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) GetRequestAttendancesReceived(ctx sdk.Context, receiver string) (list []types.RequestAttendance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RequestAttendance
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if(val.GetCreator() == receiver && !val.GetAccepted()) {
			list = append(list, val)
		}
	}
	return
}

func (k Keeper) GetRequestAttendancesReceivedByDate(ctx sdk.Context, receiver string, date string) (list []types.RequestAttendance) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RequestAttendanceKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RequestAttendance
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if(val.GetCreator() == receiver && !val.GetAccepted() && val.GetTime() == date) {
			list = append(list, val)
		}
	}
	return
}

// GetRequestAttendanceIDBytes returns the byte representation of the ID
func GetRequestAttendanceIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetRequestAttendanceIDFromBytes returns ID in uint64 format from a byte array
func GetRequestAttendanceIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
