package blog

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/example/blog/x/blog/keeper"
	"github.com/example/blog/x/blog/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
    // this line is used by starport scaffolding # genesis/module/init
// Set all the infor
for _, elem := range genState.InforList {
	k.SetInfor(ctx, *elem)
}

// Set infor count
k.SetInforCount(ctx, uint64(len(genState.InforList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
    genesis := types.DefaultGenesis()

    // this line is used by starport scaffolding # genesis/module/export
// Get all infor
inforList := k.GetAllInfor(ctx)
for _, elem := range inforList {
	elem := elem
	genesis.InforList = append(genesis.InforList, &elem)
}


	return genesis
}
