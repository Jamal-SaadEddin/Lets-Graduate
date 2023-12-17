import EditIcon from "@mui/icons-material/Edit";
import NotStartedRoundedIcon from "@mui/icons-material/NotStartedRounded";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import SaveIcon from "@mui/icons-material/Save";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { addresses } from "../../constants/addresses";
import useAuth, { User } from "../../hooks/useAuth";
import useThemeStore from "../../state-management/themeStore";

interface Props {
  withGPStates: boolean;
}

const ProfileDetails = ({ withGPStates = false }: Props) => {
  const mode = useThemeStore((s) => s.mode);

  const { user } = useAuth();
  const [currentUser, setCurrentUser] = React.useState<User>(user);

  const [address, setAddress] = React.useState(currentUser.address);

  const [disabled, setDisabled] = React.useState(true);

  const handleCancel = (user: User) => {
    setCurrentUser(user);
    setAddress(user.address);
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
    _event?: React.SyntheticEvent | Event,
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
              required={!disabled && true}
              label="First Name"
              value={currentUser.firstName}
              disabled={disabled}
              sx={{
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
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
              required={!disabled && true}
              label="Last Name"
              value={currentUser.lastName}
              disabled={disabled}
              sx={{
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
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
                label="User Id"
                value={currentUser.id}
                disabled
                sx={{
                  "& input.MuiInputBase-input:disabled": {
                    WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                  },
                  "& label.Mui-disabled": {
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
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
                  "& input.MuiInputBase-input:disabled": {
                    WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                  },
                  "& label.Mui-disabled": {
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                  },
                }}
              />
            </Grid>
          )}
          <Grid item xs={3}>
            <Box>
              <FormControl fullWidth required={!disabled && true}>
                <InputLabel
                  id="address-label"
                  sx={{
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                  }}
                >
                  Address
                </InputLabel>
                <Select
                  labelId="address-label"
                  id="address"
                  value={address}
                  label="Address"
                  disabled={disabled}
                  onChange={(event: SelectChangeEvent) => {
                    setAddress(event.target.value as string);
                    setCurrentUser({
                      ...currentUser,
                      address: event.target.value as string,
                    });
                  }}
                  sx={{
                    "#address": {
                      WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                    },
                  }}
                >
                  {addresses.map((address) => (
                    <MenuItem key={address} value={address}>
                      {address}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Village"
              value={currentUser.village}
              disabled={disabled}
              sx={{
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                },
              }}
              onChange={(event) =>
                setCurrentUser({
                  ...currentUser,
                  village: event.target.value as string,
                })
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="Mobile Phone"
              value={currentUser.mobileNumber}
              disabled={disabled}
              sx={{
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
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
                  JSON.stringify(currentUser) === JSON.stringify(user) ||
                  currentUser.firstName.replace(/\s/g, "") === "" ||
                  currentUser.lastName.replace(/\s/g, "") === "" ||
                  currentUser.address.replace(/\s/g, "") === "" ||
                  currentUser.mobileNumber.replace(/\s/g, "") === ""
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
          {withGPStates && (
            <>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  Graduation Project 1 State:{" "}
                  <Chip
                    color="default"
                    icon={<NotStartedRoundedIcon />}
                    size="small"
                    variant="filled"
                    label="Not started"
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  Graduation Project 2 State:{" "}
                  <Chip
                    color="info"
                    icon={<RotateLeftIcon />}
                    size="small"
                    variant="filled"
                    label="In progress"
                    sx={{
                      fontSize: "14px",
                    }}
                  />
                </Typography>
              </Grid>
            </>
          )}
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
