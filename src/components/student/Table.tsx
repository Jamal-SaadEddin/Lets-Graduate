import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { Button, Table as MuiTable } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ReactNode, useState } from "react";
import { AvailableGroupsStudent } from "../../constants/availableGroups";
import { Partner, Supervisor } from "../../constants/myProject";

interface Props {
  tableHead: (string | ReactNode)[];
  tableBody: AvailableGroupsStudent[] | Partner[] | Supervisor[];
  withButton?: boolean;
}

export default function Table({
  tableHead,
  tableBody,
  withButton = false,
}: Props) {
  const [requested, setRequested] = useState(false);
  const handleRequest = () => {
    setRequested(!requested);
  };

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
            {withButton && (
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
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((user, index) => (
            <TableRow key={index}>
              {propertyNames.map((property, index) => (
                <TableCell
                  key={index}
                  colSpan={
                    index === propertyNames.length - 1 && withButton ? 2 : 1
                  }
                >
                  {user[property]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
