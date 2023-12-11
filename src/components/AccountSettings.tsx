import DarkModeIcon from "@mui/icons-material/DarkMode";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import useAuth from "../hooks/useAuth";
import useThemeStore from "../state-management/themeStore";
import ChangePasswordDialog from "./ChangePasswordDialog";
import DeleteAccountDialog from "./DeleteAccountDialog";

const AccountSettings = () => {
  const mode = useThemeStore((s) => s.mode);
  const setMode = useThemeStore((s) => s.setMode);

  const { user } = useAuth();

  const [openChangePasswordDialog, setOpenChangePasswordDialog] =
    React.useState(false);
  const [openDeleteAccountDialog, setOpenDeleteAccountDialog] =
    React.useState(false);

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
                    onClick={() => setOpenChangePasswordDialog(true)}
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
              onClick={() => setOpenChangePasswordDialog(true)}
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
            <Button
              color="error"
              variant="outlined"
              endIcon={<DeleteIcon />}
              onClick={() => setOpenDeleteAccountDialog(true)}
            >
              Delete Account
            </Button>
          </Grid>
        </Grid>
        <ChangePasswordDialog
          openChangePasswordDialog={openChangePasswordDialog}
          setOpenChangePasswordDialog={setOpenChangePasswordDialog}
        />
        <DeleteAccountDialog
          openDeleteAccountDialog={openDeleteAccountDialog}
          setOpenDeleteAccountDialog={setOpenDeleteAccountDialog}
        />
      </Paper>
    </Container>
  );
};

export default AccountSettings;
