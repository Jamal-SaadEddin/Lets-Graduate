import DoneAllIcon from "@mui/icons-material/DoneAll";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NotificationElement } from "../../constants/notifications";
import useNotificationsStore from "../../state-management/notificationsStore";
import NotificationItem from "./NotificationItem";

const NotificationsPopover = () => {
  const { notifications, setNotifications } = useNotificationsStore();

  const totalUnRead = notifications.filter(
    (item) => item.readStatus === "unread"
  ).length;
  const totalRead = notifications.filter(
    (item) => item.readStatus === "read"
  ).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = async () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      readStatus: "read",
    }));
    const isMarked = true;
    //await markAllNotificationsAsRead(user?.id as number);
    if (isMarked)
      setNotifications(updatedNotifications as NotificationElement[]);
  };

  return (
    <>
      <IconButton color={open ? "default" : "inherit"} onClick={handleOpen}>
        <Badge badgeContent={totalUnRead} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            {totalUnRead > 0 && (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                You have {totalUnRead} new{" "}
                {totalUnRead === 1 ? "message" : "messages"}
              </Typography>
            )}
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                <DoneAllIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

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
                  handleClose={handleClose}
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
                  handleClose={handleClose}
                />
              ))}
          </List>
        )}

        <Divider sx={{ borderStyle: "dashed" }} />

        {notifications.length > 0 && (
          <Box sx={{ p: 1 }}>
            <Link to="/notifications">
              <Button fullWidth onClick={handleClose}>
                View All
              </Button>
            </Link>
          </Box>
        )}
      </Popover>
    </>
  );
};

export default NotificationsPopover;
