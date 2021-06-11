package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		RequestAttendanceList: []*RequestAttendance{},
		InformationList:       []*Information{},
		AttendanceList:        []*Attendance{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in RequestAttendance
	RequestAttendanceIdMap := make(map[uint64]bool)

	for _, elem := range gs.RequestAttendanceList {
		if _, ok := RequestAttendanceIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for RequestAttendance")
		}
		RequestAttendanceIdMap[elem.Id] = true
	}
	// Check for duplicated ID in information
	informationIdMap := make(map[uint64]bool)

	for _, elem := range gs.InformationList {
		if _, ok := informationIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for information")
		}
		informationIdMap[elem.Id] = true
	}
	// Check for duplicated ID in attendance
	attendanceIdMap := make(map[uint64]bool)

	for _, elem := range gs.AttendanceList {
		if _, ok := attendanceIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for attendance")
		}
		attendanceIdMap[elem.Id] = true
	}

	return nil
}
