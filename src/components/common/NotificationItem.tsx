import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Button,
  Chip,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationElement } from "../../constants/notifications";
import useNotificationsStore from "../../state-management/notificationsStore";
import {
  addJoinResponse,
  addSupervisionResponse,
} from "../../hooks/useNotifications";

interface Props {
  notificationElement: NotificationElement;
  handleClose?: () => void;
}

const NotificationItem = ({ notificationElement, handleClose }: Props) => {
  const [notification, setNotification] = useState(notificationElement);
  const setCurrentNotification = useNotificationsStore(
    (s) => s.setNotification
  );

  const navigate = useNavigate();

  const handleAccept = async (
    event: React.MouseEvent<HTMLButtonElement>,
    acceptStatus: "accepted" | "declined"
  ) => {
    event.stopPropagation();
    const updatedNotification = { ...notification, acceptStatus };

    if (notification.acceptStatus === "pendingSupervise") {
      const requestBody = {
        senderId: notification.reciverId,
        reciverId: notification.senderId,
        type: "notify",
        notificationId: notification.notificationId,
        acceptStatus: acceptStatus,
      };
      const isSaved = await addSupervisionResponse(requestBody);
      if (isSaved) setNotification(updatedNotification as NotificationElement);
    } else if (notification.acceptStatus === "pendingJoin") {
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

  const handleClick = () => {
    handleClose && handleClose();
    setCurrentNotification(notification);
    navigate(`/notification/${notification.notificationId}`);
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
      onClick={handleClick}
    >
      <ListItemText
        primary={
          <Typography variant="subtitle2">
            {notification.senderName}
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
              &nbsp;{notification.notificationDuration}
            </Typography>
            {(notification.acceptStatus === "pendingJoin" ||
              notification.acceptStatus === "pendingSupervise") && (
              <Stack direction="row" spacing={1} marginTop={2}>
                <Button
                  variant="contained"
                  onClick={(event) => handleAccept(event, "accepted")}
                >
                  Accept
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={(event) => handleAccept(event, "declined")}
                >
                  Decline
                </Button>
              </Stack>
            )}
            {notification.notifyButtonText !== null && (
              <Stack direction="row" spacing={1} marginTop={2}>
                <Button variant="contained" color="inherit">
                  {notification.notifyButtonText}
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

export default NotificationItem;
