package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
    // this line is used by starport scaffolding # 1
)

const (
    MethodGet = "GET"
)

// RegisterRoutes registers blog-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
    // this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
    // this line is used by starport scaffolding # 3
    r.HandleFunc("/blog/infors/{id}", getInforHandler(clientCtx)).Methods("GET")
    r.HandleFunc("/blog/infors", listInforHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
    // this line is used by starport scaffolding # 4
    r.HandleFunc("/blog/infors", createInforHandler(clientCtx)).Methods("POST")
    r.HandleFunc("/blog/infors/{id}", updateInforHandler(clientCtx)).Methods("POST")
    r.HandleFunc("/blog/infors/{id}", deleteInforHandler(clientCtx)).Methods("POST")

}
