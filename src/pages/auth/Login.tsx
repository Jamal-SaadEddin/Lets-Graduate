import { Link as MuiLink } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import letsgraduateLogo from "/src/assets/letsgraduate-logo-with-text.png";
import nnuBg from "/src/assets/nnu-bg.jpg";
import { useAuth } from "../../hooks/useAuth";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <MuiLink color="inherit" href="https://mui.com/"> */}
      LetsGraduate
      {/* </MuiLink>{" "} */}
      {" " + new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userId = data.get("userId");
    const password = data.get("password");

    const user = await useAuth(Number(userId), String(password));
    if (user) navigate("/");
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
          marginY: "10vh",
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          lg={6.5}
          sx={{
            backgroundImage: `url(${nnuBg})`,
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
          md={6}
          lg={5.5}
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
              Sign in
            </Typography>
            <Typography variant="h6" color="red">
              User Id: 11923604 for Student Login
            </Typography>
            <Typography variant="h6" color="red">
              User Id: 1355 for Doctor Login
            </Typography>
            <Typography variant="h6" color="red">
              User Id: 101 for Admin Login
            </Typography>
            <Typography variant="h6" color="GrayText">
              Password: 123456
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userId"
                label="User ID"
                name="userId"
                autoComplete="userId"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forget-password">
                    <MuiLink variant="body2">Forgot password?</MuiLink>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/sign-up">
                    <MuiLink variant="body2">
                      Don't have an account? Sign Up
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
