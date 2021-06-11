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

func init() {
	proto.RegisterType((*RequestAttendance)(nil), "username.voter.voter.RequestAttendance")
}

func init() { proto.RegisterFile("voter/RequestAttendance.proto", fileDescriptor_7a94cd5140c192e4) }

var fileDescriptor_7a94cd5140c192e4 = []byte{
	// 215 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2d, 0xcb, 0x2f, 0x49,
	0x2d, 0xd2, 0x0f, 0x4a, 0x2d, 0x2c, 0x4d, 0x2d, 0x2e, 0x71, 0x2c, 0x29, 0x49, 0xcd, 0x4b, 0x49,
	0xcc, 0x4b, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12, 0x29, 0x2d, 0x4e, 0x2d, 0xca,
	0x4b, 0xcc, 0x4d, 0xd5, 0x03, 0xab, 0x83, 0x90, 0x52, 0x22, 0xe9, 0xf9, 0xe9, 0xf9, 0x60, 0x05,
	0xfa, 0x20, 0x16, 0x44, 0xad, 0x52, 0x2e, 0x97, 0x20, 0x86, 0x31, 0x42, 0x12, 0x5c, 0xec, 0xc9,
	0x45, 0xa9, 0x89, 0x25, 0xf9, 0x45, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x30, 0xae, 0x10,
	0x1f, 0x17, 0x53, 0x66, 0x8a, 0x04, 0x93, 0x02, 0xa3, 0x06, 0x4b, 0x10, 0x53, 0x66, 0x8a, 0x90,
	0x10, 0x17, 0x4b, 0x49, 0x66, 0x6e, 0xaa, 0x04, 0x33, 0x58, 0x19, 0x98, 0x2d, 0x24, 0xc5, 0xc5,
	0x51, 0x94, 0x9a, 0x9c, 0x9a, 0x59, 0x96, 0x5a, 0x24, 0xc1, 0x02, 0x16, 0x87, 0xf3, 0x9d, 0x1c,
	0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5,
	0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x3d, 0x3d, 0xb3, 0x24, 0xa3,
	0x34, 0x49, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0xe6, 0x7e, 0x7d, 0x88, 0x3f, 0x2b, 0xa0, 0x74, 0x49,
	0x65, 0x41, 0x6a, 0x71, 0x12, 0x1b, 0xd8, 0xe1, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0x36,
	0xcd, 0xa1, 0x29, 0x05, 0x01, 0x00, 0x00,
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
