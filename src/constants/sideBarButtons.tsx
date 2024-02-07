import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GradingIcon from "@mui/icons-material/Grading";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Groups2Icon from "@mui/icons-material/Groups2";
import MergeIcon from "@mui/icons-material/Merge";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { ReactNode } from "react";
import useUserStore from "../state-management/userStore";

export interface SideBarButton {
  icon: ReactNode;
  primaryText: string;
  secondaryText?: string;
  link: string;
}

export const sideBarButtons = () => {
  const user = useUserStore((s) => s.fetchedUser);
  return user?.type === "student"
    ? [
        {
          icon: <DashboardIcon />,
          primaryText: "Dashboard",
          link: "/",
        },
        {
          icon: <QuestionAnswerIcon />,
          primaryText: "Prerequisites",
          secondaryText: "Graduation Project 1",
          link: "prerequisites/gp/1",
        },
        {
          icon: <QuestionAnswerIcon />,
          primaryText: "Prerequisites",
          secondaryText: "Graduation Project 2",
          link: "prerequisites/gp/2",
        },
        {
          icon: <ConnectWithoutContactIcon />,
          primaryText: "Find a Partner",
          link: "available-groups",
        },
        {
          icon: <SupervisedUserCircleIcon />,
          primaryText: "Register to a Supervisor",
          link: "available-supervisors",
        },
        {
          icon: <GroupWorkIcon />,
          primaryText: "My Project",
          secondaryText: "Information & Details",
          link: "my-project",
        },
        {
          icon: <PictureAsPdfIcon />,
          primaryText: "Submissions",
          link: "submissions",
        },
      ]
    : user?.type === "doctor"
    ? [
        {
          icon: <DashboardIcon />,
          primaryText: "Dashboard",
          link: "/",
        },
        {
          icon: <Groups2Icon />,
          primaryText: "My Groups",
          secondaryText: "Projects under my supervision",
          link: "supervised-projects",
        },
        {
          icon: <MergeIcon />,
          primaryText: "Merge Groups",
          link: "merge-groups",
        },
        {
          icon: <PictureAsPdfIcon />,
          primaryText: "Submissions",
          link: "students-submissions",
        },
        {
          icon: <GradingIcon />,
          primaryText: "Grading",
          secondaryText: "Evaluate your students",
          link: "grading",
        },
      ]
    : [];
};

export default sideBarButtons;

export const departmentManagerSideBarButtons: SideBarButton[] = [
  {
    icon: <QuestionAnswerIcon />,
    primaryText: "Prerequisites",
    secondaryText: "Graduation Project 1",
    link: "department-prerequisites/gp/1",
  },
  {
    icon: <QuestionAnswerIcon />,
    primaryText: "Prerequisites",
    secondaryText: "Graduation Project 2",
    link: "department-prerequisites/gp/2",
  },
  {
    icon: <AdminPanelSettingsIcon />,
    primaryText: "Department",
    secondaryText: "Settings and Info",
    link: "department-settings",
  },
];
