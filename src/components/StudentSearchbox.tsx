import { Autocomplete, Stack, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import { Student, students } from "../constants/availableGroups";
import useSearchboxStore from "../state-management/searchboxStore";

const StudentSearchbox = () => {
  const student = useSearchboxStore((s) => s.student);
  const setStudent = useSearchboxStore((s) => s.setStudent);
  const filteredStudents = useSearchboxStore((s) => s.filteredStudents);
  const setFilteredOptions = useSearchboxStore((s) => s.setFilteredStudents);

  const handleInputChange = (event: SyntheticEvent, value: string) => {
    // Perform manual filtering and log the results
    const filtered = students.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    console.log(filtered);
  };

  return (
    <Stack spacing={2}>
      <Autocomplete
        options={filteredStudents}
        getOptionLabel={(option) => option.name}
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
        onChange={(event: any, newValue: Student | null) => {
          setStudent(newValue);
          console.log({ student });
        }}
        onInputChange={handleInputChange}
        open={false} // Ensure the menu is closed
        clearOnBlur={false} // Retain the input value on blur
      />
    </Stack>
  );
};

export default StudentSearchbox;
