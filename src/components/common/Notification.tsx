import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  TextField,
  Divider,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import {
  addJoinResponse,
  addMergeResponse,
  addSupervisionResponse,
} from "../../hooks/useNotifications";
import useNotificationsStore from "../../state-management/notificationsStore";
import { NotificationElement } from "../../constants/notifications";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import { AvailableGroupsStudent } from "../../constants/availableGroups";
import { Group, GroupDetails, GroupSummary } from "../common/Group";
import Table from "../common/Table";
import { useState } from "react";

const headingsMyGroup = [
  "Student Name",
  "Registration Number",
  "Address",
  "Email",
  "Department",
  "Project Type",
];

const headingsRequestingGroup = [
  "Student Name",
  "Academic Number",
  "Address",
  "Email",
  "Department",
  "Project Type",
];

const Notification = () => {
  const { notification, setNotification } = useNotificationsStore();

  const params = useParams();
  if (params.id !== notification?.notificationId.toString()) throw Error;

  const handleAccept = async (acceptStatus: "accepted" | "declined") => {
    const updatedNotification = { ...notification, acceptStatus };

    if (notification?.acceptStatus === "pendingSupervise") {
      const requestBody = {
        senderId: notification.reciverId,
        reciverId: notification.senderId,
        type: "notify",
        notificationId: notification.notificationId,
        acceptStatus: acceptStatus,
      };
      const isSaved = true;
      // await addSupervisionResponse(requestBody);
      if (isSaved) setNotification(updatedNotification as NotificationElement);
    } else if (notification?.acceptStatus === "pendingJoin") {
      const requestBody = {
        senderId: notification.reciverId,
        reciverId: notification.senderId,
        type: "notify",
        notificationId: notification.notificationId,
        acceptStatus: acceptStatus,
      };
      const isSaved = true;
      //await addJoinResponse(requestBody);
      if (isSaved) setNotification(updatedNotification as NotificationElement);
    }
  };

  const mergingGroups = useNotificationsStore((s) => s.mergingGroups);

  const [confirmMerge, setConfirmMerge] = useState("");

  const handleMergeResponse = async (acceptStatus: "accepted" | "declined") => {
    const updatedNotification = { ...notification, acceptStatus };

    const requestBody = {
      senderId: notification?.reciverId,
      reciverId: notification?.senderId,
      type: "notify",
      notificationId: notification?.notificationId,
      acceptStatus: acceptStatus,
    };
    const isSaved = true;
    //await addMergeResponse(requestBody);
    if (isSaved) setNotification(updatedNotification as NotificationElement);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          my: 4,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              gutterBottom
            >
              <Link to={"/notifications"}>
                <Button
                  variant="text"
                  startIcon={<ArrowBackIosIcon />}
                  size="small"
                ></Button>
              </Link>
              Notification Details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              {notification?.senderName}
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                &nbsp; {notification?.content}
              </Typography>
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="caption"
                sx={{
                  mt: 0.5,
                  display: "flex",
                  alignItems: "center",
                  color: "text.disabled",
                }}
              >
                <AccessTimeIcon fontSize="small" />
                &nbsp;{notification?.notificationDuration}
              </Typography>
              {(notification?.acceptStatus === "pendingJoin" ||
                notification?.acceptStatus === "pendingSupervise") && (
                <Stack direction="row" spacing={1} marginTop={2}>
                  <Button
                    variant="contained"
                    onClick={() => handleAccept("accepted")}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => handleAccept("declined")}
                  >
                    Decline
                  </Button>
                </Stack>
              )}
              {notification?.acceptStatus === "accepted" && (
                <Chip
                  color={notification.type === "merge" ? "warning" : "primary"}
                  size="small"
                  variant="filled"
                  label={notification.type === "merge" ? "Merged" : "Accepted"}
                  sx={{
                    fontSize: "14px",
                    marginTop: 2,
                  }}
                />
              )}
              {notification?.acceptStatus === "declined" && (
                <Chip
                  color="default"
                  size="small"
                  variant="filled"
                  label="Declined"
                  sx={{
                    fontSize: "14px",
                    marginTop: 2,
                  }}
                />
              )}
            </Stack>
          </Grid>
          {notification?.acceptStatus === "pendingMerge" && (
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6" marginBottom={1}>
                    Your Group
                  </Typography>
                  <Group key={1} defaultExpanded>
                    <GroupSummary>
                      <Grid container>
                        <Grid item xs={7} sm={9}>
                          <Typography>
                            {mergingGroups?.requestedGroup.students
                              .map((student) => `${student.fullName}`)
                              .join(", ")}
                          </Typography>
                        </Grid>
                        <Grid item xs={5} sm={3} textAlign="end">
                          <Typography>
                            {mergingGroups?.requestedGroup.students.length}{" "}
                            Members
                          </Typography>
                        </Grid>
                      </Grid>
                    </GroupSummary>
                    <GroupDetails>
                      <Table
                        tableBody={
                          mergingGroups?.requestedGroup.students.map(
                            ({
                              fullName,
                              id,
                              address,
                              email,
                              department,
                              projectType,
                            }) => ({
                              fullName,
                              id,
                              address,
                              email,
                              department,
                              projectType,
                            })
                          ) as AvailableGroupsStudent[]
                        }
                        tableHead={headingsMyGroup}
                      />
                    </GroupDetails>
                  </Group>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" marginBottom={1}>
                    {notification.senderName}'s Group
                  </Typography>
                  <Group key={1} defaultExpanded>
                    <GroupSummary>
                      <Grid container>
                        <Grid item xs={7} sm={9}>
                          <Typography>
                            {mergingGroups?.requestingGroup.students
                              .map((student) => `${student.fullName}`)
                              .join(", ")}
                          </Typography>
                        </Grid>
                        <Grid item xs={5} sm={3} textAlign="end">
                          <Typography>
                            {mergingGroups?.requestingGroup.students.length}{" "}
                            Members
                          </Typography>
                        </Grid>
                      </Grid>
                    </GroupSummary>
                    <GroupDetails>
                      <Table
                        tableBody={
                          mergingGroups?.requestingGroup.students.map(
                            ({
                              fullName,
                              academicNumber,
                              address,
                              email,
                              department,
                              projectType,
                            }) => ({
                              fullName,
                              academicNumber,
                              address,
                              email,
                              department,
                              projectType,
                            })
                          ) as AvailableGroupsStudent[]
                        }
                        tableHead={headingsRequestingGroup}
                      />
                    </GroupDetails>
                  </Group>
                </Grid>
              </Grid>
              <Divider sx={{ my: 3 }} />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    Merge 2 groups and make them one group supervised by you and
                    another doctor.
                    <br />
                  </Typography>
                  <Typography variant="body1">
                    - This will merge the 2 groups in 1 group.
                    <br />
                    - There will be 2 supervisors on the new merged group.
                    <br />
                    - You wil be supervising you current students in the new
                    merged group.
                    <br />
                    - The other doctor will be supervising his/her students in
                    the new merged group.
                    <br />- At the end of the semester, each doctor will
                    evaluate his/her students only.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    color="warning"
                    label="Type MERGE to confirm."
                    variant="outlined"
                    value={confirmMerge}
                    onChange={(event) => setConfirmMerge(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="warning"
                    disabled={
                      confirmMerge.toLowerCase() === "merge" ? false : true
                    }
                    onClick={() => handleMergeResponse("accepted")}
                    endIcon={<CallMergeIcon />}
                  >
                    Merge now
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => handleMergeResponse("declined")}
                    sx={{ mx: 2 }}
                  >
                    Decline merge
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Notification;
