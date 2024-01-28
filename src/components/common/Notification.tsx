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
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import {
  addJoinResponse,
  addSupervisionResponse,
} from "../../hooks/useNotifications";
import useNotificationsStore from "../../state-management/notificationsStore";
import { NotificationElement } from "../../constants/notifications";

const Notification = () => {
  const notification = useNotificationsStore((s) => s.notification);
  const setNotification = useNotificationsStore((s) => s.setNotification);

  const params = useParams();
  console.log(params);

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
      const isSaved = await addSupervisionResponse(requestBody);
      if (isSaved) setNotification(updatedNotification as NotificationElement);
    } else if (notification?.acceptStatus === "pendingJoin") {
      const requestBody = {
        senderId: notification.reciverId,
        reciverId: notification.senderId,
        type: "notify",
        notificationId: notification.notificationId,
        acceptStatus: acceptStatus,
      };
      const isSaved = await addJoinResponse(requestBody);
      if (isSaved) setNotification(updatedNotification as NotificationElement);
    }
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
                &nbsp;{notification?.dateCreated}
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
                  color="primary"
                  size="small"
                  variant="filled"
                  label="Accepted"
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
        </Grid>
      </Paper>
    </Container>
  );
};

export default Notification;
