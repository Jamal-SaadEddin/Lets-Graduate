import { Link as MuiLink } from "@mui/material";
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
import { Link } from "react-router-dom";
import { addresses } from "../../constants/addresses";
import { departments } from "../../constants/departments";
import letsgraduateLogo from "/src/assets/letsgraduate-logo-with-text.png";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/"> */}
      LetsGraduate
      {/* </Link>{" "} */}
      {" " + new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CreateStudentAccount() {
  const [department, setDepartment] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("userId"),
      password: data.get("password"),
    });
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
          height: "80vh",
          width: "100vw",
          marginX: "auto",
          marginY: "3vh",
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
              Create Student Account
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
              />
              <Box sx={{ minWidth: 120, marginY: "1rem" }}>
                <FormControl fullWidth required>
                  <InputLabel id="department-label">Department</InputLabel>
                  <Select
                    labelId="department-label"
                    id="department"
                    value={department}
                    label="Department"
                    onChange={(event: SelectChangeEvent) =>
                      setDepartment(event.target.value as string)
                    }
                  >
                    {departments.map((department, index) => (
                      <MenuItem key={index} value={department.name}>
                        {department.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ minWidth: 120, marginY: "1rem" }}>
                    <FormControl fullWidth required>
                      <InputLabel id="address-label">Address</InputLabel>
                      <Select
                        labelId="address-label"
                        id="address"
                        value={address}
                        label="Address"
                        onChange={(event: SelectChangeEvent) =>
                          setAddress(event.target.value as string)
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="village"
                    label="Village (optional)"
                    name="village"
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Account
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/login">
                    <MuiLink variant="body2">
                      Already have an account? Sign In
                    </MuiLink>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
