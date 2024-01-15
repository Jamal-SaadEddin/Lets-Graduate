import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { SideBarButton } from "../../constants/sideBarButtons";

interface Props {
  children: SideBarButton[];
  subHeader?: string | false;
}

const SideBar = ({ children, subHeader = false }: Props) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      {subHeader && (
        <ListSubheader component="div" inset>
          {subHeader}
        </ListSubheader>
      )}
      {children.map((item, index) => (
        <ListItemButton onClick={() => navigate(item.link)} key={index}>
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
