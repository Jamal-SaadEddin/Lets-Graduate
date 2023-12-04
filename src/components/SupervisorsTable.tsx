import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { availableSupervisors } from "../constants/availableSupervisors";
import SupervisorRow from "./SupervisorRow";

interface Heading {
  id: "name" | "department" | "email" | "button";
  label: string;
  minWidth?: number;
  align?: "right";
}

const headings: readonly Heading[] = [
  { id: "name", label: "Supervisor Name", minWidth: 100 },
  { id: "department", label: "Department", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "button", label: "Request Supervising", minWidth: 100, align: "right" },
];

export default function SupervisorsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (
    !availableSupervisors ||
    availableSupervisors.length === 0 ||
    availableSupervisors === null
  )
    return (
      <Typography variant="h6" paddingBottom={2} color="primary">
        No Supervisors Available!
      </Typography>
    );

  return (
    <div>
      <Typography variant="h6" paddingBottom={2} color="primary">
        Available Supervisors
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {headings.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {availableSupervisors
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((supervisor, inedx) => (
                  <SupervisorRow supervisor={supervisor} key={inedx} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          id="table-pagination"
          rowsPerPageOptions={[10, 15, 25]}
          component="div"
          count={availableSupervisors.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
