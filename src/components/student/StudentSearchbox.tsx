import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import { Student, students } from "../../constants/availableGroups";
import useSearchboxStore from "../../state-management/searchboxStore";

const StudentSearchbox = () => {
  const student = useSearchboxStore((s) => s.student);
  const setStudent = useSearchboxStore((s) => s.setStudent);
  const filteredStudents = useSearchboxStore((s) => s.filteredStudents);
  const setFilteredOptions = useSearchboxStore((s) => s.setFilteredStudents);

  const handleInputChange = (_event: SyntheticEvent, value: string) => {
    // Perform manual filtering and log the results
    const filtered = students.filter((option) =>
      option.fullName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <Autocomplete
      options={filteredStudents}
      getOptionLabel={(option) => option.fullName}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search by student first or last name"
          InputProps={{
            endAdornment: null, // Remove the down arrow icon
          }}
        />
      )}
      value={student}
      onChange={(_event: any, newValue: Student | null) => setStudent(newValue)}
      onInputChange={handleInputChange}
      open={false} // Ensure the menu is closed
      clearOnBlur={false} // Retain the input value on blur
    />
  );
};

export default StudentSearchbox;
