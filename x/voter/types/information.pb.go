// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: voter/information.proto

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

type Information struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Name    string `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Dob     string `protobuf:"bytes,4,opt,name=dob,proto3" json:"dob,omitempty"`
	Address string `protobuf:"bytes,5,opt,name=address,proto3" json:"address,omitempty"`
	Email   string `protobuf:"bytes,6,opt,name=email,proto3" json:"email,omitempty"`
	Phone   string `protobuf:"bytes,7,opt,name=phone,proto3" json:"phone,omitempty"`
}

func (m *Information) Reset()         { *m = Information{} }
func (m *Information) String() string { return proto.CompactTextString(m) }
func (*Information) ProtoMessage()    {}
func (*Information) Descriptor() ([]byte, []int) {
	return fileDescriptor_9a94b9edb7eb7666, []int{0}
}
func (m *Information) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Information) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Information.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Information) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Information.Merge(m, src)
}
func (m *Information) XXX_Size() int {
	return m.Size()
}
func (m *Information) XXX_DiscardUnknown() {
	xxx_messageInfo_Information.DiscardUnknown(m)
}

var xxx_messageInfo_Information proto.InternalMessageInfo

func (m *Information) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Information) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Information) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Information) GetDob() string {
	if m != nil {
		return m.Dob
	}
	return ""
}

func (m *Information) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Information) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *Information) GetPhone() string {
	if m != nil {
		return m.Phone
	}
	return ""
}

func init() {
	proto.RegisterType((*Information)(nil), "username.voter.voter.Information")
}

func init() { proto.RegisterFile("voter/information.proto", fileDescriptor_9a94b9edb7eb7666) }

var fileDescriptor_9a94b9edb7eb7666 = []byte{
	// 245 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x90, 0x31, 0x4e, 0xc3, 0x30,
	0x18, 0x85, 0xe3, 0x34, 0x6d, 0x85, 0x91, 0x10, 0xb2, 0x22, 0x61, 0x31, 0x58, 0x15, 0x0b, 0x9d,
	0x92, 0x81, 0x13, 0xc0, 0xc6, 0xda, 0x91, 0xcd, 0xa9, 0x7f, 0x52, 0x4b, 0x24, 0x7f, 0x64, 0xbb,
	0x08, 0x6e, 0xc1, 0x1d, 0xb8, 0x0c, 0x63, 0x47, 0x46, 0x94, 0x5c, 0x04, 0xf9, 0x77, 0xab, 0x2e,
	0xf6, 0x7b, 0x4f, 0x9f, 0x9e, 0xf5, 0xcc, 0x6f, 0xde, 0x31, 0x80, 0xab, 0x6d, 0xff, 0x8a, 0xae,
	0xd3, 0xc1, 0x62, 0x5f, 0x0d, 0x0e, 0x03, 0x8a, 0x72, 0xef, 0xc1, 0xf5, 0xba, 0x83, 0x8a, 0x88,
	0x74, 0xde, 0x96, 0x2d, 0xb6, 0x48, 0x40, 0x1d, 0x55, 0x62, 0xef, 0xbe, 0x19, 0xbf, 0x7c, 0x3e,
	0x37, 0x08, 0xc9, 0x97, 0x5b, 0x07, 0x3a, 0xa0, 0x93, 0x6c, 0xc5, 0xd6, 0x17, 0x9b, 0x93, 0x15,
	0x57, 0x3c, 0xb7, 0x46, 0xe6, 0x2b, 0xb6, 0x2e, 0x36, 0xb9, 0x35, 0x42, 0xf0, 0x22, 0xbe, 0x21,
	0x67, 0x84, 0x91, 0x16, 0xd7, 0x7c, 0x66, 0xb0, 0x91, 0x05, 0x45, 0x51, 0xc6, 0x3e, 0x6d, 0x8c,
	0x03, 0xef, 0xe5, 0x3c, 0xf5, 0x1d, 0xad, 0x28, 0xf9, 0x1c, 0x3a, 0x6d, 0xdf, 0xe4, 0x82, 0xf2,
	0x64, 0x62, 0x3a, 0xec, 0xb0, 0x07, 0xb9, 0x4c, 0x29, 0x99, 0xa7, 0xc7, 0x9f, 0x51, 0xb1, 0xc3,
	0xa8, 0xd8, 0xdf, 0xa8, 0xd8, 0xd7, 0xa4, 0xb2, 0xc3, 0xa4, 0xb2, 0xdf, 0x49, 0x65, 0x2f, 0xf7,
	0xad, 0x0d, 0xbb, 0x7d, 0x53, 0x6d, 0xb1, 0xab, 0x4f, 0xb3, 0xeb, 0xf4, 0x31, 0x1f, 0xc7, 0x3b,
	0x7c, 0x0e, 0xe0, 0x9b, 0x05, 0xed, 0x7d, 0xf8, 0x0f, 0x00, 0x00, 0xff, 0xff, 0x11, 0x01, 0x42,
	0xb9, 0x36, 0x01, 0x00, 0x00,
}

func (m *Information) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Information) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Information) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Phone) > 0 {
		i -= len(m.Phone)
		copy(dAtA[i:], m.Phone)
		i = encodeVarintInformation(dAtA, i, uint64(len(m.Phone)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.Email) > 0 {
		i -= len(m.Email)
		copy(dAtA[i:], m.Email)
		i = encodeVarintInformation(dAtA, i, uint64(len(m.Email)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintInformation(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Dob) > 0 {
		i -= len(m.Dob)
		copy(dAtA[i:], m.Dob)
		i = encodeVarintInformation(dAtA, i, uint64(len(m.Dob)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintInformation(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintInformation(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintInformation(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintInformation(dAtA []byte, offset int, v uint64) int {
	offset -= sovInformation(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Information) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovInformation(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovInformation(uint64(m.Id))
	}
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovInformation(uint64(l))
	}
	l = len(m.Dob)
	if l > 0 {
		n += 1 + l + sovInformation(uint64(l))
	}
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovInformation(uint64(l))
	}
	l = len(m.Email)
	if l > 0 {
		n += 1 + l + sovInformation(uint64(l))
	}
	l = len(m.Phone)
	if l > 0 {
		n += 1 + l + sovInformation(uint64(l))
	}
	return n
}

func sovInformation(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozInformation(x uint64) (n int) {
	return sovInformation(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Information) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowInformation
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
			return fmt.Errorf("proto: Information: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Information: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowInformation
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
				return ErrInvalidLengthInformation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthInformation
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
					return ErrIntOverflowInformation
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
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowInformation
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
				return ErrInvalidLengthInformation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthInformation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Dob", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowInformation
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
				return ErrInvalidLengthInformation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthInformation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Dob = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowInformation
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
				return ErrInvalidLengthInformation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthInformation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Email", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowInformation
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
				return ErrInvalidLengthInformation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthInformation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Email = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Phone", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowInformation
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
				return ErrInvalidLengthInformation
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthInformation
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Phone = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipInformation(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthInformation
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
func skipInformation(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowInformation
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
					return 0, ErrIntOverflowInformation
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
					return 0, ErrIntOverflowInformation
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
				return 0, ErrInvalidLengthInformation
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupInformation
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthInformation
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthInformation        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowInformation          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupInformation = fmt.Errorf("proto: unexpected end of group")
)