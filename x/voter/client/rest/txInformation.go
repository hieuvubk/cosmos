package rest

import (
	"net/http"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/gorilla/mux"
	"github.com/username/voter/x/voter/types"
)

type createInformationRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
	Name    string       `json:"name"`
	Dob     string       `json:"dob"`
	Address string       `json:"address"`
	Email   string       `json:"email"`
	Phone   string       `json:"phone"`
}

func createInformationHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createInformationRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err := sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedName := req.Name

		parsedDob := req.Dob

		parsedAddress := req.Address

		parsedEmail := req.Email

		parsedPhone := req.Phone

		msg := types.NewMsgCreateInformation(
			req.Creator,
			parsedName,
			parsedDob,
			parsedAddress,
			parsedEmail,
			parsedPhone,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type updateInformationRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
	Name    string       `json:"name"`
	Dob     string       `json:"dob"`
	Address string       `json:"address"`
	Email   string       `json:"email"`
	Phone   string       `json:"phone"`
}

func updateInformationHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		// if err != nil {
		//     return
		// }

		var req updateInformationRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		// _, err = sdk.AccAddressFromBech32(req.Creator)
		// if err != nil {
		// 	rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
		// 	return
		// }

		parsedName := req.Name

		parsedDob := req.Dob

		parsedAddress := req.Address

		parsedEmail := req.Email

		parsedPhone := req.Phone

		msg := types.NewMsgUpdateInformation(
			req.Creator,
			parsedName,
			parsedDob,
			parsedAddress,
			parsedEmail,
			parsedPhone,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type deleteInformationRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
}

func deleteInformationHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req deleteInformationRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		msg := types.NewMsgDeleteInformation(
			req.Creator,
			id,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}
