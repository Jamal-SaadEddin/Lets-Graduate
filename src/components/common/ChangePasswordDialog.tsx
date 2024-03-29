import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Link as MuiLink,
  Snackbar,
  TextField,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  openChangePasswordDialog: boolean;
  setOpenChangePasswordDialog: (openChangePasswordDialog: boolean) => void;
}

export default function ChangePasswordDialog({
  openChangePasswordDialog,
  setOpenChangePasswordDialog,
}: Props) {
  const [saved, setSaved] = React.useState(false);

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

  const handleUpdatePassword = async () => {
    // const requestBody = {
    //   userId: user?.id as number,
    //   oldPassword: oldPassword,
    //   newPassword: firstPassword,
    // };
    // const isSaved = await updatePassword(requestBody);
    // if (isSaved) setSaved(true);
    // else setSaved(false);
    setSaved(true);
    setOpenChangePasswordDialog(false);
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
      <Dialog
        open={openChangePasswordDialog}
        onClose={() => setOpenChangePasswordDialog(false)}
        fullWidth
      >
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
          severity={saved ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {saved
            ? "Updated Password Successfully!"
            : "Error Updating Password!"}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
