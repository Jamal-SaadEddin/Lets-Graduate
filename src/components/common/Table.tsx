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
import { ReactNode, useEffect, useState } from "react";
import { AvailableGroupsStudent } from "../../constants/availableGroups";
import { Partner, Supervisor } from "../../constants/myProject";
import { SupervisedProjectsStudent } from "../../constants/supervisedProjects";
import {
  cancelPartnershipRequest,
  getIsRequestingPartnership,
  sendPartnershipRequest,
} from "../../hooks/useAvailableGroups";
import MergeGroupsProcessDialog from "../doctor/common/MergeGroupsProcessDialog";
import useMergeGroupsStore from "../../state-management/Doctor/mergeGroupsStore";

interface Props {
  tableHead: (string | ReactNode)[];
  tableBody:
    | SupervisedProjectsStudent[]
    | AvailableGroupsStudent[]
    | Partner[]
    | Supervisor[];
  withButton?: "join-group" | "merge-group" | false;
}

export default function Table({
  tableHead,
  tableBody,
  withButton = false,
}: Props) {
  const availableMergeGroups = useMergeGroupsStore(
    (s) => s.availableMergeGroups
  );

  const [requested, setRequested] = useState(false);
  const [openMergeDialog, setOpenMergeDialog] = useState(false);

  const handleButtonState = async () => {
    const requesting = await getIsRequestingPartnership(
      11944044,
      tableBody[0].id
    );
    setRequested(requesting);
  };

  useEffect(() => {
    // Code here will run just like componentDidMount
    handleButtonState();
  }, []);

  var buttonText = "";
  if (requested && withButton === "join-group") buttonText = "cancel request";
  else if (withButton === "merge-group") buttonText = "view merge process";
  else buttonText = "send request";

  const handleRequest = async () => {
    setRequested(true);

    const requestBody = {
      reciverId: tableBody[0].id,
      senderId: 11944044, // userId
      type: "request",
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
    <TableContainer component={Paper} onLoad={handleButtonState}>
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
                  startIcon={
                    requested && withButton === "join-group" && <CancelIcon />
                  }
                  endIcon={
                    !requested && withButton === "join-group" ? (
                      <SendIcon />
                    ) : withButton === "merge-group" ? (
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
              {propertyNames.map((property, index) => {
                if (property === "id" && withButton) return null;
                else
                  return (
                    <TableCell
                      key={index}
                      colSpan={
                        index === propertyNames.length - 1 && withButton ? 2 : 1
                      }
                    >
                      {user[property]}
                    </TableCell>
                  );
              })}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      {}
      <MergeGroupsProcessDialog
        openMergeDialog={openMergeDialog}
        setOpenMergeDialog={setOpenMergeDialog}
        requestedGroup={
          availableMergeGroups.filter(
            (group) => group.students === tableBody
          )[0]
        }
      />
    </TableContainer>
  );
}
