import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { SideBarButton } from "../../constants/sideBarButtons";
import { getPrerequisites } from "../../hooks/usePrerequisites";
import useUserStore from "../../state-management/userStore";

interface Props {
  children: SideBarButton[];
  subHeader?: string | false;
}

const SideBar = ({ children, subHeader = false }: Props) => {
  const navigate = useNavigate();
  const user = useUserStore((s) => s.fetchedUser);

  const handleClick = async (item: SideBarButton) => {
    if (item.link.includes("prerequisites/gp")) {
      const projectType = item.link === "prerequisites/gp/1" ? "gp1" : "gp2";
      await getPrerequisites(user?.department as string, projectType);
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
