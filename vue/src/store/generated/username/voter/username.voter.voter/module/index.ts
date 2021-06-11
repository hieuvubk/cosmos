// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteRequestAttendance } from "./types/voter/tx";
import { MsgCreateInformation } from "./types/voter/tx";
import { MsgUpdateInformation } from "./types/voter/tx";
import { MsgCreateAttendance } from "./types/voter/tx";
import { MsgUpdateAttendance } from "./types/voter/tx";
import { MsgCreateRequestAttendance } from "./types/voter/tx";
import { MsgDeleteAttendance } from "./types/voter/tx";
import { MsgDeleteInformation } from "./types/voter/tx";
import { MsgUpdateRequestAttendance } from "./types/voter/tx";


const types = [
  ["/username.voter.voter.MsgDeleteRequestAttendance", MsgDeleteRequestAttendance],
  ["/username.voter.voter.MsgCreateInformation", MsgCreateInformation],
  ["/username.voter.voter.MsgUpdateInformation", MsgUpdateInformation],
  ["/username.voter.voter.MsgCreateAttendance", MsgCreateAttendance],
  ["/username.voter.voter.MsgUpdateAttendance", MsgUpdateAttendance],
  ["/username.voter.voter.MsgCreateRequestAttendance", MsgCreateRequestAttendance],
  ["/username.voter.voter.MsgDeleteAttendance", MsgDeleteAttendance],
  ["/username.voter.voter.MsgDeleteInformation", MsgDeleteInformation],
  ["/username.voter.voter.MsgUpdateRequestAttendance", MsgUpdateRequestAttendance],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeleteRequestAttendance: (data: MsgDeleteRequestAttendance): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgDeleteRequestAttendance", value: data }),
    msgCreateInformation: (data: MsgCreateInformation): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgCreateInformation", value: data }),
    msgUpdateInformation: (data: MsgUpdateInformation): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgUpdateInformation", value: data }),
    msgCreateAttendance: (data: MsgCreateAttendance): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgCreateAttendance", value: data }),
    msgUpdateAttendance: (data: MsgUpdateAttendance): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgUpdateAttendance", value: data }),
    msgCreateRequestAttendance: (data: MsgCreateRequestAttendance): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgCreateRequestAttendance", value: data }),
    msgDeleteAttendance: (data: MsgDeleteAttendance): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgDeleteAttendance", value: data }),
    msgDeleteInformation: (data: MsgDeleteInformation): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgDeleteInformation", value: data }),
    msgUpdateRequestAttendance: (data: MsgUpdateRequestAttendance): EncodeObject => ({ typeUrl: "/username.voter.voter.MsgUpdateRequestAttendance", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
