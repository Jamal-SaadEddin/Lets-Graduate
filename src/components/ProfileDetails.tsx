import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import useAuth, { User } from "../hooks/useAuth";
import { InProgressBadge, NotStartedBadge } from "./StateBadges";

const ProfileDetails = () => {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = React.useState<User>(user);

  const [disabled, setDisabled] = React.useState(true);

  const handleCancel = (user: User) => {
    setCurrentUser(user);
    setDisabled(!disabled);
  };

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const handleSave = () => {
    // Save Changes to Backend
    setDisabled(!disabled);
    setOpenSnackbar(true);
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
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
              My Profile
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Avatar
              alt="Jamal SaadEddin"
              src="/src/assets/jamal_pp.jpg"
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h6">{"Jamal SaadEddin"}</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              value={currentUser.firstName}
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "black",
                },
              }}
              onChange={(event) =>
                setCurrentUser({
                  ...currentUser,
                  firstName: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={currentUser.lastName}
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "black",
                },
              }}
              onChange={(event) =>
                setCurrentUser({
                  ...currentUser,
                  lastName: event.target.value,
                })
              }
            />
          </Grid>
          {disabled && (
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Registeration Number"
                value={currentUser.id}
                disabled
                sx={{
                  "& .Mui-disabled": {
                    color: "black",
                  },
                }}
              />
            </Grid>
          )}
          {disabled && (
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Department"
                value={currentUser.department}
                disabled
                sx={{
                  "& .Mui-disabled": {
                    color: "black",
                  },
                }}
              />
            </Grid>
          )}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Address - City/Village"
              value={currentUser.address}
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "black",
                },
              }}
              onChange={(event) =>
                setCurrentUser({
                  ...currentUser,
                  address: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Mobile Phone"
              value={currentUser.mobileNumber}
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "black",
                },
              }}
              onChange={(event) =>
                setCurrentUser({
                  ...currentUser,
                  mobileNumber: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12}>
            {!disabled && (
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  px: 2,
                  mr: 2,
                }}
                disableElevation
                onClick={() => handleCancel(user)}
              >
                Cancel
              </Button>
            )}
            {!disabled && (
              <Button
                variant="contained"
                color="success"
                sx={{
                  px: 2,
                }}
                disableElevation
                disabled={
                  JSON.stringify(currentUser) === JSON.stringify(user)
                    ? true
                    : false
                }
                onClick={handleSave}
              >
                <SaveIcon />
                &nbsp; Save Changes
              </Button>
            )}
            {disabled && (
              <Button
                variant="outlined"
                sx={{
                  px: 2,
                }}
                onClick={handleClick}
              >
                <EditIcon />
                &nbsp; Edit Profile
              </Button>
            )}
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Graduation Project 1 State: <NotStartedBadge />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Graduation Project 2 State: <InProgressBadge />
            </Typography>
          </Grid>
        </Grid>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Saved Changes Successfully!
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default ProfileDetails;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
