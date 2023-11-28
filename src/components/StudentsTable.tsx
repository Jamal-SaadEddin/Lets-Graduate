import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Student } from "../constants/availableGroups";

interface Props {
  students: Student[];
}

export default function StudentsTable({ students }: Props) {
  const [requested, setRequested] = useState(false);
  const handleRequest = () => {
    setRequested(!requested);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Batch Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                startIcon={requested && <CancelIcon />}
                endIcon={!requested && <SendIcon />}
                size="small"
                onClick={handleRequest}
              >
                {requested ? "cancel request" : "join request"}
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.label}
              </TableCell>
              <TableCell>{student.batchNumber}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell colSpan={2}>{student.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
