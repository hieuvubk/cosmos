/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { RequestAttendance } from "../voter/RequestAttendance";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Information } from "../voter/information";
import { Attendance } from "../voter/attendance";
export const protobufPackage = "username.voter.voter";
const baseQueryGetRequestAttendanceRequest = { id: 0, receiver: "" };
export const QueryGetRequestAttendanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetRequestAttendanceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetRequestAttendanceRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetRequestAttendanceRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        return message;
    },
};
const baseQueryGetRequestAttendanceResponse = {};
export const QueryGetRequestAttendanceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.RequestAttendance !== undefined) {
            RequestAttendance.encode(message.RequestAttendance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetRequestAttendanceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RequestAttendance = RequestAttendance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetRequestAttendanceResponse,
        };
        if (object.RequestAttendance !== undefined &&
            object.RequestAttendance !== null) {
            message.RequestAttendance = RequestAttendance.fromJSON(object.RequestAttendance);
        }
        else {
            message.RequestAttendance = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.RequestAttendance !== undefined &&
            (obj.RequestAttendance = message.RequestAttendance
                ? RequestAttendance.toJSON(message.RequestAttendance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetRequestAttendanceResponse,
        };
        if (object.RequestAttendance !== undefined &&
            object.RequestAttendance !== null) {
            message.RequestAttendance = RequestAttendance.fromPartial(object.RequestAttendance);
        }
        else {
            message.RequestAttendance = undefined;
        }
        return message;
    },
};
const baseQueryAllRequestAttendanceRequest = {};
export const QueryAllRequestAttendanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllRequestAttendanceRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllRequestAttendanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllRequestAttendanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllRequestAttendanceResponse = {};
export const QueryAllRequestAttendanceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.RequestAttendance) {
            RequestAttendance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllRequestAttendanceResponse,
        };
        message.RequestAttendance = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RequestAttendance.push(RequestAttendance.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllRequestAttendanceResponse,
        };
        message.RequestAttendance = [];
        if (object.RequestAttendance !== undefined &&
            object.RequestAttendance !== null) {
            for (const e of object.RequestAttendance) {
                message.RequestAttendance.push(RequestAttendance.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.RequestAttendance) {
            obj.RequestAttendance = message.RequestAttendance.map((e) => e ? RequestAttendance.toJSON(e) : undefined);
        }
        else {
            obj.RequestAttendance = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllRequestAttendanceResponse,
        };
        message.RequestAttendance = [];
        if (object.RequestAttendance !== undefined &&
            object.RequestAttendance !== null) {
            for (const e of object.RequestAttendance) {
                message.RequestAttendance.push(RequestAttendance.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetInformationRequest = { creator: "", id: 0 };
export const QueryGetInformationRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).int64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetInformationRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetInformationRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetInformationRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetInformationResponse = {};
export const QueryGetInformationResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Information !== undefined) {
            Information.encode(message.Information, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetInformationResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetInformationResponse,
        };
        if (object.Information !== undefined && object.Information !== null) {
            message.Information = Information.fromJSON(object.Information);
        }
        else {
            message.Information = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Information !== undefined &&
            (obj.Information = message.Information
                ? Information.toJSON(message.Information)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetInformationResponse,
        };
        if (object.Information !== undefined && object.Information !== null) {
            message.Information = Information.fromPartial(object.Information);
        }
        else {
            message.Information = undefined;
        }
        return message;
    },
};
const baseQueryAllInformationRequest = {};
export const QueryAllInformationRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllInformationRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllInformationRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllInformationRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllInformationResponse = {};
export const QueryAllInformationResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Information) {
            Information.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllInformationResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllInformationResponse,
        };
        message.Information = [];
        if (object.Information !== undefined && object.Information !== null) {
            for (const e of object.Information) {
                message.Information.push(Information.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Information) {
            obj.Information = message.Information.map((e) => e ? Information.toJSON(e) : undefined);
        }
        else {
            obj.Information = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllInformationResponse,
        };
        message.Information = [];
        if (object.Information !== undefined && object.Information !== null) {
            for (const e of object.Information) {
                message.Information.push(Information.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetAttendanceRequest = { id: 0 };
export const QueryGetAttendanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAttendanceRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetAttendanceRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetAttendanceRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetAttendanceResponse = {};
export const QueryGetAttendanceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Attendance !== undefined) {
            Attendance.encode(message.Attendance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAttendanceResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetAttendanceResponse,
        };
        if (object.Attendance !== undefined && object.Attendance !== null) {
            message.Attendance = Attendance.fromJSON(object.Attendance);
        }
        else {
            message.Attendance = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Attendance !== undefined &&
            (obj.Attendance = message.Attendance
                ? Attendance.toJSON(message.Attendance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetAttendanceResponse,
        };
        if (object.Attendance !== undefined && object.Attendance !== null) {
            message.Attendance = Attendance.fromPartial(object.Attendance);
        }
        else {
            message.Attendance = undefined;
        }
        return message;
    },
};
const baseQueryAllAttendanceRequest = {};
export const QueryAllAttendanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllAttendanceRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllAttendanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllAttendanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllAttendanceResponse = {};
export const QueryAllAttendanceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Attendance) {
            Attendance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllAttendanceResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllAttendanceResponse,
        };
        message.Attendance = [];
        if (object.Attendance !== undefined && object.Attendance !== null) {
            for (const e of object.Attendance) {
                message.Attendance.push(Attendance.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Attendance) {
            obj.Attendance = message.Attendance.map((e) => e ? Attendance.toJSON(e) : undefined);
        }
        else {
            obj.Attendance = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllAttendanceResponse,
        };
        message.Attendance = [];
        if (object.Attendance !== undefined && object.Attendance !== null) {
            for (const e of object.Attendance) {
                message.Attendance.push(Attendance.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RequestAttendance(request) {
        const data = QueryGetRequestAttendanceRequest.encode(request).finish();
        const promise = this.rpc.request("username.voter.voter.Query", "RequestAttendance", data);
        return promise.then((data) => QueryGetRequestAttendanceResponse.decode(new Reader(data)));
    }
    RequestAttendanceAll(request) {
        const data = QueryAllRequestAttendanceRequest.encode(request).finish();
        const promise = this.rpc.request("username.voter.voter.Query", "RequestAttendanceAll", data);
        return promise.then((data) => QueryAllRequestAttendanceResponse.decode(new Reader(data)));
    }
    Information(request) {
        const data = QueryGetInformationRequest.encode(request).finish();
        const promise = this.rpc.request("username.voter.voter.Query", "Information", data);
        return promise.then((data) => QueryGetInformationResponse.decode(new Reader(data)));
    }
    InformationAll(request) {
        const data = QueryAllInformationRequest.encode(request).finish();
        const promise = this.rpc.request("username.voter.voter.Query", "InformationAll", data);
        return promise.then((data) => QueryAllInformationResponse.decode(new Reader(data)));
    }
    Attendance(request) {
        const data = QueryGetAttendanceRequest.encode(request).finish();
        const promise = this.rpc.request("username.voter.voter.Query", "Attendance", data);
        return promise.then((data) => QueryGetAttendanceResponse.decode(new Reader(data)));
    }
    AttendanceAll(request) {
        const data = QueryAllAttendanceRequest.encode(request).finish();
        const promise = this.rpc.request("username.voter.voter.Query", "AttendanceAll", data);
        return promise.then((data) => QueryAllAttendanceResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
