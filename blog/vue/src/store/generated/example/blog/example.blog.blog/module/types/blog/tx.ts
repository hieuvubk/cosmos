/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "example.blog.blog";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateInfor {
  creator: string;
  name: string;
  age: string;
}

export interface MsgCreateInforResponse {
  id: number;
}

export interface MsgUpdateInfor {
  creator: string;
  id: number;
  name: string;
  age: string;
}

export interface MsgUpdateInforResponse {}

export interface MsgDeleteInfor {
  creator: string;
  id: number;
}

export interface MsgDeleteInforResponse {}

const baseMsgCreateInfor: object = { creator: "", name: "", age: "" };

export const MsgCreateInfor = {
  encode(message: MsgCreateInfor, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.age !== "") {
      writer.uint32(26).string(message.age);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateInfor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateInfor } as MsgCreateInfor;
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
          message.age = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateInfor {
    const message = { ...baseMsgCreateInfor } as MsgCreateInfor;
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
    if (object.age !== undefined && object.age !== null) {
      message.age = String(object.age);
    } else {
      message.age = "";
    }
    return message;
  },

  toJSON(message: MsgCreateInfor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = message.age);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateInfor>): MsgCreateInfor {
    const message = { ...baseMsgCreateInfor } as MsgCreateInfor;
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
    if (object.age !== undefined && object.age !== null) {
      message.age = object.age;
    } else {
      message.age = "";
    }
    return message;
  },
};

const baseMsgCreateInforResponse: object = { id: 0 };

export const MsgCreateInforResponse = {
  encode(
    message: MsgCreateInforResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateInforResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateInforResponse } as MsgCreateInforResponse;
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

  fromJSON(object: any): MsgCreateInforResponse {
    const message = { ...baseMsgCreateInforResponse } as MsgCreateInforResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateInforResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateInforResponse>
  ): MsgCreateInforResponse {
    const message = { ...baseMsgCreateInforResponse } as MsgCreateInforResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateInfor: object = { creator: "", id: 0, name: "", age: "" };

export const MsgUpdateInfor = {
  encode(message: MsgUpdateInfor, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.age !== "") {
      writer.uint32(34).string(message.age);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInfor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateInfor } as MsgUpdateInfor;
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
          message.age = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInfor {
    const message = { ...baseMsgUpdateInfor } as MsgUpdateInfor;
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
    if (object.age !== undefined && object.age !== null) {
      message.age = String(object.age);
    } else {
      message.age = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateInfor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = message.age);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateInfor>): MsgUpdateInfor {
    const message = { ...baseMsgUpdateInfor } as MsgUpdateInfor;
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
    if (object.age !== undefined && object.age !== null) {
      message.age = object.age;
    } else {
      message.age = "";
    }
    return message;
  },
};

const baseMsgUpdateInforResponse: object = {};

export const MsgUpdateInforResponse = {
  encode(_: MsgUpdateInforResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInforResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateInforResponse } as MsgUpdateInforResponse;
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

  fromJSON(_: any): MsgUpdateInforResponse {
    const message = { ...baseMsgUpdateInforResponse } as MsgUpdateInforResponse;
    return message;
  },

  toJSON(_: MsgUpdateInforResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateInforResponse>): MsgUpdateInforResponse {
    const message = { ...baseMsgUpdateInforResponse } as MsgUpdateInforResponse;
    return message;
  },
};

const baseMsgDeleteInfor: object = { creator: "", id: 0 };

export const MsgDeleteInfor = {
  encode(message: MsgDeleteInfor, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteInfor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteInfor } as MsgDeleteInfor;
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

  fromJSON(object: any): MsgDeleteInfor {
    const message = { ...baseMsgDeleteInfor } as MsgDeleteInfor;
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

  toJSON(message: MsgDeleteInfor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteInfor>): MsgDeleteInfor {
    const message = { ...baseMsgDeleteInfor } as MsgDeleteInfor;
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

const baseMsgDeleteInforResponse: object = {};

export const MsgDeleteInforResponse = {
  encode(_: MsgDeleteInforResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteInforResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteInforResponse } as MsgDeleteInforResponse;
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

  fromJSON(_: any): MsgDeleteInforResponse {
    const message = { ...baseMsgDeleteInforResponse } as MsgDeleteInforResponse;
    return message;
  },

  toJSON(_: MsgDeleteInforResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteInforResponse>): MsgDeleteInforResponse {
    const message = { ...baseMsgDeleteInforResponse } as MsgDeleteInforResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateInfor(request: MsgCreateInfor): Promise<MsgCreateInforResponse>;
  UpdateInfor(request: MsgUpdateInfor): Promise<MsgUpdateInforResponse>;
  DeleteInfor(request: MsgDeleteInfor): Promise<MsgDeleteInforResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateInfor(request: MsgCreateInfor): Promise<MsgCreateInforResponse> {
    const data = MsgCreateInfor.encode(request).finish();
    const promise = this.rpc.request(
      "example.blog.blog.Msg",
      "CreateInfor",
      data
    );
    return promise.then((data) =>
      MsgCreateInforResponse.decode(new Reader(data))
    );
  }

  UpdateInfor(request: MsgUpdateInfor): Promise<MsgUpdateInforResponse> {
    const data = MsgUpdateInfor.encode(request).finish();
    const promise = this.rpc.request(
      "example.blog.blog.Msg",
      "UpdateInfor",
      data
    );
    return promise.then((data) =>
      MsgUpdateInforResponse.decode(new Reader(data))
    );
  }

  DeleteInfor(request: MsgDeleteInfor): Promise<MsgDeleteInforResponse> {
    const data = MsgDeleteInfor.encode(request).finish();
    const promise = this.rpc.request(
      "example.blog.blog.Msg",
      "DeleteInfor",
      data
    );
    return promise.then((data) =>
      MsgDeleteInforResponse.decode(new Reader(data))
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
