import CancelIcon from "@mui/icons-material/Cancel";
import MergeIcon from "@mui/icons-material/Merge";
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
import {
  GradingProjectsStudent,
  SupervisedProjectsStudent,
} from "../../constants/supervisedProjects";
import MergeGroupsProcessDialog from "../doctor/common/MergeGroupsProcessDialog";
import {
  cancelPartnershipRequest,
  sendPartnershipRequest,
} from "../../hooks/useAvailableGroups";

interface Props {
  tableHead: (string | ReactNode)[];
  tableBody:
    | SupervisedProjectsStudent[]
    | AvailableGroupsStudent[]
    | GradingProjectsStudent[]
    | Partner[]
    | Supervisor[];
  withButton?: "join-group" | "merge-group" | false;
}

export default function Table({
  tableHead,
  tableBody,
  withButton = false,
}: Props) {
  const [requested, setRequested] = useState(false);
  const [openMergeDialog, setOpenMergeDialog] = useState(false);

  var buttonText = "";
  if (requested && withButton === "join-group") buttonText = "cancel request";
  else if (!requested && withButton === "merge-group")
    buttonText = "view merge process";
  else buttonText = "send request";

  const handleRequest = async () => {
    setRequested(true);

    const requestBody = {
      reciverId: tableBody[0].id,
      senderId: 11925044,
      type: "requesting",
      content: "is requesting to join your group",
      senderType: "student",
    };
    await sendPartnershipRequest(requestBody);
  };

  const cancelRequest = async () => {
    setRequested(false);

    await cancelPartnershipRequest(11925044, tableBody[0].id);
  };

  const handleStartMergeProcess = () => {
    setOpenMergeDialog(true);
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
                  endIcon={
                    !requested && withButton === "join-group" ? (
                      <SendIcon />
                    ) : !requested && withButton === "merge-group" ? (
                      <MergeIcon />
                    ) : null
                  }
                  size="small"
                  onClick={
                    withButton === "join-group" && !requested
                      ? handleRequest
                      : withButton === "merge-group"
                      ? handleStartMergeProcess
                      : cancelRequest
                  }
                >
                  {buttonText}
                </Button>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((user, index) => (
            <TableRow key={index}>
              {propertyNames.map(
                (property, index) =>
                  property !== "id" && (
                    <TableCell
                      key={index}
                      colSpan={
                        index === propertyNames.length - 1 && withButton ? 2 : 1
                      }
                    >
                      {user[property]}
                    </TableCell>
                  )
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      <MergeGroupsProcessDialog
        openMergeDialog={openMergeDialog}
        setOpenMergeDialog={setOpenMergeDialog}
        requestedGroup={tableBody as AvailableGroupsStudent[]}
      />
    </TableContainer>
  );
}
