package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/username/voter/x/voter/types"
	"strconv"
)

// GetInformationCount get the total number of information
func (k Keeper) GetInformationCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationCountKey))
	byteKey := types.KeyPrefix(types.InformationCountKey)
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

// SetInformationCount set the total number of information
func (k Keeper) SetInformationCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationCountKey))
	byteKey := types.KeyPrefix(types.InformationCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendInformation appends a information in the store with a new id and update the count
func (k Keeper) AppendInformation(
	ctx sdk.Context,
	creator string,
	name string,
	dob string,
	address string,
	email string,
	phone string,
) uint64 {
	// Create the information
	count := k.GetInformationCount(ctx)
	var information = types.Information{
		Creator: creator,
		Id:      count,
		Name:    name,
		Dob:     dob,
		Address: address,
		Email:   email,
		Phone:   phone,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationKey))
	key := []byte(types.InformationKey + creator)
	value := k.cdc.MustMarshalBinaryBare(&information)
	store.Set(key, value)

	// Update information count
	k.SetInformationCount(ctx, count+1)

	return count
}

// SetInformation set a specific information in the store
func (k Keeper) SetInformation(ctx sdk.Context, information types.Information) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationKey))
	key := []byte(types.InformationKey + information.Creator)
	value := k.cdc.MustMarshalBinaryBare(&information)
	store.Set(key, value)
}

// GetInformation returns a information from its id
func (k Keeper) GetInformation(ctx sdk.Context, creator string) types.Information {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationKey))
	key := []byte(types.InformationKey + creator)
	var information types.Information
	k.cdc.MustUnmarshalBinaryBare(store.Get(key), &information)
	return information
}

// HasInformation checks if the information exists in the store
func (k Keeper) HasInformation(ctx sdk.Context, creator string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationKey))
	key := []byte(types.InformationKey + creator)
	return store.Has(key)
}

// GetInformationOwner returns the creator of the information
// func (k Keeper) GetInformationOwner(ctx sdk.Context, id uint64) string {
//     return k.GetInformation(ctx, id).Creator
// }

// RemoveInformation removes a information from the store
func (k Keeper) RemoveInformation(ctx sdk.Context, creator string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationKey))
	key := []byte(types.InformationKey + creator)
	store.Delete(key)
}

// GetAllInformation returns all information
func (k Keeper) GetAllInformation(ctx sdk.Context) (list []types.Information) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InformationKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Information
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetInformationIDBytes returns the byte representation of the ID
func GetInformationIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetInformationIDFromBytes returns ID in uint64 format from a byte array
func GetInformationIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
