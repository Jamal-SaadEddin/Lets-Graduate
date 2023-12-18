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
import useAuth from "../hooks/useAuth";

export interface SideBarButton {
  icon: ReactNode;
  primaryText: string;
  secondaryText?: string;
  link: string;
}

const { user } = useAuth();

const sideBarButtons: SideBarButton[] =
  user.type === "student"
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
          icon: <GroupWorkIcon />,
          primaryText: "My Project",
          secondaryText: "Informations & Details",
          link: "my-project",
        },
        {
          icon: <SupervisedUserCircleIcon />,
          primaryText: "Register to a Supervisor",
          link: "available-supervisors",
        },
        {
          icon: <PictureAsPdfIcon />,
          primaryText: "Submissions",
          link: "submissions",
        },
      ]
    : user.type === "doctor"
    ? [
        {
          icon: <DashboardIcon />,
          primaryText: "Dashboard",
          link: "/",
        },
        {
          icon: <Groups2Icon />,
          primaryText: "My Projects",
          secondaryText: "Groups under my supervision",
          link: "supervised-projects",
        },
        {
          icon: <PictureAsPdfIcon />,
          primaryText: "Submissions",
          link: "submissions",
        },
        {
          icon: <MergeIcon />,
          primaryText: "Merge Groups",
          link: "merge-groups",
        },
        {
          icon: <GradingIcon />,
          primaryText: "Grading",
          secondaryText: "Evaluate your students",
          link: "grading",
        },
      ]
    : [];

export default sideBarButtons;
