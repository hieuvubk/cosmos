/* eslint-disable */
import { Infor } from "../blog/infor";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "example.blog.blog";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.inforList) {
            Infor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.inforList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inforList.push(Infor.decode(reader, reader.uint32()));
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
        message.inforList = [];
        if (object.inforList !== undefined && object.inforList !== null) {
            for (const e of object.inforList) {
                message.inforList.push(Infor.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.inforList) {
            obj.inforList = message.inforList.map((e) => e ? Infor.toJSON(e) : undefined);
        }
        else {
            obj.inforList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.inforList = [];
        if (object.inforList !== undefined && object.inforList !== null) {
            for (const e of object.inforList) {
                message.inforList.push(Infor.fromPartial(e));
            }
        }
        return message;
    },
};
