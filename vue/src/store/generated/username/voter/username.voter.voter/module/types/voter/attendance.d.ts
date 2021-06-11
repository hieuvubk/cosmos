import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "username.voter.voter";
export interface Attendance {
    creator: string;
    id: number;
    time: string;
}
export declare const Attendance: {
    encode(message: Attendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Attendance;
    fromJSON(object: any): Attendance;
    toJSON(message: Attendance): unknown;
    fromPartial(object: DeepPartial<Attendance>): Attendance;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
