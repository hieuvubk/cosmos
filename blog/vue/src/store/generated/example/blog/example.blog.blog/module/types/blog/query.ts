/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Infor } from "../blog/infor";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "example.blog.blog";

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

const baseQueryGetInforRequest: object = { id: 0 };

export const QueryGetInforRequest = {
  encode(
    message: QueryGetInforRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetInforRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetInforRequest } as QueryGetInforRequest;
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

  fromJSON(object: any): QueryGetInforRequest {
    const message = { ...baseQueryGetInforRequest } as QueryGetInforRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetInforRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetInforRequest>): QueryGetInforRequest {
    const message = { ...baseQueryGetInforRequest } as QueryGetInforRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetInforResponse: object = {};

export const QueryGetInforResponse = {
  encode(
    message: QueryGetInforResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Infor !== undefined) {
      Infor.encode(message.Infor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetInforResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetInforResponse } as QueryGetInforResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Infor = Infor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInforResponse {
    const message = { ...baseQueryGetInforResponse } as QueryGetInforResponse;
    if (object.Infor !== undefined && object.Infor !== null) {
      message.Infor = Infor.fromJSON(object.Infor);
    } else {
      message.Infor = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetInforResponse): unknown {
    const obj: any = {};
    message.Infor !== undefined &&
      (obj.Infor = message.Infor ? Infor.toJSON(message.Infor) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInforResponse>
  ): QueryGetInforResponse {
    const message = { ...baseQueryGetInforResponse } as QueryGetInforResponse;
    if (object.Infor !== undefined && object.Infor !== null) {
      message.Infor = Infor.fromPartial(object.Infor);
    } else {
      message.Infor = undefined;
    }
    return message;
  },
};

const baseQueryAllInforRequest: object = {};

export const QueryAllInforRequest = {
  encode(
    message: QueryAllInforRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllInforRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllInforRequest } as QueryAllInforRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInforRequest {
    const message = { ...baseQueryAllInforRequest } as QueryAllInforRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInforRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllInforRequest>): QueryAllInforRequest {
    const message = { ...baseQueryAllInforRequest } as QueryAllInforRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllInforResponse: object = {};

export const QueryAllInforResponse = {
  encode(
    message: QueryAllInforResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Infor) {
      Infor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllInforResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllInforResponse } as QueryAllInforResponse;
    message.Infor = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Infor.push(Infor.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllInforResponse {
    const message = { ...baseQueryAllInforResponse } as QueryAllInforResponse;
    message.Infor = [];
    if (object.Infor !== undefined && object.Infor !== null) {
      for (const e of object.Infor) {
        message.Infor.push(Infor.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInforResponse): unknown {
    const obj: any = {};
    if (message.Infor) {
      obj.Infor = message.Infor.map((e) => (e ? Infor.toJSON(e) : undefined));
    } else {
      obj.Infor = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInforResponse>
  ): QueryAllInforResponse {
    const message = { ...baseQueryAllInforResponse } as QueryAllInforResponse;
    message.Infor = [];
    if (object.Infor !== undefined && object.Infor !== null) {
      for (const e of object.Infor) {
        message.Infor.push(Infor.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Infor(request: QueryGetInforRequest): Promise<QueryGetInforResponse>;
  InforAll(request: QueryAllInforRequest): Promise<QueryAllInforResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Infor(request: QueryGetInforRequest): Promise<QueryGetInforResponse> {
    const data = QueryGetInforRequest.encode(request).finish();
    const promise = this.rpc.request("example.blog.blog.Query", "Infor", data);
    return promise.then((data) =>
      QueryGetInforResponse.decode(new Reader(data))
    );
  }

  InforAll(request: QueryAllInforRequest): Promise<QueryAllInforResponse> {
    const data = QueryAllInforRequest.encode(request).finish();
    const promise = this.rpc.request(
      "example.blog.blog.Query",
      "InforAll",
      data
    );
    return promise.then((data) =>
      QueryAllInforResponse.decode(new Reader(data))
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
