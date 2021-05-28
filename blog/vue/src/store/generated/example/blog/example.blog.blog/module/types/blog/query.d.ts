import { Reader, Writer } from "protobufjs/minimal";
import { Infor } from "../blog/infor";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "example.blog.blog";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetInforRequest {
    id: number;
}
export interface QueryGetInforResponse {
    Infor: Infor | undefined;
}
export interface QueryAllInforRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllInforResponse {
    Infor: Infor[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetInforRequest: {
    encode(message: QueryGetInforRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInforRequest;
    fromJSON(object: any): QueryGetInforRequest;
    toJSON(message: QueryGetInforRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetInforRequest>): QueryGetInforRequest;
};
export declare const QueryGetInforResponse: {
    encode(message: QueryGetInforResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInforResponse;
    fromJSON(object: any): QueryGetInforResponse;
    toJSON(message: QueryGetInforResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetInforResponse>): QueryGetInforResponse;
};
export declare const QueryAllInforRequest: {
    encode(message: QueryAllInforRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInforRequest;
    fromJSON(object: any): QueryAllInforRequest;
    toJSON(message: QueryAllInforRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllInforRequest>): QueryAllInforRequest;
};
export declare const QueryAllInforResponse: {
    encode(message: QueryAllInforResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInforResponse;
    fromJSON(object: any): QueryAllInforResponse;
    toJSON(message: QueryAllInforResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllInforResponse>): QueryAllInforResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Infor(request: QueryGetInforRequest): Promise<QueryGetInforResponse>;
    InforAll(request: QueryAllInforRequest): Promise<QueryAllInforResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Infor(request: QueryGetInforRequest): Promise<QueryGetInforResponse>;
    InforAll(request: QueryAllInforRequest): Promise<QueryAllInforResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
