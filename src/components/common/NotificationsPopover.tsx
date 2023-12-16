import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Stack } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Popover from "@mui/material/Popover";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  NotificationItem,
  notificationItems,
} from "../../constants/notifications";

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState(notificationItems);

  const totalUnRead = notifications.filter(
    (item) => item.readStatus === "unread"
  ).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        readStatus: "read",
      }))
    );
    console.log(notifications);
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
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {totalUnRead} unread messages
            </Typography>
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
          {notifications.slice(0, 2).map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </List>

        <List
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              sx={{ py: 1, px: 2.5, typography: "overline" }}
            >
              Before that
            </ListSubheader>
          }
        >
          {notifications.slice(2, 5).map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        </List>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Box sx={{ p: 1 }}>
          <Button fullWidth disableRipple>
            View All
          </Button>
        </Box>
      </Popover>
    </>
  );
}

interface Props {
  notification: NotificationItem;
}

function Notification({ notification }: Props) {
  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
        ...(notification.readStatus === "unread" && {
          bgcolor: "action.selected",
        }),
      }}
    >
      <ListItemText
        primary={
          <Typography variant="subtitle2">
            {notification.title}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              &nbsp; {notification.content}
            </Typography>
          </Typography>
        }
        secondary={
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
                <Button variant="contained">Accept</Button>
                <Button variant="outlined" color="inherit">
                  Decline
                </Button>
              </Stack>
            )}
          </Stack>
        }
      />
    </ListItemButton>
  );
}
