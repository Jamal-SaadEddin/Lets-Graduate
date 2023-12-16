import {
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import { NotificationItem } from "../../constants/notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";

interface Props {
  notificationItem: NotificationItem;
}

const Notification = ({ notificationItem }: Props) => {
  const [notification, setNotification] = useState(notificationItem);

  const handleAccept = (acceptStatus: "accepted" | "declined") => {
    const updatedNotification = { ...notification, acceptStatus };
    setNotification(updatedNotification);
  };

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
        }
      />
    </ListItemButton>
  );
};

export default Notification;
