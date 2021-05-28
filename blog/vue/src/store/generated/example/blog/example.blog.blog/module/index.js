// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteInfor } from "./types/blog/tx";
import { MsgCreateInfor } from "./types/blog/tx";
import { MsgUpdateInfor } from "./types/blog/tx";
const types = [
    ["/example.blog.blog.MsgDeleteInfor", MsgDeleteInfor],
    ["/example.blog.blog.MsgCreateInfor", MsgCreateInfor],
    ["/example.blog.blog.MsgUpdateInfor", MsgUpdateInfor],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteInfor: (data) => ({ typeUrl: "/example.blog.blog.MsgDeleteInfor", value: data }),
        msgCreateInfor: (data) => ({ typeUrl: "/example.blog.blog.MsgCreateInfor", value: data }),
        msgUpdateInfor: (data) => ({ typeUrl: "/example.blog.blog.MsgUpdateInfor", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
