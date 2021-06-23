import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateRequestAttendance } from "./types/voter/tx";
import { MsgCreateAttendance } from "./types/voter/tx";
import { MsgUpdateRequestAttendance } from "./types/voter/tx";
import { MsgDeleteRequestAttendance } from "./types/voter/tx";
import { MsgUpdateInformation } from "./types/voter/tx";
import { MsgUpdateAttendance } from "./types/voter/tx";
import { MsgCreateInformation } from "./types/voter/tx";
import { MsgDeleteInformation } from "./types/voter/tx";
import { MsgDeleteAttendance } from "./types/voter/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateRequestAttendance: (data: MsgCreateRequestAttendance) => EncodeObject;
    msgCreateAttendance: (data: MsgCreateAttendance) => EncodeObject;
    msgUpdateRequestAttendance: (data: MsgUpdateRequestAttendance) => EncodeObject;
    msgDeleteRequestAttendance: (data: MsgDeleteRequestAttendance) => EncodeObject;
    msgUpdateInformation: (data: MsgUpdateInformation) => EncodeObject;
    msgUpdateAttendance: (data: MsgUpdateAttendance) => EncodeObject;
    msgCreateInformation: (data: MsgCreateInformation) => EncodeObject;
    msgDeleteInformation: (data: MsgDeleteInformation) => EncodeObject;
    msgDeleteAttendance: (data: MsgDeleteAttendance) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
