import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
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
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteRequestAttendance: (data: MsgDeleteRequestAttendance) => EncodeObject;
    msgCreateInformation: (data: MsgCreateInformation) => EncodeObject;
    msgUpdateInformation: (data: MsgUpdateInformation) => EncodeObject;
    msgCreateAttendance: (data: MsgCreateAttendance) => EncodeObject;
    msgUpdateAttendance: (data: MsgUpdateAttendance) => EncodeObject;
    msgCreateRequestAttendance: (data: MsgCreateRequestAttendance) => EncodeObject;
    msgDeleteAttendance: (data: MsgDeleteAttendance) => EncodeObject;
    msgDeleteInformation: (data: MsgDeleteInformation) => EncodeObject;
    msgUpdateRequestAttendance: (data: MsgUpdateRequestAttendance) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
