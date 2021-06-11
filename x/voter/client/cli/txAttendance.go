package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/username/voter/x/voter/types"
	"time"
)

func CmdCreateAttendance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-attendance",
		Short: "Creates a new attendance",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			loc, _ := time.LoadLocation("Asia/Ho_Chi_Minh")
			argsTime := time.Now().In(loc)
			argsTimeString := argsTime.String()
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAttendance(clientCtx.GetFromAddress().String(), argsTimeString)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAttendance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-attendance [id]",
		Short: "Update a attendance",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			loc, _ := time.LoadLocation("Asia/Ho_Chi_Minh")
			argsTime := time.Now().In(loc)
			argsTimeString := argsTime.String()

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAttendance(clientCtx.GetFromAddress().String(), id, argsTimeString)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAttendance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-attendance [id]",
		Short: "Delete a attendance by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteAttendance(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
