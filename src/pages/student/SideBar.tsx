import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

export const SideBar = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <QuestionAnswerIcon />
      </ListItemIcon>
      <ListItemText
        sx={{ ml: "-20px" }}
        primary="Prerequisites"
        secondary="Graduation Project 1"
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QuestionAnswerIcon />
      </ListItemIcon>
      <ListItemText
        sx={{ ml: "-20px" }}
        primary="Prerequisites"
        secondary="Graduation Project 2"
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ConnectWithoutContactIcon />
      </ListItemIcon>
      <ListItemText sx={{ ml: "-20px" }} primary="Connect to a Group" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GroupWorkIcon />
      </ListItemIcon>
      <ListItemText
        sx={{ ml: "-20px" }}
        primary="My Project"
        secondary="Informations & Details"
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SupervisedUserCircleIcon />
      </ListItemIcon>
      <ListItemText sx={{ ml: "-20px" }} primary="Register to a Supervisor" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PictureAsPdfIcon />
      </ListItemIcon>
      <ListItemText sx={{ ml: "-20px" }} primary="Submissions" />
    </ListItemButton>
  </React.Fragment>
);
