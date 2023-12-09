import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import useAuth from "../hooks/useAuth";

const AccountSettings = () => {
  const { user } = useAuth();

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
              Account Settings
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email Address"
              value={user.email}
              disabled
              sx={{
                "& .Mui-disabled": {
                  color: "black",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={user.password}
              disabled
              sx={{
                "& .Mui-disabled": {
                  color: "black",
                },
              }}
              InputProps={{
                endAdornment: <FormDialog />,
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AccountSettings;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as MuiLink } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";

export function FormDialog() {
  const { user } = useAuth();

  const [oldPassword, setOldPassword] = React.useState("");
  const [firstPassword, setFirstPassword] = React.useState("");
  const [secondPassword, setSecondPassword] = React.useState("");

  const [showOldPassword, setShowOldPassword] = React.useState(false);

  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);

  const handleMouseDownOldPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [showFirstPassword, setShowFirstPassword] = React.useState(false);

  const handleClickShowFirstPassword = () =>
    setShowFirstPassword((show) => !show);

  const handleMouseDownFirstPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [showSecondPassword, setShowSecondPassword] = React.useState(false);

  const handleClickShowSecondPassword = () =>
    setShowSecondPassword((show) => !show);

  const handleMouseDownSecondPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleUpdatePassword = () => {
    setOpen(false);
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
    <React.Fragment>
      <EditIcon
        fontSize="small"
        sx={{ cursor: "pointer", color: "black" }}
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="oldPassword"
            label="Enter Old Password"
            value={oldPassword}
            onChange={(event) =>
              setOldPassword(event.target.value.replace(/\s/g, ""))
            }
            type={showOldPassword ? "text" : "password"}
            fullWidth
            variant="filled"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowOldPassword}
                  onMouseDown={handleMouseDownOldPassword}
                  edge="end"
                >
                  {showOldPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <TextField
            margin="dense"
            id="firstPassword"
            label="Enter New Password"
            value={firstPassword}
            onChange={(event) =>
              setFirstPassword(event.target.value.replace(/\s/g, ""))
            }
            type={showFirstPassword ? "text" : "password"}
            fullWidth
            variant="filled"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowFirstPassword}
                  onMouseDown={handleMouseDownFirstPassword}
                  edge="end"
                >
                  {showFirstPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
          <TextField
            margin="dense"
            id="secondPassword"
            label="Re-enter New Password"
            value={secondPassword}
            onChange={(event) =>
              setSecondPassword(event.target.value.replace(/\s/g, ""))
            }
            type={showSecondPassword ? "text" : "password"}
            fullWidth
            variant="filled"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowSecondPassword}
                  onMouseDown={handleMouseDownSecondPassword}
                  edge="end"
                >
                  {showSecondPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        </DialogContent>
        <DialogActions
          sx={{ justifyContent: "space-between", paddingBottom: 3, px: 3 }}
        >
          <Link to="/forget-password" style={{ textDecoration: "none" }}>
            <MuiLink variant="body2" underline="none">
              I forgot my password
            </MuiLink>
          </Link>
          <Button
            onClick={handleUpdatePassword}
            variant="contained"
            color="success"
            disabled={
              oldPassword === ""
                ? true
                : firstPassword === ""
                ? true
                : secondPassword === ""
                ? true
                : firstPassword !== secondPassword
                ? true
                : oldPassword !== user.password
                ? true
                : false
            }
          >
            Update Password
          </Button>
        </DialogActions>
      </Dialog>
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
          Updated Password Successfully!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
