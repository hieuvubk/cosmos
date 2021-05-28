import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "example.blog.blog";
export interface Infor {
    creator: string;
    id: number;
    name: string;
    age: string;
}
export declare const Infor: {
    encode(message: Infor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Infor;
    fromJSON(object: any): Infor;
    toJSON(message: Infor): unknown;
    fromPartial(object: DeepPartial<Infor>): Infor;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
