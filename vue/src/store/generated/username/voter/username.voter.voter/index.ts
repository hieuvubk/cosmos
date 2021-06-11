import { txClient, queryClient } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { RequestAttendance } from "./module/types/voter/RequestAttendance"
import { Attendance } from "./module/types/voter/attendance"
import { Information } from "./module/types/voter/information"


async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
        RequestAttendance: {},
        RequestAttendanceAll: {},
        Information: {},
        InformationAll: {},
        Attendance: {},
        AttendanceAll: {},
        
        _Structure: {
            RequestAttendance: getStructure(RequestAttendance.fromPartial({})),
            Attendance: getStructure(Attendance.fromPartial({})),
            Information: getStructure(Information.fromPartial({})),
            
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
        getRequestAttendance: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RequestAttendance[JSON.stringify(params)] ?? {}
		},
        getRequestAttendanceAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.RequestAttendanceAll[JSON.stringify(params)] ?? {}
		},
        getInformation: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Information[JSON.stringify(params)] ?? {}
		},
        getInformationAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.InformationAll[JSON.stringify(params)] ?? {}
		},
        getAttendance: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Attendance[JSON.stringify(params)] ?? {}
		},
        getAttendanceAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.AttendanceAll[JSON.stringify(params)] ?? {}
		},
        
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('init')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach((subscription) => {
				dispatch(subscription.action, subscription.payload)
			})
		},
		async QueryRequestAttendance({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryRequestAttendance( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryRequestAttendance( key.id )).data
				
				commit('QUERY', { query: 'RequestAttendance', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRequestAttendance', payload: { options: { all }, params: {...key},query }})
				return getters['getRequestAttendance']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryRequestAttendance', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryRequestAttendanceAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryRequestAttendanceAll( query)).data:(await (await initQueryClient(rootGetters)).queryRequestAttendanceAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryRequestAttendanceAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'RequestAttendanceAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryRequestAttendanceAll', payload: { options: { all }, params: {...key},query }})
				return getters['getRequestAttendanceAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryRequestAttendanceAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryInformation({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryInformation( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryInformation( key.id )).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryInformation( key.id, {...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'Information', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryInformation', payload: { options: { all }, params: {...key},query }})
				return getters['getInformation']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryInformation', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryInformationAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryInformationAll( query)).data:(await (await initQueryClient(rootGetters)).queryInformationAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryInformationAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'InformationAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryInformationAll', payload: { options: { all }, params: {...key},query }})
				return getters['getInformationAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryInformationAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryAttendance({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryAttendance( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryAttendance( key.id )).data
				
				commit('QUERY', { query: 'Attendance', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAttendance', payload: { options: { all }, params: {...key},query }})
				return getters['getAttendance']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryAttendance', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryAttendanceAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryAttendanceAll( query)).data:(await (await initQueryClient(rootGetters)).queryAttendanceAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryAttendanceAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'AttendanceAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryAttendanceAll', payload: { options: { all }, params: {...key},query }})
				return getters['getAttendanceAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryAttendanceAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		
		async sendMsgCreateAttendance({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateAttendance(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateAttendance:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteRequestAttendance({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteRequestAttendance(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteRequestAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteRequestAttendance:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateRequestAttendance({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateRequestAttendance(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateRequestAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateRequestAttendance:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateInformation({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateInformation(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateInformation:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateInformation:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateInformation({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateInformation(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateInformation:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateInformation:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteInformation({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteInformation(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteInformation:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteInformation:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateAttendance({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateAttendance(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateAttendance:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateRequestAttendance({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateRequestAttendance(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateRequestAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateRequestAttendance:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteAttendance({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteAttendance(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteAttendance:Send', 'Could not broadcast Tx.')
				}
			}
		},
		
		async MsgCreateAttendance({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateAttendance(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateAttendance:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteRequestAttendance({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteRequestAttendance(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteRequestAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteRequestAttendance:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateRequestAttendance({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateRequestAttendance(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateRequestAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateRequestAttendance:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateInformation({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateInformation(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateInformation:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateInformation:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateInformation({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateInformation(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateInformation:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateInformation:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteInformation({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteInformation(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteInformation:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteInformation:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateAttendance({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateAttendance(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateAttendance:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateRequestAttendance({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateRequestAttendance(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateRequestAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateRequestAttendance:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteAttendance({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteAttendance(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteAttendance:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteAttendance:Create', 'Could not create message.')
				}
			}
		},
		
	}
}
