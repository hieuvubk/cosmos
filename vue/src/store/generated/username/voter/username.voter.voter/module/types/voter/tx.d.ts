import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "username.voter.voter";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateRequestAttendance {
    creator: string;
    time: string;
    receiver: string;
}
export interface MsgCreateRequestAttendanceResponse {
    id: number;
}
export interface MsgUpdateRequestAttendance {
    creator: string;
    id: number;
    time: string;
}
export interface MsgUpdateRequestAttendanceResponse {
    creator: string;
    id: number;
    receiver: string;
    accepted: string;
}
export interface MsgDeleteRequestAttendance {
    creator: string;
    id: number;
}
export interface MsgDeleteRequestAttendanceResponse {
}
export interface MsgCreateInformation {
    creator: string;
    name: string;
    dob: string;
    address: string;
    email: string;
    phone: string;
}
export interface MsgCreateInformationResponse {
    id: number;
}
export interface MsgUpdateInformation {
    creator: string;
    id: number;
    name: string;
    dob: string;
    address: string;
    email: string;
    phone: string;
}
export interface MsgUpdateInformationResponse {
}
export interface MsgDeleteInformation {
    creator: string;
    id: number;
}
export interface MsgDeleteInformationResponse {
}
export interface MsgCreateAttendance {
    creator: string;
    time: string;
}
export interface MsgCreateAttendanceResponse {
    id: number;
    time: string;
}
export interface MsgUpdateAttendance {
    creator: string;
    id: number;
    time: string;
}
export interface MsgUpdateAttendanceResponse {
}
export interface MsgDeleteAttendance {
    creator: string;
    id: number;
}
export interface MsgDeleteAttendanceResponse {
}
export declare const MsgCreateRequestAttendance: {
    encode(message: MsgCreateRequestAttendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRequestAttendance;
    fromJSON(object: any): MsgCreateRequestAttendance;
    toJSON(message: MsgCreateRequestAttendance): unknown;
    fromPartial(object: DeepPartial<MsgCreateRequestAttendance>): MsgCreateRequestAttendance;
};
export declare const MsgCreateRequestAttendanceResponse: {
    encode(message: MsgCreateRequestAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRequestAttendanceResponse;
    fromJSON(object: any): MsgCreateRequestAttendanceResponse;
    toJSON(message: MsgCreateRequestAttendanceResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateRequestAttendanceResponse>): MsgCreateRequestAttendanceResponse;
};
export declare const MsgUpdateRequestAttendance: {
    encode(message: MsgUpdateRequestAttendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateRequestAttendance;
    fromJSON(object: any): MsgUpdateRequestAttendance;
    toJSON(message: MsgUpdateRequestAttendance): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRequestAttendance>): MsgUpdateRequestAttendance;
};
export declare const MsgUpdateRequestAttendanceResponse: {
    encode(message: MsgUpdateRequestAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateRequestAttendanceResponse;
    fromJSON(object: any): MsgUpdateRequestAttendanceResponse;
    toJSON(message: MsgUpdateRequestAttendanceResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRequestAttendanceResponse>): MsgUpdateRequestAttendanceResponse;
};
export declare const MsgDeleteRequestAttendance: {
    encode(message: MsgDeleteRequestAttendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteRequestAttendance;
    fromJSON(object: any): MsgDeleteRequestAttendance;
    toJSON(message: MsgDeleteRequestAttendance): unknown;
    fromPartial(object: DeepPartial<MsgDeleteRequestAttendance>): MsgDeleteRequestAttendance;
};
export declare const MsgDeleteRequestAttendanceResponse: {
    encode(_: MsgDeleteRequestAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteRequestAttendanceResponse;
    fromJSON(_: any): MsgDeleteRequestAttendanceResponse;
    toJSON(_: MsgDeleteRequestAttendanceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteRequestAttendanceResponse>): MsgDeleteRequestAttendanceResponse;
};
export declare const MsgCreateInformation: {
    encode(message: MsgCreateInformation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInformation;
    fromJSON(object: any): MsgCreateInformation;
    toJSON(message: MsgCreateInformation): unknown;
    fromPartial(object: DeepPartial<MsgCreateInformation>): MsgCreateInformation;
};
export declare const MsgCreateInformationResponse: {
    encode(message: MsgCreateInformationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateInformationResponse;
    fromJSON(object: any): MsgCreateInformationResponse;
    toJSON(message: MsgCreateInformationResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateInformationResponse>): MsgCreateInformationResponse;
};
export declare const MsgUpdateInformation: {
    encode(message: MsgUpdateInformation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInformation;
    fromJSON(object: any): MsgUpdateInformation;
    toJSON(message: MsgUpdateInformation): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInformation>): MsgUpdateInformation;
};
export declare const MsgUpdateInformationResponse: {
    encode(_: MsgUpdateInformationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInformationResponse;
    fromJSON(_: any): MsgUpdateInformationResponse;
    toJSON(_: MsgUpdateInformationResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateInformationResponse>): MsgUpdateInformationResponse;
};
export declare const MsgDeleteInformation: {
    encode(message: MsgDeleteInformation, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInformation;
    fromJSON(object: any): MsgDeleteInformation;
    toJSON(message: MsgDeleteInformation): unknown;
    fromPartial(object: DeepPartial<MsgDeleteInformation>): MsgDeleteInformation;
};
export declare const MsgDeleteInformationResponse: {
    encode(_: MsgDeleteInformationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteInformationResponse;
    fromJSON(_: any): MsgDeleteInformationResponse;
    toJSON(_: MsgDeleteInformationResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteInformationResponse>): MsgDeleteInformationResponse;
};
export declare const MsgCreateAttendance: {
    encode(message: MsgCreateAttendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAttendance;
    fromJSON(object: any): MsgCreateAttendance;
    toJSON(message: MsgCreateAttendance): unknown;
    fromPartial(object: DeepPartial<MsgCreateAttendance>): MsgCreateAttendance;
};
export declare const MsgCreateAttendanceResponse: {
    encode(message: MsgCreateAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAttendanceResponse;
    fromJSON(object: any): MsgCreateAttendanceResponse;
    toJSON(message: MsgCreateAttendanceResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateAttendanceResponse>): MsgCreateAttendanceResponse;
};
export declare const MsgUpdateAttendance: {
    encode(message: MsgUpdateAttendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAttendance;
    fromJSON(object: any): MsgUpdateAttendance;
    toJSON(message: MsgUpdateAttendance): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAttendance>): MsgUpdateAttendance;
};
export declare const MsgUpdateAttendanceResponse: {
    encode(_: MsgUpdateAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAttendanceResponse;
    fromJSON(_: any): MsgUpdateAttendanceResponse;
    toJSON(_: MsgUpdateAttendanceResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAttendanceResponse>): MsgUpdateAttendanceResponse;
};
export declare const MsgDeleteAttendance: {
    encode(message: MsgDeleteAttendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAttendance;
    fromJSON(object: any): MsgDeleteAttendance;
    toJSON(message: MsgDeleteAttendance): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAttendance>): MsgDeleteAttendance;
};
export declare const MsgDeleteAttendanceResponse: {
    encode(_: MsgDeleteAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAttendanceResponse;
    fromJSON(_: any): MsgDeleteAttendanceResponse;
    toJSON(_: MsgDeleteAttendanceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAttendanceResponse>): MsgDeleteAttendanceResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateRequestAttendance(request: MsgCreateRequestAttendance): Promise<MsgCreateRequestAttendanceResponse>;
    UpdateRequestAttendance(request: MsgUpdateRequestAttendance): Promise<MsgUpdateRequestAttendanceResponse>;
    DeleteRequestAttendance(request: MsgDeleteRequestAttendance): Promise<MsgDeleteRequestAttendanceResponse>;
    CreateInformation(request: MsgCreateInformation): Promise<MsgCreateInformationResponse>;
    UpdateInformation(request: MsgUpdateInformation): Promise<MsgUpdateInformationResponse>;
    DeleteInformation(request: MsgDeleteInformation): Promise<MsgDeleteInformationResponse>;
    CreateAttendance(request: MsgCreateAttendance): Promise<MsgCreateAttendanceResponse>;
    UpdateAttendance(request: MsgUpdateAttendance): Promise<MsgUpdateAttendanceResponse>;
    DeleteAttendance(request: MsgDeleteAttendance): Promise<MsgDeleteAttendanceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateRequestAttendance(request: MsgCreateRequestAttendance): Promise<MsgCreateRequestAttendanceResponse>;
    UpdateRequestAttendance(request: MsgUpdateRequestAttendance): Promise<MsgUpdateRequestAttendanceResponse>;
    DeleteRequestAttendance(request: MsgDeleteRequestAttendance): Promise<MsgDeleteRequestAttendanceResponse>;
    CreateInformation(request: MsgCreateInformation): Promise<MsgCreateInformationResponse>;
    UpdateInformation(request: MsgUpdateInformation): Promise<MsgUpdateInformationResponse>;
    DeleteInformation(request: MsgDeleteInformation): Promise<MsgDeleteInformationResponse>;
    CreateAttendance(request: MsgCreateAttendance): Promise<MsgCreateAttendanceResponse>;
    UpdateAttendance(request: MsgUpdateAttendance): Promise<MsgUpdateAttendanceResponse>;
    DeleteAttendance(request: MsgDeleteAttendance): Promise<MsgDeleteAttendanceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
