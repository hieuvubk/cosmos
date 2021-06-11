/* eslint-disable */
import { RequestAttendance } from "../voter/RequestAttendance";
import { Information } from "../voter/information";
import { Attendance } from "../voter/attendance";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "username.voter.voter";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.RequestAttendanceList) {
            RequestAttendance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.informationList) {
            Information.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.attendanceList) {
            Attendance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.RequestAttendanceList = [];
        message.informationList = [];
        message.attendanceList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.RequestAttendanceList.push(RequestAttendance.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.informationList.push(Information.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.attendanceList.push(Attendance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.RequestAttendanceList = [];
        message.informationList = [];
        message.attendanceList = [];
        if (object.RequestAttendanceList !== undefined &&
            object.RequestAttendanceList !== null) {
            for (const e of object.RequestAttendanceList) {
                message.RequestAttendanceList.push(RequestAttendance.fromJSON(e));
            }
        }
        if (object.informationList !== undefined &&
            object.informationList !== null) {
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
    toJSON(message) {
        const obj = {};
        if (message.RequestAttendanceList) {
            obj.RequestAttendanceList = message.RequestAttendanceList.map((e) => e ? RequestAttendance.toJSON(e) : undefined);
        }
        else {
            obj.RequestAttendanceList = [];
        }
        if (message.informationList) {
            obj.informationList = message.informationList.map((e) => e ? Information.toJSON(e) : undefined);
        }
        else {
            obj.informationList = [];
        }
        if (message.attendanceList) {
            obj.attendanceList = message.attendanceList.map((e) => e ? Attendance.toJSON(e) : undefined);
        }
        else {
            obj.attendanceList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.RequestAttendanceList = [];
        message.informationList = [];
        message.attendanceList = [];
        if (object.RequestAttendanceList !== undefined &&
            object.RequestAttendanceList !== null) {
            for (const e of object.RequestAttendanceList) {
                message.RequestAttendanceList.push(RequestAttendance.fromPartial(e));
            }
        }
        if (object.informationList !== undefined &&
            object.informationList !== null) {
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
