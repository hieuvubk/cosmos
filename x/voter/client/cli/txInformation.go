package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/username/voter/x/voter/types"
)

func CmdCreateInformation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-information [name] [dob] [address] [email] [phone]",
		Short: "Creates a new information",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName := string(args[0])
			argsDob := string(args[1])
			argsAddress := string(args[2])
			argsEmail := string(args[3])
			argsPhone := string(args[4])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateInformation(clientCtx.GetFromAddress().String(), string(argsName), string(argsDob), string(argsAddress), string(argsEmail), string(argsPhone))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateInformation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-information [creator] [name] [dob] [address] [email] [phone]",
		Short: "Update a information",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			// id := strconv.ParseUint(args[0], 10, 64)
			// if err != nil {
			//     return err
			// }
			creator := args[0]

			argsName := string(args[1])
			argsDob := string(args[2])
			argsAddress := string(args[3])
			argsEmail := string(args[4])
			argsPhone := string(args[5])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			if clientCtx.GetFromAddress().String() != creator {
				return nil
			}

			msg := types.NewMsgUpdateInformation(clientCtx.GetFromAddress().String(), string(argsName), string(argsDob), string(argsAddress), string(argsEmail), string(argsPhone))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteInformation() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-information [id] [name] [dob] [address] [email] [phone]",
		Short: "Delete a information by id",
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

			msg := types.NewMsgDeleteInformation(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
