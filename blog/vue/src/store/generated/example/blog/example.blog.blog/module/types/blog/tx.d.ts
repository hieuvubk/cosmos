import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "example.blog.blog";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateInfor {
    creator: string;
    name: string;
    age: string;
}
export interface MsgCreateInforResponse {
    id: number;
}
export interface MsgUpdateInfor {
    creator: string;
    id: number;
    name: string;
    age: string;
}
export interface MsgUpdateInforResponse {
}
export interface MsgDeleteInfor {
    creator: string;
    id: number;
}
export interface MsgDeleteInforResponse {
}
export declare const MsgCreateInfor: {
    encode(message: MsgCreateInfor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInfor;
    fromJSON(object: any): MsgCreateInfor;
    toJSON(message: MsgCreateInfor): unknown;
    fromPartial(object: DeepPartial<MsgCreateInfor>): MsgCreateInfor;
};
export declare const MsgCreateInforResponse: {
    encode(message: MsgCreateInforResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInforResponse;
    fromJSON(object: any): MsgCreateInforResponse;
    toJSON(message: MsgCreateInforResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateInforResponse>): MsgCreateInforResponse;
};
export declare const MsgUpdateInfor: {
    encode(message: MsgUpdateInfor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInfor;
    fromJSON(object: any): MsgUpdateInfor;
    toJSON(message: MsgUpdateInfor): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInfor>): MsgUpdateInfor;
};
export declare const MsgUpdateInforResponse: {
    encode(_: MsgUpdateInforResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInforResponse;
    fromJSON(_: any): MsgUpdateInforResponse;
    toJSON(_: MsgUpdateInforResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateInforResponse>): MsgUpdateInforResponse;
};
export declare const MsgDeleteInfor: {
    encode(message: MsgDeleteInfor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInfor;
    fromJSON(object: any): MsgDeleteInfor;
    toJSON(message: MsgDeleteInfor): unknown;
    fromPartial(object: DeepPartial<MsgDeleteInfor>): MsgDeleteInfor;
};
export declare const MsgDeleteInforResponse: {
    encode(_: MsgDeleteInforResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInforResponse;
    fromJSON(_: any): MsgDeleteInforResponse;
    toJSON(_: MsgDeleteInforResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteInforResponse>): MsgDeleteInforResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateInfor(request: MsgCreateInfor): Promise<MsgCreateInforResponse>;
    UpdateInfor(request: MsgUpdateInfor): Promise<MsgUpdateInforResponse>;
    DeleteInfor(request: MsgDeleteInfor): Promise<MsgDeleteInforResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateInfor(request: MsgCreateInfor): Promise<MsgCreateInforResponse>;
    UpdateInfor(request: MsgUpdateInfor): Promise<MsgUpdateInforResponse>;
    DeleteInfor(request: MsgDeleteInfor): Promise<MsgDeleteInforResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
