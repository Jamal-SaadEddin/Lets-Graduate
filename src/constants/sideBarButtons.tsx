import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { ReactNode } from "react";

export interface SideBarButton {
  icon: ReactNode;
  primaryText: string;
  secondaryText?: string;
  link: string;
}

const sideBarButtons = [
  {
    icon: <QuestionAnswerIcon />,
    primaryText: "Prerequisites",
    secondaryText: "Graduation Project 1",
    link: "prerequisites-gp1",
  },
  {
    icon: <QuestionAnswerIcon />,
    primaryText: "Prerequisites",
    secondaryText: "Graduation Project 2",
    link: "prerequisites-gp2",
  },
  {
    icon: <ConnectWithoutContactIcon />,
    primaryText: "Connect to a Group",
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
];

export default sideBarButtons;
