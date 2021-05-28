package keeper

import (
	"encoding/binary"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"strconv"
)

// GetInforCount get the total number of infor
func (k Keeper) GetInforCount(ctx sdk.Context) uint64 {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforCountKey))
	byteKey := types.KeyPrefix(types.InforCountKey)
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

// SetInforCount set the total number of infor
func (k Keeper) SetInforCount(ctx sdk.Context, count uint64)  {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforCountKey))
	byteKey := types.KeyPrefix(types.InforCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendInfor appends a infor in the store with a new id and update the count
func (k Keeper) AppendInfor(
    ctx sdk.Context,
    creator string,
    name string,
    age string,
) uint64 {
	// Create the infor
    count := k.GetInforCount(ctx)
	
    var infor = types.Infor{
        Creator: creator,
        Id:      count,
        Name: name,
        Age: age,
    }

    store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforKey))
	key := types.KeyPrefix(types.InforKey + creator)
    value := k.cdc.MustMarshalBinaryBare(&infor)
    store.Set(key, value)

    // Update infor count
    k.SetInforCount(ctx, count+1)

    return count
}

// SetInfor set a specific infor in the store
func (k Keeper) SetInfor(ctx sdk.Context, infor types.Infor) {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforKey))
	key := types.KeyPrefix(types.InforKey + infor.Creator)
	value := k.cdc.MustMarshalBinaryBare(&infor)
	store.Set(key, value)
}

// GetInfor returns a infor from its id
func (k Keeper) GetInfor(ctx sdk.Context, creator string) types.Infor {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforKey))
	var infor types.Infor
	k.cdc.MustUnmarshalBinaryBare(store.Get(types.KeyPrefix(types.InforKey + creator)), &infor)
	return infor
}

// HasInfor checks if the infor exists in the store
func (k Keeper) HasInfor(ctx sdk.Context, creator string) bool {
	store :=  prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforKey))
	return store.Has(types.KeyPrefix(types.InforKey + creator))
}

// GetInforOwner returns the creator of the infor
func (k Keeper) GetInforOwner(ctx sdk.Context, creator string) string {
    return k.GetInfor(ctx, creator).Creator
}

// RemoveInfor removes a infor from the store
func (k Keeper) RemoveInfor(ctx sdk.Context, creator string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforKey))
	store.Delete(types.KeyPrefix(types.InforKey + creator))
}

// GetAllInfor returns all infor
func (k Keeper) GetAllInfor(ctx sdk.Context) (list []types.Infor) {
    store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.InforKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Infor
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
        list = append(list, val)
	}

    return
}

// GetInforIDBytes returns the byte representation of the ID
func GetInforIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetInforIDFromBytes returns ID in uint64 format from a byte array
func GetInforIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
