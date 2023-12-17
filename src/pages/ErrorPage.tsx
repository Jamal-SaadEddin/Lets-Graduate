import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
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
  const error = useRouteError();

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
              Error
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Typography variant="h1" gutterBottom>
                Oops
              </Typography>
              <Typography variant="h5" gutterBottom>
                {isRouteErrorResponse(error)
                  ? "This page does not exist."
                  : "An unexpected error occurred."}
              </Typography>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
