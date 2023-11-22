import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { SideBar } from "./SideBar";
import {
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Container,
  Grid,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";
import Button from "@mui/material/Button";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(6.5),
      },
    }),
  },
}));

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
const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function StudentDashboard() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="primary"
          open={open}
          enableColorOnDark
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Let's Graduate
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box sx={{ flexGrow: 0, mx: "1rem" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Jamal SaadEddin" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{SideBar}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Grid container spacing={3} columns={1}>
                    <Grid item xs={12}>
                      <Typography variant="h4">
                        Welcome {" " || "back,"} {"Jamal"}!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    my: 4,
                  }}
                >
                  <Grid container spacing={3} columns={1}>
                    <Grid item xs={12}>
                      <Typography variant="h4">Quick Overview</Typography>
                    </Grid>
                    {/* Changable area based on student state  */}
                    {
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">
                          What graduation project do you intend to register?
                          <Link to="prerequisites-gp1">
                            <Button variant="contained" sx={{ mx: 2 }}>
                              Graduation Project 1
                            </Button>
                          </Link>
                          <Link to="prerequisites-gp2">
                            <Button variant="contained" sx={{ mx: 2 }}>
                              Graduation Project 2
                            </Button>
                          </Link>
                        </Typography>
                      </Grid>
                    }
                    {/* Changable area based on student state  */}
                    {
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">
                          Join a group of students and start developing your
                          project with each others!
                          <Link to="available-groups">
                            <Button variant="contained" sx={{ mx: 2 }}>
                              Show Available Groups
                            </Button>
                          </Link>
                        </Typography>
                      </Grid>
                    }
                    {/* Changable area based on student state  */}
                    {
                      <Grid item xs={12}>
                        <Typography variant="subtitle1">
                          Supervisors Section is Available now! Hurry up and
                          book with your favorite supervisor
                          <Link to="available-supervisors">
                            <Button variant="contained" sx={{ mx: 2 }}>
                              Show Supervisors
                            </Button>
                          </Link>
                        </Typography>
                      </Grid>
                    }
                    <Grid item xs={12}>
                      <MuiLink
                        href="https://eng.najah.edu/ar/study/graduation-projects"
                        target="_blank"
                      >
                        Link to Graduation Projects from previous semesters that
                        you might benifit from..
                      </MuiLink>
                    </Grid>
                  </Grid>
                </Paper>
                {/* Changable area based on student state  */}
                {
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      my: 4,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h4">Project Overview</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          Project Title: {"Mohito Maker Machine"}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          Project Members: {5}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          Project Supervisor:{" "}
                          {"Dr. Manar Qamhie" || "Not chosen yet"}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          Project Type: Graduation Project {1 || 2}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Link to="my-project">
                          <Button variant="outlined" color="warning">
                            Show More Details
                          </Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </Paper>
                }
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    my: 4,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4">Profile Overview</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", alignItems: "center" }}
                      gap={2}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src=""
                        sx={{ width: 80, height: 80 }}
                      />
                      <Typography variant="h6">{"Jamal SaadEddin"}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">
                        Registeration Number: {11923604}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">
                        Department: {"Computer Engineering - هندسة الحاسوب"}
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="subtitle1">
                        Address: {"Nablus"}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle1">
                        Mobile Phone: {"0599098598"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Copyright sx={{ py: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
