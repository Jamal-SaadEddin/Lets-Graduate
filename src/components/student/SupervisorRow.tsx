import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { Button, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { AvailableSupervisor } from "../../constants/availableSupervisors";
import {
  cancelSupervisionRequest,
  getIsRequestingSupervision,
  sendSupervisionRequest,
} from "../../hooks/useAvailableSupervisors";

interface Props {
  supervisor: AvailableSupervisor;
}

const SupervisorRow = ({ supervisor }: Props) => {
  const [requested, setRequested] = useState(false);

  const handleButtonState = async () => {
    const requesting = await getIsRequestingSupervision(
      11923604,
      supervisor.doctorId
    );
    setRequested(requesting);
  };

  useEffect(() => {
    // Code here will run just like componentDidMount
    handleButtonState();
  }, []);

  const handleRequest = async () => {
    setRequested(true);

    const requestBody = {
      reciverId: supervisor.doctorId,
      senderId: 11923604,
      type: "requesting",
      content: "is requesting you to supervise their group",
      senderType: "group",
    };
    await sendSupervisionRequest(requestBody);
  };

  const cancelRequest = async () => {
    setRequested(false);

    await cancelSupervisionRequest(11923604, supervisor.doctorId);
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
          onClick={requested ? cancelRequest : handleRequest}
        >
          {requested ? "cancel request" : "register request"}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SupervisorRow;
