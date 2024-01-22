import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { SideBarButton } from "../../constants/sideBarButtons";
import {
  getMyPartners,
  getMyProjectInfo,
  getMySupervisors,
} from "../../hooks/useMyProject";
import { getPrerequisites } from "../../hooks/usePrerequisites";
import { getAvailableGroups } from "../../hooks/useAvailableGroups";
import { getAvailableSupervisors } from "../../hooks/useAvailableSupervisors";
import { getAbstractSubmission } from "../../hooks/useSubmissions";

interface Props {
  children: SideBarButton[];
  subHeader?: string | false;
}

const SideBar = ({ children, subHeader = false }: Props) => {
  const navigate = useNavigate();

  const handleClick = async (item: SideBarButton) => {
    if (item.link.includes("prerequisites/gp")) {
      const projectType = item.link === "prerequisites/gp/1" ? "gp1" : "gp2";
      await getPrerequisites("Computer Engineering", projectType);
    } else if (item.link.includes("my-project")) {
      await getMyPartners(11923604);
      await getMySupervisors(11923604);
      await getMyProjectInfo(11923604);
    } else if (item.link.includes("available-groups")) {
      await getAvailableGroups("Computer Engineering", "gp1");
    } else if (item.link.includes("available-supervisors")) {
      await getAvailableSupervisors(11925044);
    } else if (item.link.includes("submissions")) {
      await getAbstractSubmission(11923604);
    }

    navigate(item.link);
  };

  return (
    <React.Fragment>
      {subHeader && (
        <ListSubheader component="div" inset>
          {subHeader}
        </ListSubheader>
      )}
      {children.map((item, index) => (
        <ListItemButton onClick={() => handleClick(item)} key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            primary={item.primaryText}
            secondary={item?.secondaryText}
          />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};

export default SideBar;
