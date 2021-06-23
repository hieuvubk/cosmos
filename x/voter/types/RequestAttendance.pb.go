// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: voter/RequestAttendance.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type RequestAttendance struct {
	Creator  string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id       uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Time     string `protobuf:"bytes,3,opt,name=time,proto3" json:"time,omitempty"`
	Receiver string `protobuf:"bytes,4,opt,name=receiver,proto3" json:"receiver,omitempty"`
	Accepted bool   `protobuf:"varint,5,opt,name=accepted,proto3" json:"accepted,omitempty"`
}

func (m *RequestAttendance) Reset()         { *m = RequestAttendance{} }
func (m *RequestAttendance) String() string { return proto.CompactTextString(m) }
func (*RequestAttendance) ProtoMessage()    {}
func (*RequestAttendance) Descriptor() ([]byte, []int) {
	return fileDescriptor_7a94cd5140c192e4, []int{0}
}
func (m *RequestAttendance) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *RequestAttendance) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_RequestAttendance.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *RequestAttendance) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RequestAttendance.Merge(m, src)
}
func (m *RequestAttendance) XXX_Size() int {
	return m.Size()
}
func (m *RequestAttendance) XXX_DiscardUnknown() {
	xxx_messageInfo_RequestAttendance.DiscardUnknown(m)
}

var xxx_messageInfo_RequestAttendance proto.InternalMessageInfo

func (m *RequestAttendance) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *RequestAttendance) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *RequestAttendance) GetTime() string {
	if m != nil {
		return m.Time
	}
	return ""
}

func (m *RequestAttendance) GetReceiver() string {
	if m != nil {
		return m.Receiver
	}
	return ""
}

func (m *RequestAttendance) GetAccepted() bool {
	if m != nil {
		return m.Accepted
	}
	return false
}

func init() {
	proto.RegisterType((*RequestAttendance)(nil), "username.voter.voter.RequestAttendance")
}

func init() { proto.RegisterFile("voter/RequestAttendance.proto", fileDescriptor_7a94cd5140c192e4) }

var fileDescriptor_7a94cd5140c192e4 = []byte{
	// 234 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x90, 0xb1, 0x4e, 0xc3, 0x30,
	0x10, 0x86, 0x73, 0x21, 0x40, 0xf1, 0x80, 0x84, 0xd5, 0xc1, 0xaa, 0x84, 0x15, 0xb1, 0x90, 0x29,
	0x19, 0x78, 0x82, 0xf2, 0x08, 0x1e, 0xd9, 0x5c, 0xfb, 0x14, 0x3c, 0x24, 0x0e, 0xce, 0xa5, 0x82,
	0x47, 0x60, 0xe3, 0xb1, 0x18, 0x3b, 0x32, 0xa2, 0xe4, 0x45, 0x50, 0x1d, 0x9a, 0xa5, 0xcb, 0xdd,
	0xff, 0xdf, 0x7d, 0x3a, 0xe9, 0x3f, 0x76, 0xbf, 0xf7, 0x84, 0xa1, 0x52, 0xf8, 0x36, 0x60, 0x4f,
	0x5b, 0x22, 0x6c, 0xad, 0x6e, 0x0d, 0x96, 0x5d, 0xf0, 0xe4, 0xf9, 0x7a, 0xe8, 0x31, 0xb4, 0xba,
	0xc1, 0x32, 0x72, 0x73, 0xdd, 0xac, 0x6b, 0x5f, 0xfb, 0x08, 0x54, 0x47, 0x35, 0xb3, 0x0f, 0x9f,
	0xc0, 0xee, 0xce, 0xee, 0x70, 0xc1, 0xae, 0x4d, 0x40, 0x4d, 0x3e, 0x08, 0xc8, 0xa1, 0xb8, 0x51,
	0x27, 0xcb, 0x6f, 0x59, 0xea, 0xac, 0x48, 0x73, 0x28, 0x32, 0x95, 0x3a, 0xcb, 0x39, 0xcb, 0xc8,
	0x35, 0x28, 0x2e, 0x22, 0x16, 0x35, 0xdf, 0xb0, 0x55, 0x40, 0x83, 0x6e, 0x8f, 0x41, 0x64, 0x71,
	0xbe, 0xf8, 0xe3, 0x4e, 0x1b, 0x83, 0x1d, 0xa1, 0x15, 0x97, 0x39, 0x14, 0x2b, 0xb5, 0xf8, 0xe7,
	0xed, 0xf7, 0x28, 0xe1, 0x30, 0x4a, 0xf8, 0x1d, 0x25, 0x7c, 0x4d, 0x32, 0x39, 0x4c, 0x32, 0xf9,
	0x99, 0x64, 0xf2, 0xf2, 0x58, 0x3b, 0x7a, 0x1d, 0x76, 0xa5, 0xf1, 0x4d, 0x75, 0x0a, 0x57, 0xcd,
	0x4f, 0x78, 0xff, 0xef, 0xf4, 0xd1, 0x61, 0xbf, 0xbb, 0x8a, 0xa9, 0x9e, 0xfe, 0x02, 0x00, 0x00,
	0xff, 0xff, 0xff, 0x5b, 0x56, 0x7f, 0x22, 0x01, 0x00, 0x00,
}

func (m *RequestAttendance) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *RequestAttendance) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *RequestAttendance) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Accepted {
		i--
		if m.Accepted {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x28
	}
	if len(m.Receiver) > 0 {
		i -= len(m.Receiver)
		copy(dAtA[i:], m.Receiver)
		i = encodeVarintRequestAttendance(dAtA, i, uint64(len(m.Receiver)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Time) > 0 {
		i -= len(m.Time)
		copy(dAtA[i:], m.Time)
		i = encodeVarintRequestAttendance(dAtA, i, uint64(len(m.Time)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintRequestAttendance(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintRequestAttendance(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintRequestAttendance(dAtA []byte, offset int, v uint64) int {
	offset -= sovRequestAttendance(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *RequestAttendance) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovRequestAttendance(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovRequestAttendance(uint64(m.Id))
	}
	l = len(m.Time)
	if l > 0 {
		n += 1 + l + sovRequestAttendance(uint64(l))
	}
	l = len(m.Receiver)
	if l > 0 {
		n += 1 + l + sovRequestAttendance(uint64(l))
	}
	if m.Accepted {
		n += 2
	}
	return n
}

func sovRequestAttendance(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozRequestAttendance(x uint64) (n int) {
	return sovRequestAttendance(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *RequestAttendance) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowRequestAttendance
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: RequestAttendance: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: RequestAttendance: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequestAttendance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthRequestAttendance
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRequestAttendance
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequestAttendance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Time", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequestAttendance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthRequestAttendance
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRequestAttendance
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Time = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Receiver", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequestAttendance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthRequestAttendance
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthRequestAttendance
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Receiver = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Accepted", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowRequestAttendance
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.Accepted = bool(v != 0)
		default:
			iNdEx = preIndex
			skippy, err := skipRequestAttendance(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthRequestAttendance
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipRequestAttendance(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowRequestAttendance
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowRequestAttendance
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowRequestAttendance
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthRequestAttendance
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupRequestAttendance
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthRequestAttendance
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthRequestAttendance        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowRequestAttendance          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupRequestAttendance = fmt.Errorf("proto: unexpected end of group")
)
