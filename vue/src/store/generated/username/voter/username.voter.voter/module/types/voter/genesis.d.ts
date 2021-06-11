import { RequestAttendance } from "../voter/RequestAttendance";
import { Information } from "../voter/information";
import { Attendance } from "../voter/attendance";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "username.voter.voter";
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    RequestAttendanceList: RequestAttendance[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    informationList: Information[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    attendanceList: Attendance[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
