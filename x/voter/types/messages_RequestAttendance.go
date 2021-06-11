package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRequestAttendance{}

func NewMsgCreateRequestAttendance(creator string, time string, receiver string) *MsgCreateRequestAttendance {
	return &MsgCreateRequestAttendance{
		Creator:  creator,
		Time:     time,
		Receiver: receiver,
	}
}

func (msg *MsgCreateRequestAttendance) Route() string {
	return RouterKey
}

func (msg *MsgCreateRequestAttendance) Type() string {
	return "CreateRequestAttendance"
}

func (msg *MsgCreateRequestAttendance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRequestAttendance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRequestAttendance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRequestAttendance{}

func NewMsgUpdateRequestAttendance(creator string, id uint64, time string, receiver string) *MsgUpdateRequestAttendance {
	return &MsgUpdateRequestAttendance{
		Id:       id,
		Creator:  creator,
		Time:     time,
		Receiver: receiver,
	}
}

func (msg *MsgUpdateRequestAttendance) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRequestAttendance) Type() string {
	return "UpdateRequestAttendance"
}

func (msg *MsgUpdateRequestAttendance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRequestAttendance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRequestAttendance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateRequestAttendance{}

func NewMsgDeleteRequestAttendance(creator string, id uint64) *MsgDeleteRequestAttendance {
	return &MsgDeleteRequestAttendance{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteRequestAttendance) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRequestAttendance) Type() string {
	return "DeleteRequestAttendance"
}

func (msg *MsgDeleteRequestAttendance) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRequestAttendance) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRequestAttendance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
