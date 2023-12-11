import DarkModeIcon from "@mui/icons-material/DarkMode";
import EditIcon from "@mui/icons-material/Edit";
import LightModeIcon from "@mui/icons-material/LightMode";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Container,
  Divider,
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
  const mode = useThemeStore((s) => s.mode);
  const setMode = useThemeStore((s) => s.setMode);

  const { user } = useAuth();

  const [open, setOpen] = React.useState(false);

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
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
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
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                },
              }}
              InputProps={{
                endAdornment: (
                  <EditIcon
                    fontSize="small"
                    sx={{
                      cursor: "pointer",
                      color: mode === "light" ? "black" : "#fff",
                    }}
                    onClick={() => setOpen(true)}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              endIcon={<EditIcon />}
              onClick={() => setOpen(true)}
            >
              Change Password
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              variant="outlined"
              endIcon={mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            >
              Switch to {mode === "dark" ? "light" : "dark"} mode
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Button color="error" variant="outlined" endIcon={<DeleteIcon />}>
              Delete Account
            </Button>
          </Grid>
        </Grid>
        <FormDialog open={open} setOpen={setOpen} />
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
import useThemeStore from "../state-management/themeStore";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function FormDialog({ open, setOpen }: Props) {
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
