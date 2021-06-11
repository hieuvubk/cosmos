package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateInformation{}

func NewMsgCreateInformation(creator string, name string, dob string, address string, email string, phone string) *MsgCreateInformation {
	return &MsgCreateInformation{
		Creator: creator,
		Name:    name,
		Dob:     dob,
		Address: address,
		Email:   email,
		Phone:   phone,
	}
}

func (msg *MsgCreateInformation) Route() string {
	return RouterKey
}

func (msg *MsgCreateInformation) Type() string {
	return "CreateInformation"
}

func (msg *MsgCreateInformation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateInformation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateInformation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateInformation{}

func NewMsgUpdateInformation(creator string, name string, dob string, address string, email string, phone string) *MsgUpdateInformation {
	return &MsgUpdateInformation{
		Creator: creator,
		Name:    name,
		Dob:     dob,
		Address: address,
		Email:   email,
		Phone:   phone,
	}
}

func (msg *MsgUpdateInformation) Route() string {
	return RouterKey
}

func (msg *MsgUpdateInformation) Type() string {
	return "UpdateInformation"
}

func (msg *MsgUpdateInformation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateInformation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateInformation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateInformation{}

func NewMsgDeleteInformation(creator string, id uint64) *MsgDeleteInformation {
	return &MsgDeleteInformation{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteInformation) Route() string {
	return RouterKey
}

func (msg *MsgDeleteInformation) Type() string {
	return "DeleteInformation"
}

func (msg *MsgDeleteInformation) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteInformation) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteInformation) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
