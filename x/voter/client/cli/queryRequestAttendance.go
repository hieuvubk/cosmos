package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/username/voter/x/voter/types"
)

func CmdListRequestAttendance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-RequestAttendance",
		Short: "list all RequestAttendance",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllRequestAttendanceRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.RequestAttendanceAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowRequestAttendance() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-RequestAttendance",
		Short: "shows a RequestAttendance",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			receiver := clientCtx.GetFromAddress().String()


			params := &types.QueryGetRequestAttendanceRequest{
				Receiver: receiver,
			}

			res, err := queryClient.RequestAttendance(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

