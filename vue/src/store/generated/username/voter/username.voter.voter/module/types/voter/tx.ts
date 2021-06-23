/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "username.voter.voter";

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

export interface MsgDeleteRequestAttendanceResponse {}

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

export interface MsgUpdateInformationResponse {}

export interface MsgDeleteInformation {
  creator: string;
  id: number;
}

export interface MsgDeleteInformationResponse {}

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

export interface MsgUpdateAttendanceResponse {}

export interface MsgDeleteAttendance {
  creator: string;
  id: number;
}

export interface MsgDeleteAttendanceResponse {}

const baseMsgCreateRequestAttendance: object = {
  creator: "",
  time: "",
  receiver: "",
};

export const MsgCreateRequestAttendance = {
  encode(
    message: MsgCreateRequestAttendance,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.time !== "") {
      writer.uint32(18).string(message.time);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateRequestAttendance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRequestAttendance,
    } as MsgCreateRequestAttendance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.time = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRequestAttendance {
    const message = {
      ...baseMsgCreateRequestAttendance,
    } as MsgCreateRequestAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgCreateRequestAttendance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.time !== undefined && (obj.time = message.time);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRequestAttendance>
  ): MsgCreateRequestAttendance {
    const message = {
      ...baseMsgCreateRequestAttendance,
    } as MsgCreateRequestAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgCreateRequestAttendanceResponse: object = { id: 0 };

export const MsgCreateRequestAttendanceResponse = {
  encode(
    message: MsgCreateRequestAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateRequestAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRequestAttendanceResponse,
    } as MsgCreateRequestAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRequestAttendanceResponse {
    const message = {
      ...baseMsgCreateRequestAttendanceResponse,
    } as MsgCreateRequestAttendanceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateRequestAttendanceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRequestAttendanceResponse>
  ): MsgCreateRequestAttendanceResponse {
    const message = {
      ...baseMsgCreateRequestAttendanceResponse,
    } as MsgCreateRequestAttendanceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateRequestAttendance: object = { creator: "", id: 0, time: "" };

export const MsgUpdateRequestAttendance = {
  encode(
    message: MsgUpdateRequestAttendance,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.time !== "") {
      writer.uint32(26).string(message.time);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateRequestAttendance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRequestAttendance,
    } as MsgUpdateRequestAttendance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.time = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRequestAttendance {
    const message = {
      ...baseMsgUpdateRequestAttendance,
    } as MsgUpdateRequestAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateRequestAttendance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRequestAttendance>
  ): MsgUpdateRequestAttendance {
    const message = {
      ...baseMsgUpdateRequestAttendance,
    } as MsgUpdateRequestAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "";
    }
    return message;
  },
};

const baseMsgUpdateRequestAttendanceResponse: object = {
  creator: "",
  id: 0,
  receiver: "",
  accepted: "",
};

export const MsgUpdateRequestAttendanceResponse = {
  encode(
    message: MsgUpdateRequestAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.accepted !== "") {
      writer.uint32(34).string(message.accepted);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateRequestAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateRequestAttendanceResponse,
    } as MsgUpdateRequestAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.accepted = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRequestAttendanceResponse {
    const message = {
      ...baseMsgUpdateRequestAttendanceResponse,
    } as MsgUpdateRequestAttendanceResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.accepted !== undefined && object.accepted !== null) {
      message.accepted = String(object.accepted);
    } else {
      message.accepted = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateRequestAttendanceResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.accepted !== undefined && (obj.accepted = message.accepted);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateRequestAttendanceResponse>
  ): MsgUpdateRequestAttendanceResponse {
    const message = {
      ...baseMsgUpdateRequestAttendanceResponse,
    } as MsgUpdateRequestAttendanceResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.accepted !== undefined && object.accepted !== null) {
      message.accepted = object.accepted;
    } else {
      message.accepted = "";
    }
    return message;
  },
};

const baseMsgDeleteRequestAttendance: object = { creator: "", id: 0 };

export const MsgDeleteRequestAttendance = {
  encode(
    message: MsgDeleteRequestAttendance,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteRequestAttendance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRequestAttendance,
    } as MsgDeleteRequestAttendance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRequestAttendance {
    const message = {
      ...baseMsgDeleteRequestAttendance,
    } as MsgDeleteRequestAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteRequestAttendance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteRequestAttendance>
  ): MsgDeleteRequestAttendance {
    const message = {
      ...baseMsgDeleteRequestAttendance,
    } as MsgDeleteRequestAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteRequestAttendanceResponse: object = {};

export const MsgDeleteRequestAttendanceResponse = {
  encode(
    _: MsgDeleteRequestAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteRequestAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRequestAttendanceResponse,
    } as MsgDeleteRequestAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteRequestAttendanceResponse {
    const message = {
      ...baseMsgDeleteRequestAttendanceResponse,
    } as MsgDeleteRequestAttendanceResponse;
    return message;
  },

  toJSON(_: MsgDeleteRequestAttendanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteRequestAttendanceResponse>
  ): MsgDeleteRequestAttendanceResponse {
    const message = {
      ...baseMsgDeleteRequestAttendanceResponse,
    } as MsgDeleteRequestAttendanceResponse;
    return message;
  },
};

const baseMsgCreateInformation: object = {
  creator: "",
  name: "",
  dob: "",
  address: "",
  email: "",
  phone: "",
};

export const MsgCreateInformation = {
  encode(
    message: MsgCreateInformation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.dob !== "") {
      writer.uint32(26).string(message.dob);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(50).string(message.phone);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateInformation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateInformation } as MsgCreateInformation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.dob = reader.string();
          break;
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        case 6:
          message.phone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateInformation {
    const message = { ...baseMsgCreateInformation } as MsgCreateInformation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = String(object.dob);
    } else {
      message.dob = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = String(object.phone);
    } else {
      message.phone = "";
    }
    return message;
  },

  toJSON(message: MsgCreateInformation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.dob !== undefined && (obj.dob = message.dob);
    message.address !== undefined && (obj.address = message.address);
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateInformation>): MsgCreateInformation {
    const message = { ...baseMsgCreateInformation } as MsgCreateInformation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = object.dob;
    } else {
      message.dob = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = object.phone;
    } else {
      message.phone = "";
    }
    return message;
  },
};

const baseMsgCreateInformationResponse: object = { id: 0 };

export const MsgCreateInformationResponse = {
  encode(
    message: MsgCreateInformationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateInformationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateInformationResponse,
    } as MsgCreateInformationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateInformationResponse {
    const message = {
      ...baseMsgCreateInformationResponse,
    } as MsgCreateInformationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateInformationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInformationResponse>
  ): MsgCreateInformationResponse {
    const message = {
      ...baseMsgCreateInformationResponse,
    } as MsgCreateInformationResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateInformation: object = {
  creator: "",
  id: 0,
  name: "",
  dob: "",
  address: "",
  email: "",
  phone: "",
};

export const MsgUpdateInformation = {
  encode(
    message: MsgUpdateInformation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.dob !== "") {
      writer.uint32(34).string(message.dob);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    if (message.email !== "") {
      writer.uint32(50).string(message.email);
    }
    if (message.phone !== "") {
      writer.uint32(58).string(message.phone);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInformation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateInformation } as MsgUpdateInformation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.dob = reader.string();
          break;
        case 5:
          message.address = reader.string();
          break;
        case 6:
          message.email = reader.string();
          break;
        case 7:
          message.phone = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInformation {
    const message = { ...baseMsgUpdateInformation } as MsgUpdateInformation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = String(object.dob);
    } else {
      message.dob = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = String(object.phone);
    } else {
      message.phone = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateInformation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.dob !== undefined && (obj.dob = message.dob);
    message.address !== undefined && (obj.address = message.address);
    message.email !== undefined && (obj.email = message.email);
    message.phone !== undefined && (obj.phone = message.phone);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateInformation>): MsgUpdateInformation {
    const message = { ...baseMsgUpdateInformation } as MsgUpdateInformation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.dob !== undefined && object.dob !== null) {
      message.dob = object.dob;
    } else {
      message.dob = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = object.phone;
    } else {
      message.phone = "";
    }
    return message;
  },
};

const baseMsgUpdateInformationResponse: object = {};

export const MsgUpdateInformationResponse = {
  encode(
    _: MsgUpdateInformationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInformationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInformationResponse,
    } as MsgUpdateInformationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateInformationResponse {
    const message = {
      ...baseMsgUpdateInformationResponse,
    } as MsgUpdateInformationResponse;
    return message;
  },

  toJSON(_: MsgUpdateInformationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateInformationResponse>
  ): MsgUpdateInformationResponse {
    const message = {
      ...baseMsgUpdateInformationResponse,
    } as MsgUpdateInformationResponse;
    return message;
  },
};

const baseMsgDeleteInformation: object = { creator: "", id: 0 };

export const MsgDeleteInformation = {
  encode(
    message: MsgDeleteInformation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteInformation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteInformation } as MsgDeleteInformation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteInformation {
    const message = { ...baseMsgDeleteInformation } as MsgDeleteInformation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteInformation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteInformation>): MsgDeleteInformation {
    const message = { ...baseMsgDeleteInformation } as MsgDeleteInformation;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteInformationResponse: object = {};

export const MsgDeleteInformationResponse = {
  encode(
    _: MsgDeleteInformationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteInformationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteInformationResponse,
    } as MsgDeleteInformationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteInformationResponse {
    const message = {
      ...baseMsgDeleteInformationResponse,
    } as MsgDeleteInformationResponse;
    return message;
  },

  toJSON(_: MsgDeleteInformationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteInformationResponse>
  ): MsgDeleteInformationResponse {
    const message = {
      ...baseMsgDeleteInformationResponse,
    } as MsgDeleteInformationResponse;
    return message;
  },
};

const baseMsgCreateAttendance: object = { creator: "", time: "" };

export const MsgCreateAttendance = {
  encode(
    message: MsgCreateAttendance,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.time !== "") {
      writer.uint32(18).string(message.time);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAttendance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAttendance } as MsgCreateAttendance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.time = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAttendance {
    const message = { ...baseMsgCreateAttendance } as MsgCreateAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAttendance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAttendance>): MsgCreateAttendance {
    const message = { ...baseMsgCreateAttendance } as MsgCreateAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "";
    }
    return message;
  },
};

const baseMsgCreateAttendanceResponse: object = { id: 0, time: "" };

export const MsgCreateAttendanceResponse = {
  encode(
    message: MsgCreateAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.time !== "") {
      writer.uint32(18).string(message.time);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAttendanceResponse,
    } as MsgCreateAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.time = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAttendanceResponse {
    const message = {
      ...baseMsgCreateAttendanceResponse,
    } as MsgCreateAttendanceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAttendanceResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAttendanceResponse>
  ): MsgCreateAttendanceResponse {
    const message = {
      ...baseMsgCreateAttendanceResponse,
    } as MsgCreateAttendanceResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "";
    }
    return message;
  },
};

const baseMsgUpdateAttendance: object = { creator: "", id: 0, time: "" };

export const MsgUpdateAttendance = {
  encode(
    message: MsgUpdateAttendance,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.time !== "") {
      writer.uint32(26).string(message.time);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAttendance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAttendance } as MsgUpdateAttendance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.time = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAttendance {
    const message = { ...baseMsgUpdateAttendance } as MsgUpdateAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = String(object.time);
    } else {
      message.time = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateAttendance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAttendance>): MsgUpdateAttendance {
    const message = { ...baseMsgUpdateAttendance } as MsgUpdateAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time;
    } else {
      message.time = "";
    }
    return message;
  },
};

const baseMsgUpdateAttendanceResponse: object = {};

export const MsgUpdateAttendanceResponse = {
  encode(
    _: MsgUpdateAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAttendanceResponse,
    } as MsgUpdateAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAttendanceResponse {
    const message = {
      ...baseMsgUpdateAttendanceResponse,
    } as MsgUpdateAttendanceResponse;
    return message;
  },

  toJSON(_: MsgUpdateAttendanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAttendanceResponse>
  ): MsgUpdateAttendanceResponse {
    const message = {
      ...baseMsgUpdateAttendanceResponse,
    } as MsgUpdateAttendanceResponse;
    return message;
  },
};

const baseMsgDeleteAttendance: object = { creator: "", id: 0 };

export const MsgDeleteAttendance = {
  encode(
    message: MsgDeleteAttendance,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAttendance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAttendance } as MsgDeleteAttendance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAttendance {
    const message = { ...baseMsgDeleteAttendance } as MsgDeleteAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteAttendance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAttendance>): MsgDeleteAttendance {
    const message = { ...baseMsgDeleteAttendance } as MsgDeleteAttendance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteAttendanceResponse: object = {};

export const MsgDeleteAttendanceResponse = {
  encode(
    _: MsgDeleteAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAttendanceResponse,
    } as MsgDeleteAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAttendanceResponse {
    const message = {
      ...baseMsgDeleteAttendanceResponse,
    } as MsgDeleteAttendanceResponse;
    return message;
  },

  toJSON(_: MsgDeleteAttendanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAttendanceResponse>
  ): MsgDeleteAttendanceResponse {
    const message = {
      ...baseMsgDeleteAttendanceResponse,
    } as MsgDeleteAttendanceResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateRequestAttendance(
    request: MsgCreateRequestAttendance
  ): Promise<MsgCreateRequestAttendanceResponse>;
  UpdateRequestAttendance(
    request: MsgUpdateRequestAttendance
  ): Promise<MsgUpdateRequestAttendanceResponse>;
  DeleteRequestAttendance(
    request: MsgDeleteRequestAttendance
  ): Promise<MsgDeleteRequestAttendanceResponse>;
  CreateInformation(
    request: MsgCreateInformation
  ): Promise<MsgCreateInformationResponse>;
  UpdateInformation(
    request: MsgUpdateInformation
  ): Promise<MsgUpdateInformationResponse>;
  DeleteInformation(
    request: MsgDeleteInformation
  ): Promise<MsgDeleteInformationResponse>;
  CreateAttendance(
    request: MsgCreateAttendance
  ): Promise<MsgCreateAttendanceResponse>;
  UpdateAttendance(
    request: MsgUpdateAttendance
  ): Promise<MsgUpdateAttendanceResponse>;
  DeleteAttendance(
    request: MsgDeleteAttendance
  ): Promise<MsgDeleteAttendanceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateRequestAttendance(
    request: MsgCreateRequestAttendance
  ): Promise<MsgCreateRequestAttendanceResponse> {
    const data = MsgCreateRequestAttendance.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "CreateRequestAttendance",
      data
    );
    return promise.then((data) =>
      MsgCreateRequestAttendanceResponse.decode(new Reader(data))
    );
  }

  UpdateRequestAttendance(
    request: MsgUpdateRequestAttendance
  ): Promise<MsgUpdateRequestAttendanceResponse> {
    const data = MsgUpdateRequestAttendance.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "UpdateRequestAttendance",
      data
    );
    return promise.then((data) =>
      MsgUpdateRequestAttendanceResponse.decode(new Reader(data))
    );
  }

  DeleteRequestAttendance(
    request: MsgDeleteRequestAttendance
  ): Promise<MsgDeleteRequestAttendanceResponse> {
    const data = MsgDeleteRequestAttendance.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "DeleteRequestAttendance",
      data
    );
    return promise.then((data) =>
      MsgDeleteRequestAttendanceResponse.decode(new Reader(data))
    );
  }

  CreateInformation(
    request: MsgCreateInformation
  ): Promise<MsgCreateInformationResponse> {
    const data = MsgCreateInformation.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "CreateInformation",
      data
    );
    return promise.then((data) =>
      MsgCreateInformationResponse.decode(new Reader(data))
    );
  }

  UpdateInformation(
    request: MsgUpdateInformation
  ): Promise<MsgUpdateInformationResponse> {
    const data = MsgUpdateInformation.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "UpdateInformation",
      data
    );
    return promise.then((data) =>
      MsgUpdateInformationResponse.decode(new Reader(data))
    );
  }

  DeleteInformation(
    request: MsgDeleteInformation
  ): Promise<MsgDeleteInformationResponse> {
    const data = MsgDeleteInformation.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "DeleteInformation",
      data
    );
    return promise.then((data) =>
      MsgDeleteInformationResponse.decode(new Reader(data))
    );
  }

  CreateAttendance(
    request: MsgCreateAttendance
  ): Promise<MsgCreateAttendanceResponse> {
    const data = MsgCreateAttendance.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "CreateAttendance",
      data
    );
    return promise.then((data) =>
      MsgCreateAttendanceResponse.decode(new Reader(data))
    );
  }

  UpdateAttendance(
    request: MsgUpdateAttendance
  ): Promise<MsgUpdateAttendanceResponse> {
    const data = MsgUpdateAttendance.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "UpdateAttendance",
      data
    );
    return promise.then((data) =>
      MsgUpdateAttendanceResponse.decode(new Reader(data))
    );
  }

  DeleteAttendance(
    request: MsgDeleteAttendance
  ): Promise<MsgDeleteAttendanceResponse> {
    const data = MsgDeleteAttendance.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "DeleteAttendance",
      data
    );
    return promise.then((data) =>
      MsgDeleteAttendanceResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
