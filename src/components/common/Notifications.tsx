import {
  Container,
  Grid,
  List,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import { notificationElements as notifications } from "../../constants/notifications";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  const totalUnRead = notifications.filter(
    (item) => item.readStatus === "unread"
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
            <Typography variant="h6">All notifications</Typography>
          </Grid>
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
                      key={notification.id}
                      notificationElement={notification}
                    />
                  ))}
              </List>
            )}

            <List
              disablePadding
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ py: 1, px: 2.5, typography: "overline" }}
                >
                  {totalUnRead === 0 ? "All Notifications" : "Before that"}
                </ListSubheader>
              }
            >
              {notifications
                .filter((notf) => notf.readStatus === "read")
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notificationElement={notification}
                  />
                ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Notifications;
