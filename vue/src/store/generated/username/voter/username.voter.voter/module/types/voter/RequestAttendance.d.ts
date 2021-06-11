import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "username.voter.voter";
export interface RequestAttendance {
    creator: string;
    id: number;
    time: string;
    receiver: string;
}
export declare const RequestAttendance: {
    encode(message: RequestAttendance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RequestAttendance;
    fromJSON(object: any): RequestAttendance;
    toJSON(message: RequestAttendance): unknown;
    fromPartial(object: DeepPartial<RequestAttendance>): RequestAttendance;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
