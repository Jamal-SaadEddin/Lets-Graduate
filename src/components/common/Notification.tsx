import {
  ListItemButton,
  ListItemText,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { NotificationItem } from "../../constants/notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

interface Props {
  notification: NotificationItem;
}

const Notification = ({ notification }: Props) => {
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
};

export default Notification;
