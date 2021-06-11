package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateRequestAttendance{}, "voter/CreateRequestAttendance", nil)
	cdc.RegisterConcrete(&MsgUpdateRequestAttendance{}, "voter/UpdateRequestAttendance", nil)
	cdc.RegisterConcrete(&MsgDeleteRequestAttendance{}, "voter/DeleteRequestAttendance", nil)

	cdc.RegisterConcrete(&MsgCreateInformation{}, "voter/CreateInformation", nil)
	cdc.RegisterConcrete(&MsgUpdateInformation{}, "voter/UpdateInformation", nil)
	cdc.RegisterConcrete(&MsgDeleteInformation{}, "voter/DeleteInformation", nil)

	cdc.RegisterConcrete(&MsgCreateAttendance{}, "voter/CreateAttendance", nil)
	cdc.RegisterConcrete(&MsgUpdateAttendance{}, "voter/UpdateAttendance", nil)
	cdc.RegisterConcrete(&MsgDeleteAttendance{}, "voter/DeleteAttendance", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRequestAttendance{},
		&MsgUpdateRequestAttendance{},
		&MsgDeleteRequestAttendance{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateInformation{},
		&MsgUpdateInformation{},
		&MsgDeleteInformation{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAttendance{},
		&MsgUpdateAttendance{},
		&MsgDeleteAttendance{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
