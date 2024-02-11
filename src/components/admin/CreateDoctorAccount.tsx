import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { addresses } from "../../constants/addresses";
import { departments } from "../../constants/departments";
import letsgraduateLogo from "/src/assets/letsgraduate-logo-with-text.png";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

interface NewUserAccount {
  userId: number | "";
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  address: string;
  mobileNumber: string;
  password: string;
  type: string;
}

const oldUser: NewUserAccount = {
  userId: "",
  firstName: "",
  lastName: "",
  email: "",
  department: "",
  address: "",
  mobileNumber: "",
  password: "",
  type: "doctor",
};

export default function CreateDoctorAccount() {
  const [newUser, setNewUser] = React.useState(oldUser);
  const [showIdExists, setShowIdExists] = React.useState(false);
  const [saved, setSaved] = React.useState(true);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const requestBody = {
    //   ...newUser,
    //   userId: newUser.userId.toString(),
    // };
    // const responseMessage = await createNewUserAccount(requestBody);
    // if (
    //   responseMessage === "This user exisit before please try another userId"
    // ) {
    //   setShowIdExists(true);
    //   setSaved(false);
    // } else if (responseMessage === "New user created successfully") {
    // }
    setSaved(true);
    setShowIdExists(false);
    setNewUser(oldUser);
    setOpenSnackbar(true);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        xs={10}
        sm={9}
        md={8}
        lg={8}
        sx={{
          height: "100vh",
          width: "100vw",
          marginX: "auto",
          marginTop: "5vh",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={false}
          md={false}
          lg={6}
          sx={{
            backgroundImage: "url(/src/assets/nnu-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ImageListItem sx={{ width: "15rem", mb: 2 }}>
              <img
                srcSet={`${letsgraduateLogo}`}
                src={`${letsgraduateLogo}`}
                alt={"NNU-Logo"}
                loading="lazy"
              />
            </ImageListItem>
            <Typography component="h1" variant="h5">
              Create New Doctor Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoFocus
                    value={newUser.firstName}
                    onChange={(event) =>
                      setNewUser({
                        ...newUser,
                        firstName: event.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={(event) =>
                      setNewUser({
                        ...newUser,
                        lastName: event.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="studentId"
                label="University Number"
                name="studentId"
                type="number"
                defaultValue={""}
                value={newUser.userId}
                onChange={(event) => {
                  setNewUser({
                    ...newUser,
                    userId: Number(event.target.value),
                  });
                  setShowIdExists(false);
                }}
              />
              {showIdExists && (
                <Typography variant="caption" color="red">
                  This university number exists.
                </Typography>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={newUser.email}
                onChange={(event) =>
                  setNewUser({
                    ...newUser,
                    email: event.target.value,
                  })
                }
              />
              <Box sx={{ minWidth: 120, marginY: "1rem" }}>
                <FormControl fullWidth required>
                  <InputLabel id="department-label">Department</InputLabel>
                  <Select
                    labelId="department-label"
                    id="department"
                    value={newUser.department}
                    label="Department"
                    onChange={(event: SelectChangeEvent) =>
                      setNewUser({
                        ...newUser,
                        department: event.target.value,
                      })
                    }
                  >
                    {departments.map((department, index) => (
                      <MenuItem key={index} value={department}>
                        {department}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box sx={{ minWidth: 120, marginY: "1rem" }}>
                    <FormControl fullWidth required>
                      <InputLabel id="address-label">Address</InputLabel>
                      <Select
                        labelId="address-label"
                        id="address"
                        value={newUser.address}
                        label="Address"
                        onChange={(event: SelectChangeEvent) =>
                          setNewUser({
                            ...newUser,
                            address: event.target.value,
                          })
                        }
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
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                value={newUser.mobileNumber}
                onChange={(event) =>
                  setNewUser({
                    ...newUser,
                    mobileNumber: event.target.value,
                  })
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                value={newUser.password}
                onChange={(event) =>
                  setNewUser({
                    ...newUser,
                    password: event.target.value,
                  })
                }
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={
                  JSON.stringify(newUser) === JSON.stringify(oldUser) ||
                  newUser.firstName.replace(/\s/g, "") === "0" ||
                  newUser.lastName.replace(/\s/g, "") === "0" ||
                  newUser.userId.toString().replace(/\s/g, "") === "0" ||
                  newUser.email.replace(/\s/g, "") === "0" ||
                  newUser.department.replace(/\s/g, "") === "0" ||
                  newUser.address.replace(/\s/g, "") === "0" ||
                  newUser.mobileNumber.replace(/\s/g, "") === "0" ||
                  newUser.password.replace(/\s/g, "") === "0"
                }
              >
                Create Account
              </Button>
            </Box>
          </Box>
        </Grid>
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
          {saved
            ? "New Doctor Account Created Successfully!"
            : "Error creating doctor account!"}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
