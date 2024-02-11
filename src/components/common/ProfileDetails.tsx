import EditIcon from "@mui/icons-material/Edit";
import NotStartedRoundedIcon from "@mui/icons-material/NotStartedRounded";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import SaveIcon from "@mui/icons-material/Save";
import VerifiedIcon from "@mui/icons-material/Verified";
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
import React, { useState } from "react";
import { addresses } from "../../constants/addresses";
import { DoctorInfo, StudentInfo } from "../../constants/myProfile";
import useThemeStore from "../../state-management/themeStore";
import useUserStore from "../../state-management/userStore";

const ProfileDetails = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  const withGPStates = fetchedUser?.type === "student";
  const { currentUser, setCurrentUser } = useUserStore();
  const currentStudentUser = currentUser as StudentInfo;
  const user: StudentInfo | DoctorInfo | undefined = {
    fullName: fetchedUser?.firstName + " " + fetchedUser?.lastName,
    id: fetchedUser?.id as number,
    firstName: fetchedUser?.firstName as string,
    lastName: fetchedUser?.lastName as string,
    email: fetchedUser?.email as string,
    department: fetchedUser?.department as string,
    address: fetchedUser?.address as string,
    mobileNumber: fetchedUser?.mobileNumber as string,
    gp1State: currentStudentUser.gp1State,
    gp2State: currentStudentUser.gp2State,
    projectType: currentStudentUser.projectType,
    isWithGroup: currentStudentUser.isWithGroup,
  };

  const [saved, setSaved] = useState(false);

  const mode = useThemeStore((s) => s.mode);

  const [address, setAddress] = React.useState(currentUser?.address);

  const [disabled, setDisabled] = React.useState(true);

  const handleCancel = () => {
    setCurrentUser(user);
    setAddress(user?.address);
    setDisabled(!disabled);
  };

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const handleSave = async () => {
    // Save Changes to Backend
    if (withGPStates) {
      // const requestBody = {
      //   studentId: currentUser?.id,
      //   firstName: currentUser?.firstName,
      //   lastName: currentUser?.lastName,
      //   address: currentUser?.address,
      //   mobileNumber: currentUser?.mobileNumber,
      // };
      const isSaved = true;
      //await updateStudentProfileInfo(requestBody);
      if (isSaved) setSaved(true);
      else setSaved(false);
    } else {
      // const requestBody = {
      //   doctorId: currentUser?.id,
      //   firstName: currentUser?.firstName,
      //   lastName: currentUser?.lastName,
      //   address: currentUser?.address,
      //   mobileNumber: currentUser?.mobileNumber,
      // };
      const isSaved = true;
      //await updateDoctorProfileInfo(requestBody);
      if (isSaved) setSaved(true);
      else setSaved(false);
    }

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
              alt={currentUser?.fullName}
              src=""
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h6">
              {fetchedUser?.firstName} {fetchedUser?.lastName}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="First Name"
              value={currentUser?.firstName}
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
                  ...currentUser!,
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
              value={currentUser?.lastName}
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
                  ...currentUser!,
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
                value={currentUser?.id}
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
                value={currentUser?.department}
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
          <Grid item xs={6}>
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
                      ...currentUser!,
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

          <Grid item xs={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="Mobile Phone"
              value={currentUser?.mobileNumber}
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
                  ...currentUser!,
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
                onClick={handleCancel}
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
                  currentUser?.firstName.replace(/\s/g, "") === "" ||
                  currentUser?.lastName.replace(/\s/g, "") === "" ||
                  currentUser?.address.replace(/\s/g, "") === "" ||
                  currentUser?.mobileNumber.replace(/\s/g, "") === ""
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
                    color={
                      currentStudentUser?.gp1State === "not started"
                        ? "default"
                        : currentStudentUser?.gp1State === "in progress"
                        ? "info"
                        : "success"
                    }
                    icon={
                      currentStudentUser?.gp1State === "not started" ? (
                        <NotStartedRoundedIcon />
                      ) : currentStudentUser?.gp1State === "in progress" ? (
                        <RotateLeftIcon />
                      ) : (
                        <VerifiedIcon />
                      )
                    }
                    size="small"
                    variant="filled"
                    label={
                      currentStudentUser?.gp1State === "not started"
                        ? "Not started"
                        : currentStudentUser?.gp1State === "in progress"
                        ? "In progress"
                        : "Done"
                    }
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
                    color={
                      currentStudentUser?.gp2State === "not started"
                        ? "default"
                        : currentStudentUser?.gp2State === "in progress"
                        ? "info"
                        : "success"
                    }
                    icon={
                      currentStudentUser?.gp2State === "not started" ? (
                        <NotStartedRoundedIcon />
                      ) : currentStudentUser?.gp2State === "in progress" ? (
                        <RotateLeftIcon />
                      ) : (
                        <VerifiedIcon />
                      )
                    }
                    size="small"
                    variant="filled"
                    label={
                      currentStudentUser?.gp2State === "not started"
                        ? "Not started"
                        : currentStudentUser?.gp2State === "in progress"
                        ? "In progress"
                        : "Done"
                    }
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
            severity={saved ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {saved ? "Saved Changes Successfully!" : "Error Saving Changes!"}
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
