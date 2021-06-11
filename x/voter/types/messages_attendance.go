package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAttendance{}

func NewMsgCreateAttendance(creator string, time string) *MsgCreateAttendance {
	return &MsgCreateAttendance{
		Creator: creator,
		Time:    time,
	}
}

func (msg *MsgCreateAttendance) Route() string {
	return RouterKey
}

func (msg *MsgCreateAttendance) Type() string {
	return "CreateAttendance"
}

func (msg *MsgCreateAttendance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAttendance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAttendance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAttendance{}

func NewMsgUpdateAttendance(creator string, id uint64, time string) *MsgUpdateAttendance {
	return &MsgUpdateAttendance{
		Id:      id,
		Creator: creator,
		Time:    time,
	}
}

func (msg *MsgUpdateAttendance) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAttendance) Type() string {
	return "UpdateAttendance"
}

func (msg *MsgUpdateAttendance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAttendance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAttendance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateAttendance{}

func NewMsgDeleteAttendance(creator string, id uint64) *MsgDeleteAttendance {
	return &MsgDeleteAttendance{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteAttendance) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAttendance) Type() string {
	return "DeleteAttendance"
}

func (msg *MsgDeleteAttendance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAttendance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAttendance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
