import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { SideBarButton } from "../../constants/sideBarButtons";

interface Props {
  children: SideBarButton[];
}

const SideBar = ({ children }: Props) => {
  return (
    <React.Fragment>
      {children.map((item) => (
        <ListItemButton>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            sx={{ ml: "-20px" }}
            primary={item.primaryText}
            secondary={item?.secondaryText}
          />
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};

export default SideBar;
