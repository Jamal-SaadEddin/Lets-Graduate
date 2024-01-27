import {
  Container,
  Grid,
  List,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import useNotificationsStore from "../../state-management/notificationsStore";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  const notifications = useNotificationsStore((s) => s.notifications);

  const totalUnRead = notifications.filter(
    (item) => item.readStatus === "unread"
  ).length;
  const totalRead = notifications.filter(
    (item) => item.readStatus === "read"
  ).length;

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
              Notifications
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Typography variant="h6">
              {notifications.length === 0
                ? "There is no new notifications"
                : "All notifications"}
            </Typography>
          </Grid>
          {notifications.length > 0 && (
            <Grid item xs={12}>
              {totalUnRead > 0 && (
                <List
                  disablePadding
                  subheader={
                    <ListSubheader
                      disableSticky
                      sx={{ py: 1, px: 2.5, typography: "overline" }}
                    >
                      New
                    </ListSubheader>
                  }
                >
                  {notifications
                    .filter((notf) => notf.readStatus === "unread")
                    .map((notification) => (
                      <NotificationItem
                        key={notification.notificationId}
                        notificationElement={notification}
                      />
                    ))}
                </List>
              )}

              {(totalUnRead === 0 || (totalUnRead > 0 && totalRead > 0)) && (
                <List
                  disablePadding
                  subheader={
                    <ListSubheader
                      disableSticky
                      sx={{ py: 1, px: 2.5, typography: "overline" }}
                    >
                      {notifications.length === 0
                        ? "There is no new notifications"
                        : totalUnRead === 0
                        ? "All Notifications"
                        : totalUnRead > 0 && totalRead > 0
                        ? "Before that"
                        : ""}
                    </ListSubheader>
                  }
                >
                  {notifications
                    .filter((notf) => notf.readStatus === "read")
                    .map((notification) => (
                      <NotificationItem
                        key={notification.notificationId}
                        notificationElement={notification}
                      />
                    ))}
                </List>
              )}
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Notifications;
