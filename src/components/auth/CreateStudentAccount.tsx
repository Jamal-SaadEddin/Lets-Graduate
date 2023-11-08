import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
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
  const [department, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
                <FormControl fullWidth>
                  <InputLabel id="department">Department</InputLabel>
                  <Select
                    labelId="department"
                    id="department"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                  >
                    <MenuItem value="Computer Engineering">
                      Computer Engineering - هندسة الحاسوب
                    </MenuItem>
                    <MenuItem value="Industrial Engineering">
                      Industrial Engineering - الهندسة الصناعية
                    </MenuItem>
                    <MenuItem value="Electrical Engineering">
                      Electrical Engineering - الهندسة الكهربائية
                    </MenuItem>
                    <MenuItem value="Chemical Engineering">
                      Chemical Engineering - الهندسة الكيميائية
                    </MenuItem>
                    <MenuItem value="Civil Engineering">
                      Civil Engineering - الهندسة المدنية
                    </MenuItem>
                    <MenuItem value="Architecture Engineering">
                      Architecture Engineering - الهندسة المعمارية
                    </MenuItem>
                    <MenuItem value="Mechanical Engineering">
                      Mechanical Engineering - الهندسة الميكانيكية
                    </MenuItem>
                    <MenuItem value="Communications Engineering">
                      Communications Engineering - هندسة الاتصالات
                    </MenuItem>
                    <MenuItem value="Construction Engineering">
                      Construction Engineering - هندسة البناء
                    </MenuItem>
                    <MenuItem value="Planning Engineering and city technology">
                      Planning Engineering and city technology - هندسة التخطيط
                      وتكنولوجيا المدن
                    </MenuItem>
                    <MenuItem value="Geomatics Engineering">
                      Geomatics Engineering - هندسة الجيومتكس
                    </MenuItem>
                    <MenuItem value="Energy and environmental Engineering">
                      Energy and environmental Engineering - هندسة الطاقة
                      والبيئة
                    </MenuItem>
                    <MenuItem value="Mechatronics Engineering">
                      Mechatronics Engineering - هندسة الميكاترونكس
                    </MenuItem>
                    <MenuItem value="Materials science Engineering">
                      Materials science Engineering - هندسة علوم المواد
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address - City/Village"
                name="address"
              />
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
                  <Link href="#" variant="body2">
                    {"Already have an account? Sign In"}
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
