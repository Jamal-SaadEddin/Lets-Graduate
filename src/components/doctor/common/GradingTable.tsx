import { Table as MuiTable } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ReactNode, useState } from "react";
import { SupervisedProjectsStudent } from "../../../constants/supervisedProjects";

interface Props {
  tableHead: (string | ReactNode)[];
  tableBody: SupervisedProjectsStudent[];
}

const GradingTable = ({ tableHead, tableBody }: Props) => {
  const propertyNames = Object.keys(
    tableBody[0]
  ) as (keyof (typeof tableBody)[0])[];

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {tableHead.map((head, index) => (
              <TableCell key={index}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((student, index) => (
            <TableRow key={index}>
              {propertyNames.map(
                (property, index) =>
                  index !== propertyNames.length - 1 && (
                    <TableCell key={index}>{student[property]}</TableCell>
                  )
              )}
              <TableCell key={propertyNames.length - 1}>
                <ProjectStatusSelect student={student} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default GradingTable;

interface ProjectStatusSelectProps {
  student: SupervisedProjectsStudent;
}

const ProjectStatusSelect = ({ student }: ProjectStatusSelectProps) => {
  const [projectStatus, setProjectStatus] = useState(student.projectStatus);

  const handleChange = async (event: SelectChangeEvent) => {
    setProjectStatus(
      event.target.value as "not started" | "in progress" | "passed"
    );
    // const requestBody = {
    //   projectType: student.projectType?.toUpperCase(),
    //   gpState: event.target.value,
    // };
    // await updateStudentProjectStatus(student.id, requestBody);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Project Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={projectStatus}
        label="Project Status"
        onChange={handleChange}
      >
        <MenuItem value="not started">Failed</MenuItem>
        <MenuItem disabled value="in progress">
          In Progress
        </MenuItem>
        <MenuItem value="passed">Passed</MenuItem>
      </Select>
    </FormControl>
  );
};
