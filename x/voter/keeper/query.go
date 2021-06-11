package keeper

import (
	// this line is used by starport scaffolding # 1
	"github.com/username/voter/x/voter/types"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	abci "github.com/tendermint/tendermint/abci/types"
)

func NewQuerier(k Keeper, legacyQuerierCdc *codec.LegacyAmino) sdk.Querier {
	return func(ctx sdk.Context, path []string, req abci.RequestQuery) ([]byte, error) {
		var (
			res []byte
			err error
		)

		switch path[0] {
		// this line is used by starport scaffolding # 2
		case types.QueryGetRequestAttendance:
			return getRequestAttendance(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListRequestAttendance:
			return listRequestAttendance(ctx, k, legacyQuerierCdc)

		case types.QueryGetInformation:
			return getInformation(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListInformation:
			return listInformation(ctx, k, legacyQuerierCdc)

		case types.QueryGetAttendance:
			return getAttendance(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListAttendance:
			return listAttendance(ctx, k, legacyQuerierCdc)

		default:
			err = sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unknown %s query endpoint: %s", types.ModuleName, path[0])
		}

		return res, err
	}
}
