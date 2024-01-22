import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { AvailableSupervisor } from "../../constants/availableSupervisors";

interface Props {
  supervisor: AvailableSupervisor;
}

const SupervisorRow = ({ supervisor }: Props) => {
  const [requested, setRequested] = useState(false);
  const handleRequest = () => {
    setRequested(!requested);
  };

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell>Dr. {supervisor.fullName}</TableCell>
      <TableCell>{supervisor.department}</TableCell>
      <TableCell>{supervisor.email}</TableCell>
      <TableCell align="right">
        <Button
          variant="contained"
          startIcon={requested && <CancelIcon />}
          endIcon={!requested && <SendIcon />}
          size="small"
          onClick={handleRequest}
        >
          {requested ? "cancel request" : "register request"}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SupervisorRow;
