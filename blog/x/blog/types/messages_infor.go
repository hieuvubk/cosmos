package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateInfor{}

func NewMsgCreateInfor(creator string, name string, age string) *MsgCreateInfor {
  return &MsgCreateInfor{
		Creator: creator,
    Name: name,
    Age: age,
	}
}

func (msg *MsgCreateInfor) Route() string {
  return RouterKey
}

func (msg *MsgCreateInfor) Type() string {
  return "CreateInfor"
}

func (msg *MsgCreateInfor) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgCreateInfor) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateInfor) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  	if err != nil {
  		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  	}
  return nil
}

var _ sdk.Msg = &MsgUpdateInfor{}

func NewMsgUpdateInfor(creator string, id uint64, name string, age string) *MsgUpdateInfor {
  return &MsgUpdateInfor{
        Id: id,
		Creator: creator,
    Name: name,
    Age: age,
	}
}

func (msg *MsgUpdateInfor) Route() string {
  return RouterKey
}

func (msg *MsgUpdateInfor) Type() string {
  return "UpdateInfor"
}

func (msg *MsgUpdateInfor) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateInfor) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateInfor) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  }
   return nil
}

var _ sdk.Msg = &MsgCreateInfor{}

func NewMsgDeleteInfor(creator string, id uint64) *MsgDeleteInfor {
  return &MsgDeleteInfor{
        Id: id,
		Creator: creator,
	}
} 
func (msg *MsgDeleteInfor) Route() string {
  return RouterKey
}

func (msg *MsgDeleteInfor) Type() string {
  return "DeleteInfor"
}

func (msg *MsgDeleteInfor) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteInfor) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteInfor) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  }
  return nil
}
