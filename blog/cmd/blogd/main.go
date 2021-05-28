package main

import (
	"os"

	"github.com/example/blog/cmd/blogd/cmd"
    svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/example/blog/app"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd()
    if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}
