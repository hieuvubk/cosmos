import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "username.voter.voter";
export interface Information {
    creator: string;
    id: number;
    name: string;
    dob: string;
    address: string;
    email: string;
    phone: string;
}
export declare const Information: {
    encode(message: Information, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Information;
    fromJSON(object: any): Information;
    toJSON(message: Information): unknown;
    fromPartial(object: DeepPartial<Information>): Information;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
