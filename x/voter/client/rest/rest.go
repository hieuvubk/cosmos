package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers voter-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/voter/RequestAttendances/{id}", getRequestAttendanceHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/voter/RequestAttendances", listRequestAttendanceHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/voter/information/{id}", getInformationHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/voter/information", listInformationHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/voter/attendances/{id}", getAttendanceHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/voter/attendances", listAttendanceHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/voter/RequestAttendances", createRequestAttendanceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/voter/RequestAttendances/{id}", updateRequestAttendanceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/voter/RequestAttendances/{id}", deleteRequestAttendanceHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/voter/information", createInformationHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/voter/information/{id}", updateInformationHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/voter/information/{id}", deleteInformationHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/voter/attendances", createAttendanceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/voter/attendances/{id}", updateAttendanceHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/voter/attendances/{id}", deleteAttendanceHandler(clientCtx)).Methods("POST")

}
