/* eslint-disable */
import { RequestAttendance } from "../voter/RequestAttendance";
import { Information } from "../voter/information";
import { Attendance } from "../voter/attendance";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "username.voter.voter";

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  RequestAttendanceList: RequestAttendance[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  informationList: Information[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  attendanceList: Attendance[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.RequestAttendanceList) {
      RequestAttendance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.informationList) {
      Information.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attendanceList) {
      Attendance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.RequestAttendanceList = [];
    message.informationList = [];
    message.attendanceList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.RequestAttendanceList.push(
            RequestAttendance.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.informationList.push(
            Information.decode(reader, reader.uint32())
          );
          break;
        case 1:
          message.attendanceList.push(
            Attendance.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.RequestAttendanceList = [];
    message.informationList = [];
    message.attendanceList = [];
    if (
      object.RequestAttendanceList !== undefined &&
      object.RequestAttendanceList !== null
    ) {
      for (const e of object.RequestAttendanceList) {
        message.RequestAttendanceList.push(RequestAttendance.fromJSON(e));
      }
    }
    if (
      object.informationList !== undefined &&
      object.informationList !== null
    ) {
      for (const e of object.informationList) {
        message.informationList.push(Information.fromJSON(e));
      }
    }
    if (object.attendanceList !== undefined && object.attendanceList !== null) {
      for (const e of object.attendanceList) {
        message.attendanceList.push(Attendance.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.RequestAttendanceList) {
      obj.RequestAttendanceList = message.RequestAttendanceList.map((e) =>
        e ? RequestAttendance.toJSON(e) : undefined
      );
    } else {
      obj.RequestAttendanceList = [];
    }
    if (message.informationList) {
      obj.informationList = message.informationList.map((e) =>
        e ? Information.toJSON(e) : undefined
      );
    } else {
      obj.informationList = [];
    }
    if (message.attendanceList) {
      obj.attendanceList = message.attendanceList.map((e) =>
        e ? Attendance.toJSON(e) : undefined
      );
    } else {
      obj.attendanceList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.RequestAttendanceList = [];
    message.informationList = [];
    message.attendanceList = [];
    if (
      object.RequestAttendanceList !== undefined &&
      object.RequestAttendanceList !== null
    ) {
      for (const e of object.RequestAttendanceList) {
        message.RequestAttendanceList.push(RequestAttendance.fromPartial(e));
      }
    }
    if (
      object.informationList !== undefined &&
      object.informationList !== null
    ) {
      for (const e of object.informationList) {
        message.informationList.push(Information.fromPartial(e));
      }
    }
    if (object.attendanceList !== undefined && object.attendanceList !== null) {
      for (const e of object.attendanceList) {
        message.attendanceList.push(Attendance.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
