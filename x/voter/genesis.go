package voter

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/username/voter/x/voter/keeper"
	"github.com/username/voter/x/voter/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the RequestAttendance
	for _, elem := range genState.RequestAttendanceList {
		k.SetRequestAttendance(ctx, *elem)
	}

	// Set RequestAttendance count
	k.SetRequestAttendanceCount(ctx, uint64(len(genState.RequestAttendanceList)))

	// Set all the information
	for _, elem := range genState.InformationList {
		k.SetInformation(ctx, *elem)
	}

	// Set information count
	k.SetInformationCount(ctx, uint64(len(genState.InformationList)))

	// Set all the attendance
	for _, elem := range genState.AttendanceList {
		k.SetAttendance(ctx, *elem)
	}

	// Set attendance count
	k.SetAttendanceCount(ctx, uint64(len(genState.AttendanceList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all RequestAttendance
	RequestAttendanceList := k.GetAllRequestAttendance(ctx)
	for _, elem := range RequestAttendanceList {
		elem := elem
		genesis.RequestAttendanceList = append(genesis.RequestAttendanceList, &elem)
	}

	// Get all information
	informationList := k.GetAllInformation(ctx)
	for _, elem := range informationList {
		elem := elem
		genesis.InformationList = append(genesis.InformationList, &elem)
	}

	// Get all attendance
	attendanceList := k.GetAllAttendance(ctx)
	for _, elem := range attendanceList {
		elem := elem
		genesis.AttendanceList = append(genesis.AttendanceList, &elem)
	}

	return genesis
}
