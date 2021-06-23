import { Reader, Writer } from "protobufjs/minimal";
import { RequestAttendance } from "../voter/RequestAttendance";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Information } from "../voter/information";
import { Attendance } from "../voter/attendance";
export declare const protobufPackage = "username.voter.voter";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetRequestAttendanceRequest {
    id: number;
    receiver: string;
}
export interface QueryGetRequestAttendanceResponse {
    RequestAttendance: RequestAttendance | undefined;
}
export interface QueryAllRequestAttendanceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllRequestAttendanceResponse {
    RequestAttendance: RequestAttendance[];
    pagination: PageResponse | undefined;
}
export interface QueryGetInformationRequest {
    creator: string;
    id: number;
}
export interface QueryGetInformationResponse {
    Information: Information | undefined;
}
export interface QueryAllInformationRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllInformationResponse {
    Information: Information[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAttendanceRequest {
    id: number;
}
export interface QueryGetAttendanceResponse {
    Attendance: Attendance | undefined;
}
export interface QueryAllAttendanceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllAttendanceResponse {
    Attendance: Attendance[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetRequestAttendanceRequest: {
    encode(message: QueryGetRequestAttendanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRequestAttendanceRequest;
    fromJSON(object: any): QueryGetRequestAttendanceRequest;
    toJSON(message: QueryGetRequestAttendanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRequestAttendanceRequest>): QueryGetRequestAttendanceRequest;
};
export declare const QueryGetRequestAttendanceResponse: {
    encode(message: QueryGetRequestAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRequestAttendanceResponse;
    fromJSON(object: any): QueryGetRequestAttendanceResponse;
    toJSON(message: QueryGetRequestAttendanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRequestAttendanceResponse>): QueryGetRequestAttendanceResponse;
};
export declare const QueryAllRequestAttendanceRequest: {
    encode(message: QueryAllRequestAttendanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRequestAttendanceRequest;
    fromJSON(object: any): QueryAllRequestAttendanceRequest;
    toJSON(message: QueryAllRequestAttendanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllRequestAttendanceRequest>): QueryAllRequestAttendanceRequest;
};
export declare const QueryAllRequestAttendanceResponse: {
    encode(message: QueryAllRequestAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRequestAttendanceResponse;
    fromJSON(object: any): QueryAllRequestAttendanceResponse;
    toJSON(message: QueryAllRequestAttendanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllRequestAttendanceResponse>): QueryAllRequestAttendanceResponse;
};
export declare const QueryGetInformationRequest: {
    encode(message: QueryGetInformationRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInformationRequest;
    fromJSON(object: any): QueryGetInformationRequest;
    toJSON(message: QueryGetInformationRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetInformationRequest>): QueryGetInformationRequest;
};
export declare const QueryGetInformationResponse: {
    encode(message: QueryGetInformationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInformationResponse;
    fromJSON(object: any): QueryGetInformationResponse;
    toJSON(message: QueryGetInformationResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetInformationResponse>): QueryGetInformationResponse;
};
export declare const QueryAllInformationRequest: {
    encode(message: QueryAllInformationRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInformationRequest;
    fromJSON(object: any): QueryAllInformationRequest;
    toJSON(message: QueryAllInformationRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllInformationRequest>): QueryAllInformationRequest;
};
export declare const QueryAllInformationResponse: {
    encode(message: QueryAllInformationResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInformationResponse;
    fromJSON(object: any): QueryAllInformationResponse;
    toJSON(message: QueryAllInformationResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllInformationResponse>): QueryAllInformationResponse;
};
export declare const QueryGetAttendanceRequest: {
    encode(message: QueryGetAttendanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAttendanceRequest;
    fromJSON(object: any): QueryGetAttendanceRequest;
    toJSON(message: QueryGetAttendanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAttendanceRequest>): QueryGetAttendanceRequest;
};
export declare const QueryGetAttendanceResponse: {
    encode(message: QueryGetAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAttendanceResponse;
    fromJSON(object: any): QueryGetAttendanceResponse;
    toJSON(message: QueryGetAttendanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAttendanceResponse>): QueryGetAttendanceResponse;
};
export declare const QueryAllAttendanceRequest: {
    encode(message: QueryAllAttendanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAttendanceRequest;
    fromJSON(object: any): QueryAllAttendanceRequest;
    toJSON(message: QueryAllAttendanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAttendanceRequest>): QueryAllAttendanceRequest;
};
export declare const QueryAllAttendanceResponse: {
    encode(message: QueryAllAttendanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAttendanceResponse;
    fromJSON(object: any): QueryAllAttendanceResponse;
    toJSON(message: QueryAllAttendanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllAttendanceResponse>): QueryAllAttendanceResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    RequestAttendance(request: QueryGetRequestAttendanceRequest): Promise<QueryGetRequestAttendanceResponse>;
    RequestAttendanceAll(request: QueryAllRequestAttendanceRequest): Promise<QueryAllRequestAttendanceResponse>;
    Information(request: QueryGetInformationRequest): Promise<QueryGetInformationResponse>;
    InformationAll(request: QueryAllInformationRequest): Promise<QueryAllInformationResponse>;
    Attendance(request: QueryGetAttendanceRequest): Promise<QueryGetAttendanceResponse>;
    AttendanceAll(request: QueryAllAttendanceRequest): Promise<QueryAllAttendanceResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    RequestAttendance(request: QueryGetRequestAttendanceRequest): Promise<QueryGetRequestAttendanceResponse>;
    RequestAttendanceAll(request: QueryAllRequestAttendanceRequest): Promise<QueryAllRequestAttendanceResponse>;
    Information(request: QueryGetInformationRequest): Promise<QueryGetInformationResponse>;
    InformationAll(request: QueryAllInformationRequest): Promise<QueryAllInformationResponse>;
    Attendance(request: QueryGetAttendanceRequest): Promise<QueryGetAttendanceResponse>;
    AttendanceAll(request: QueryAllAttendanceRequest): Promise<QueryAllAttendanceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
