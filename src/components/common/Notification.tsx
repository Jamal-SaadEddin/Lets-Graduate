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
import useNotificationStore from "../../state-management/Student/notificationStore";

const Notification = () => {
  const notification = useNotificationStore((s) => s.notification);
  const setNotification = useNotificationStore((s) => s.setNotification);

  const params = useParams();
  console.log(params);

  if (params.id !== notification.id.toString()) throw Error;

  const handleAccept = (acceptStatus: "accepted" | "declined") => {
    const updatedNotification = { ...notification, acceptStatus };
    setNotification(updatedNotification);
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
              {notification.sender}
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                &nbsp; {notification.content}
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
                &nbsp;{notification.dateCreated}
              </Typography>
              {notification.acceptStatus === "pending" && (
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
              {notification.acceptStatus === "accepted" && (
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
              {notification.acceptStatus === "declined" && (
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
