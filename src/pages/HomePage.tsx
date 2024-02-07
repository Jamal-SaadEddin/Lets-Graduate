import CssBaseline from "@mui/material/CssBaseline";
import { Dashboard, Logout } from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  createTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Copyright from "../components/common/Copyright";
import { AppBar, Drawer } from "../components/common/DashboardLayout";
import NotificationsPopover from "../components/common/NotificationsPopover";
import SideBar from "../components/common/SideBar";
import sideBarButtons, {
  departmentManagerSideBarButtons,
} from "../constants/sideBarButtons";
import { DoctorInfo, StudentInfo } from "../hooks/useAuth";
import { getAvailableGroups } from "../hooks/useAvailableGroups";
import { getAvailableSupervisors } from "../hooks/useAvailableSupervisors";
import { getDepartmentSettings } from "../hooks/useDepartmentSettings";
import { getAvailableMergeGroups } from "../hooks/useMergeGroups";
import { getMyGroups } from "../hooks/useMyGroups";
import {
  getMyPartners,
  getMyProjectInfo,
  getMySupervisors,
} from "../hooks/useMyProject";
import { getNotifications } from "../hooks/useNotifications";
import {
  getAbstractSubmission,
  getMyEvaluatingGroups,
  getSupervisorSubmissions,
} from "../hooks/useSubmissions";
import useThemeStore from "../state-management/themeStore";
import useUserStore from "../state-management/userStore";
import {
  getDoctorProfileInfo,
  getStudentProfileInfo,
} from "../hooks/useMyProfile";

export default function HomePage() {
  const user = useUserStore((s) => s.fetchedUser);
  const setCurrentUser = useUserStore((s) => s.setCurrentUser);
  const studentInfo = user?.info as StudentInfo;
  const doctorInfo = user?.info as DoctorInfo;
  const mode = useThemeStore((s) => s.mode);
  const setMode = useThemeStore((s) => s.setMode);

  const handleUserSite = async () => {
    await getNotifications(user?.id as number);

    if (user?.type === "student") {
      switch (user.currentPeriod) {
        case "create-partnerships":
          if (!studentInfo.isWithGroup)
            await getAvailableGroups(
              user?.department as string,
              studentInfo.projectOneState === "in progress" ? "gp1" : "gp2",
              user?.id as number
            );
          await getMyPartners(user?.id as number);
          await getMyProjectInfo(user?.id as number);
          break;
        case "registration-to-supervisors":
          await getAvailableSupervisors(user?.id as number);
          await getMyPartners(user?.id as number);
          await getMySupervisors(user?.id as number);
          await getMyProjectInfo(user?.id as number);
          break;
        case "abstract-submission":
          await getAbstractSubmission(user?.id as number);
          await getMyPartners(user?.id as number);
          await getMySupervisors(user?.id as number);
          await getMyProjectInfo(user?.id as number);
          break;

        default:
          break;
      }
      const fetchedStudent = await getStudentProfileInfo(user?.id as number);
      setCurrentUser(fetchedStudent);
    } else if (user?.type === "doctor") {
      switch (user.currentPeriod) {
        case "registration-to-supervisors":
          await getAvailableMergeGroups(user?.id as number);
          await getMyGroups(user?.id as number);
          break;
        case "abstract-submission":
          await getSupervisorSubmissions(user?.id as number);
          await getMyGroups(user?.id as number);
          if (doctorInfo.isProjectsCommitteeMember)
            await getMyEvaluatingGroups(user?.id as number);
          break;
        case "evaluating-students":
          await getMyGroups(user?.id as number);
          break;

        default:
          break;
      }
      if (doctorInfo.isDepartmentManager)
        await getDepartmentSettings(user?.id as number);
      const fetchedDoctor = await getDoctorProfileInfo(user?.id as number);
      setCurrentUser(fetchedDoctor);
    }
  };

  useEffect(() => {
    // Code here will run just like componentDidMount
    handleUserSite();
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
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
      }),
    [mode]
  );

  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" />;

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const openMenu = Boolean(anchorElUser);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (link?: string) => {
    setAnchorElUser(null);
    if (link) navigate(link);
  };

  const defaultDrawerOpen = window.innerWidth >= 600 ? true : false;
  const [openDrawer, setOpenDrawer] = React.useState(defaultDrawerOpen);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="primary"
          open={openDrawer}
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
                ...(openDrawer && { display: "none" }),
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
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <NotificationsPopover />
            <Box sx={{ flexGrow: 0, mx: "1rem" }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  aria-controls={openMenu ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                >
                  <Avatar alt="Jamal SaadEddin" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                id="account-menu"
                open={openMenu}
                onClose={() => handleCloseUserMenu()}
                onClick={() => handleCloseUserMenu()}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={() => handleCloseUserMenu("my-profile")}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  My Profile
                </MenuItem>
                <MenuItem onClick={() => handleCloseUserMenu("/")}>
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  Dashboard
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => handleCloseUserMenu("account-settings")}
                >
                  <ListItemIcon>
                    <ManageAccountsIcon />
                  </ListItemIcon>
                  Edit Account
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu("/login");
                    window.location.reload();
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={openDrawer}>
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
          <List component="nav">
            <SideBar children={sideBarButtons()} />
            {doctorInfo.isDepartmentManager && <Divider sx={{ my: 1 }} />}
            {doctorInfo.isDepartmentManager && (
              <SideBar
                children={departmentManagerSideBarButtons}
                subHeader="Department Management"
              />
            )}
          </List>
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
          <Outlet />
          <Copyright sx={{ py: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
