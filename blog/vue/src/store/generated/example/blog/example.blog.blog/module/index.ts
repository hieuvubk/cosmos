// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteInfor } from "./types/blog/tx";
import { MsgCreateInfor } from "./types/blog/tx";
import { MsgUpdateInfor } from "./types/blog/tx";


const types = [
  ["/example.blog.blog.MsgDeleteInfor", MsgDeleteInfor],
  ["/example.blog.blog.MsgCreateInfor", MsgCreateInfor],
  ["/example.blog.blog.MsgUpdateInfor", MsgUpdateInfor],
  
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
    msgDeleteInfor: (data: MsgDeleteInfor): EncodeObject => ({ typeUrl: "/example.blog.blog.MsgDeleteInfor", value: data }),
    msgCreateInfor: (data: MsgCreateInfor): EncodeObject => ({ typeUrl: "/example.blog.blog.MsgCreateInfor", value: data }),
    msgUpdateInfor: (data: MsgUpdateInfor): EncodeObject => ({ typeUrl: "/example.blog.blog.MsgUpdateInfor", value: data }),
    
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
