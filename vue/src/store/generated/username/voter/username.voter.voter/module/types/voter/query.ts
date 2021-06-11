/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { RequestAttendance } from "../voter/RequestAttendance";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Information } from "../voter/information";
import { Attendance } from "../voter/attendance";

export const protobufPackage = "username.voter.voter";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetRequestAttendanceRequest {
  id: number;
}

export interface QueryGetRequestAttendanceResponse {
  RequestAttendance: RequestAttendance | undefined;
}

export interface QueryAllRequestAttendanceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRequestAttendanceResponse {
  RequestAttendance: RequestAttendance[];
  pagination: PageResponse | undefined;
}

export interface QueryGetInformationRequest {
  creator: string;
  id: number;
}

export interface QueryGetInformationResponse {
  Information: Information | undefined;
}

export interface QueryAllInformationRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllInformationResponse {
  Information: Information[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAttendanceRequest {
  id: number;
}

export interface QueryGetAttendanceResponse {
  Attendance: Attendance | undefined;
}

export interface QueryAllAttendanceRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAttendanceResponse {
  Attendance: Attendance[];
  pagination: PageResponse | undefined;
}

const baseQueryGetRequestAttendanceRequest: object = { id: 0 };

export const QueryGetRequestAttendanceRequest = {
  encode(
    message: QueryGetRequestAttendanceRequest,
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
  ): QueryGetRequestAttendanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRequestAttendanceRequest,
    } as QueryGetRequestAttendanceRequest;
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

  fromJSON(object: any): QueryGetRequestAttendanceRequest {
    const message = {
      ...baseQueryGetRequestAttendanceRequest,
    } as QueryGetRequestAttendanceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetRequestAttendanceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRequestAttendanceRequest>
  ): QueryGetRequestAttendanceRequest {
    const message = {
      ...baseQueryGetRequestAttendanceRequest,
    } as QueryGetRequestAttendanceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetRequestAttendanceResponse: object = {};

export const QueryGetRequestAttendanceResponse = {
  encode(
    message: QueryGetRequestAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.RequestAttendance !== undefined) {
      RequestAttendance.encode(
        message.RequestAttendance,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRequestAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRequestAttendanceResponse,
    } as QueryGetRequestAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RequestAttendance = RequestAttendance.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRequestAttendanceResponse {
    const message = {
      ...baseQueryGetRequestAttendanceResponse,
    } as QueryGetRequestAttendanceResponse;
    if (
      object.RequestAttendance !== undefined &&
      object.RequestAttendance !== null
    ) {
      message.RequestAttendance = RequestAttendance.fromJSON(
        object.RequestAttendance
      );
    } else {
      message.RequestAttendance = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRequestAttendanceResponse): unknown {
    const obj: any = {};
    message.RequestAttendance !== undefined &&
      (obj.RequestAttendance = message.RequestAttendance
        ? RequestAttendance.toJSON(message.RequestAttendance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRequestAttendanceResponse>
  ): QueryGetRequestAttendanceResponse {
    const message = {
      ...baseQueryGetRequestAttendanceResponse,
    } as QueryGetRequestAttendanceResponse;
    if (
      object.RequestAttendance !== undefined &&
      object.RequestAttendance !== null
    ) {
      message.RequestAttendance = RequestAttendance.fromPartial(
        object.RequestAttendance
      );
    } else {
      message.RequestAttendance = undefined;
    }
    return message;
  },
};

const baseQueryAllRequestAttendanceRequest: object = {};

export const QueryAllRequestAttendanceRequest = {
  encode(
    message: QueryAllRequestAttendanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllRequestAttendanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRequestAttendanceRequest,
    } as QueryAllRequestAttendanceRequest;
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

  fromJSON(object: any): QueryAllRequestAttendanceRequest {
    const message = {
      ...baseQueryAllRequestAttendanceRequest,
    } as QueryAllRequestAttendanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRequestAttendanceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRequestAttendanceRequest>
  ): QueryAllRequestAttendanceRequest {
    const message = {
      ...baseQueryAllRequestAttendanceRequest,
    } as QueryAllRequestAttendanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRequestAttendanceResponse: object = {};

export const QueryAllRequestAttendanceResponse = {
  encode(
    message: QueryAllRequestAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.RequestAttendance) {
      RequestAttendance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllRequestAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRequestAttendanceResponse,
    } as QueryAllRequestAttendanceResponse;
    message.RequestAttendance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RequestAttendance.push(
            RequestAttendance.decode(reader, reader.uint32())
          );
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

  fromJSON(object: any): QueryAllRequestAttendanceResponse {
    const message = {
      ...baseQueryAllRequestAttendanceResponse,
    } as QueryAllRequestAttendanceResponse;
    message.RequestAttendance = [];
    if (
      object.RequestAttendance !== undefined &&
      object.RequestAttendance !== null
    ) {
      for (const e of object.RequestAttendance) {
        message.RequestAttendance.push(RequestAttendance.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRequestAttendanceResponse): unknown {
    const obj: any = {};
    if (message.RequestAttendance) {
      obj.RequestAttendance = message.RequestAttendance.map((e) =>
        e ? RequestAttendance.toJSON(e) : undefined
      );
    } else {
      obj.RequestAttendance = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRequestAttendanceResponse>
  ): QueryAllRequestAttendanceResponse {
    const message = {
      ...baseQueryAllRequestAttendanceResponse,
    } as QueryAllRequestAttendanceResponse;
    message.RequestAttendance = [];
    if (
      object.RequestAttendance !== undefined &&
      object.RequestAttendance !== null
    ) {
      for (const e of object.RequestAttendance) {
        message.RequestAttendance.push(RequestAttendance.fromPartial(e));
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

const baseQueryGetInformationRequest: object = { creator: "", id: 0 };

export const QueryGetInformationRequest = {
  encode(
    message: QueryGetInformationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).int64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetInformationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInformationRequest,
    } as QueryGetInformationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInformationRequest {
    const message = {
      ...baseQueryGetInformationRequest,
    } as QueryGetInformationRequest;
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

  toJSON(message: QueryGetInformationRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInformationRequest>
  ): QueryGetInformationRequest {
    const message = {
      ...baseQueryGetInformationRequest,
    } as QueryGetInformationRequest;
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

const baseQueryGetInformationResponse: object = {};

export const QueryGetInformationResponse = {
  encode(
    message: QueryGetInformationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Information !== undefined) {
      Information.encode(
        message.Information,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetInformationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInformationResponse,
    } as QueryGetInformationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Information = Information.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInformationResponse {
    const message = {
      ...baseQueryGetInformationResponse,
    } as QueryGetInformationResponse;
    if (object.Information !== undefined && object.Information !== null) {
      message.Information = Information.fromJSON(object.Information);
    } else {
      message.Information = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetInformationResponse): unknown {
    const obj: any = {};
    message.Information !== undefined &&
      (obj.Information = message.Information
        ? Information.toJSON(message.Information)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInformationResponse>
  ): QueryGetInformationResponse {
    const message = {
      ...baseQueryGetInformationResponse,
    } as QueryGetInformationResponse;
    if (object.Information !== undefined && object.Information !== null) {
      message.Information = Information.fromPartial(object.Information);
    } else {
      message.Information = undefined;
    }
    return message;
  },
};

const baseQueryAllInformationRequest: object = {};

export const QueryAllInformationRequest = {
  encode(
    message: QueryAllInformationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllInformationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInformationRequest,
    } as QueryAllInformationRequest;
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

  fromJSON(object: any): QueryAllInformationRequest {
    const message = {
      ...baseQueryAllInformationRequest,
    } as QueryAllInformationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInformationRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInformationRequest>
  ): QueryAllInformationRequest {
    const message = {
      ...baseQueryAllInformationRequest,
    } as QueryAllInformationRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllInformationResponse: object = {};

export const QueryAllInformationResponse = {
  encode(
    message: QueryAllInformationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Information) {
      Information.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllInformationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInformationResponse,
    } as QueryAllInformationResponse;
    message.Information = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Information.push(Information.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllInformationResponse {
    const message = {
      ...baseQueryAllInformationResponse,
    } as QueryAllInformationResponse;
    message.Information = [];
    if (object.Information !== undefined && object.Information !== null) {
      for (const e of object.Information) {
        message.Information.push(Information.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInformationResponse): unknown {
    const obj: any = {};
    if (message.Information) {
      obj.Information = message.Information.map((e) =>
        e ? Information.toJSON(e) : undefined
      );
    } else {
      obj.Information = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInformationResponse>
  ): QueryAllInformationResponse {
    const message = {
      ...baseQueryAllInformationResponse,
    } as QueryAllInformationResponse;
    message.Information = [];
    if (object.Information !== undefined && object.Information !== null) {
      for (const e of object.Information) {
        message.Information.push(Information.fromPartial(e));
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

const baseQueryGetAttendanceRequest: object = { id: 0 };

export const QueryGetAttendanceRequest = {
  encode(
    message: QueryGetAttendanceRequest,
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
  ): QueryGetAttendanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAttendanceRequest,
    } as QueryGetAttendanceRequest;
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

  fromJSON(object: any): QueryGetAttendanceRequest {
    const message = {
      ...baseQueryGetAttendanceRequest,
    } as QueryGetAttendanceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAttendanceRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAttendanceRequest>
  ): QueryGetAttendanceRequest {
    const message = {
      ...baseQueryGetAttendanceRequest,
    } as QueryGetAttendanceRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetAttendanceResponse: object = {};

export const QueryGetAttendanceResponse = {
  encode(
    message: QueryGetAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Attendance !== undefined) {
      Attendance.encode(message.Attendance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAttendanceResponse,
    } as QueryGetAttendanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Attendance = Attendance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAttendanceResponse {
    const message = {
      ...baseQueryGetAttendanceResponse,
    } as QueryGetAttendanceResponse;
    if (object.Attendance !== undefined && object.Attendance !== null) {
      message.Attendance = Attendance.fromJSON(object.Attendance);
    } else {
      message.Attendance = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAttendanceResponse): unknown {
    const obj: any = {};
    message.Attendance !== undefined &&
      (obj.Attendance = message.Attendance
        ? Attendance.toJSON(message.Attendance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAttendanceResponse>
  ): QueryGetAttendanceResponse {
    const message = {
      ...baseQueryGetAttendanceResponse,
    } as QueryGetAttendanceResponse;
    if (object.Attendance !== undefined && object.Attendance !== null) {
      message.Attendance = Attendance.fromPartial(object.Attendance);
    } else {
      message.Attendance = undefined;
    }
    return message;
  },
};

const baseQueryAllAttendanceRequest: object = {};

export const QueryAllAttendanceRequest = {
  encode(
    message: QueryAllAttendanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAttendanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAttendanceRequest,
    } as QueryAllAttendanceRequest;
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

  fromJSON(object: any): QueryAllAttendanceRequest {
    const message = {
      ...baseQueryAllAttendanceRequest,
    } as QueryAllAttendanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAttendanceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAttendanceRequest>
  ): QueryAllAttendanceRequest {
    const message = {
      ...baseQueryAllAttendanceRequest,
    } as QueryAllAttendanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAttendanceResponse: object = {};

export const QueryAllAttendanceResponse = {
  encode(
    message: QueryAllAttendanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Attendance) {
      Attendance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAttendanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAttendanceResponse,
    } as QueryAllAttendanceResponse;
    message.Attendance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Attendance.push(Attendance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllAttendanceResponse {
    const message = {
      ...baseQueryAllAttendanceResponse,
    } as QueryAllAttendanceResponse;
    message.Attendance = [];
    if (object.Attendance !== undefined && object.Attendance !== null) {
      for (const e of object.Attendance) {
        message.Attendance.push(Attendance.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAttendanceResponse): unknown {
    const obj: any = {};
    if (message.Attendance) {
      obj.Attendance = message.Attendance.map((e) =>
        e ? Attendance.toJSON(e) : undefined
      );
    } else {
      obj.Attendance = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAttendanceResponse>
  ): QueryAllAttendanceResponse {
    const message = {
      ...baseQueryAllAttendanceResponse,
    } as QueryAllAttendanceResponse;
    message.Attendance = [];
    if (object.Attendance !== undefined && object.Attendance !== null) {
      for (const e of object.Attendance) {
        message.Attendance.push(Attendance.fromPartial(e));
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
  RequestAttendance(
    request: QueryGetRequestAttendanceRequest
  ): Promise<QueryGetRequestAttendanceResponse>;
  RequestAttendanceAll(
    request: QueryAllRequestAttendanceRequest
  ): Promise<QueryAllRequestAttendanceResponse>;
  Information(
    request: QueryGetInformationRequest
  ): Promise<QueryGetInformationResponse>;
  InformationAll(
    request: QueryAllInformationRequest
  ): Promise<QueryAllInformationResponse>;
  Attendance(
    request: QueryGetAttendanceRequest
  ): Promise<QueryGetAttendanceResponse>;
  AttendanceAll(
    request: QueryAllAttendanceRequest
  ): Promise<QueryAllAttendanceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RequestAttendance(
    request: QueryGetRequestAttendanceRequest
  ): Promise<QueryGetRequestAttendanceResponse> {
    const data = QueryGetRequestAttendanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Query",
      "RequestAttendance",
      data
    );
    return promise.then((data) =>
      QueryGetRequestAttendanceResponse.decode(new Reader(data))
    );
  }

  RequestAttendanceAll(
    request: QueryAllRequestAttendanceRequest
  ): Promise<QueryAllRequestAttendanceResponse> {
    const data = QueryAllRequestAttendanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Query",
      "RequestAttendanceAll",
      data
    );
    return promise.then((data) =>
      QueryAllRequestAttendanceResponse.decode(new Reader(data))
    );
  }

  Information(
    request: QueryGetInformationRequest
  ): Promise<QueryGetInformationResponse> {
    const data = QueryGetInformationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Query",
      "Information",
      data
    );
    return promise.then((data) =>
      QueryGetInformationResponse.decode(new Reader(data))
    );
  }

  InformationAll(
    request: QueryAllInformationRequest
  ): Promise<QueryAllInformationResponse> {
    const data = QueryAllInformationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Query",
      "InformationAll",
      data
    );
    return promise.then((data) =>
      QueryAllInformationResponse.decode(new Reader(data))
    );
  }

  Attendance(
    request: QueryGetAttendanceRequest
  ): Promise<QueryGetAttendanceResponse> {
    const data = QueryGetAttendanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Query",
      "Attendance",
      data
    );
    return promise.then((data) =>
      QueryGetAttendanceResponse.decode(new Reader(data))
    );
  }

  AttendanceAll(
    request: QueryAllAttendanceRequest
  ): Promise<QueryAllAttendanceResponse> {
    const data = QueryAllAttendanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Query",
      "AttendanceAll",
      data
    );
    return promise.then((data) =>
      QueryAllAttendanceResponse.decode(new Reader(data))
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
