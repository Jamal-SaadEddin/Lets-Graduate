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
import {
  getAbstractSubmission,
  getMyEvaluatingGroups,
  getSupervisorSubmissions,
} from "../../hooks/useSubmissions";
import { getMyGroups } from "../../hooks/useMyGroups";
import { getDepartmentSettings } from "../../hooks/useDepartmentSettings";
import { getAvailableMergeGroups } from "../../hooks/useMergeGroups";
import useUserStore from "../../state-management/userStore";
import { StudentInfo } from "../../hooks/useAuth";

interface Props {
  children: SideBarButton[];
  subHeader?: string | false;
}

const SideBar = ({ children, subHeader = false }: Props) => {
  const navigate = useNavigate();
  const user = useUserStore((s) => s.fetchedUser);
  const studentInfo = user?.info as StudentInfo;

  const handleClick = async (item: SideBarButton) => {
    if (item.link.includes("prerequisites/gp")) {
      const projectType = item.link === "prerequisites/gp/1" ? "gp1" : "gp2";
      await getPrerequisites(user?.department as string, projectType);
    } else if (item.link.includes("my-project")) {
      await getMyPartners(user?.id as number);
      await getMySupervisors(user?.id as number);
      await getMyProjectInfo(user?.id as number);
    } else if (item.link.includes("available-groups")) {
      await getAvailableGroups(
        user?.department as string,
        studentInfo.projectOneState === "in progress" ? "gp1" : "gp2",
        user?.id as number
      );
    } else if (item.link.includes("available-supervisors")) {
      await getAvailableSupervisors(user?.id as number);
    } else if (item.link.includes("submissions") && user?.type === "student") {
      await getAbstractSubmission(user?.id as number);
    } else if (
      item.link.includes("supervised-projects") ||
      item.link.includes("grading")
    ) {
      await getMyGroups(user?.id as number);
    } else if (item.link.includes("merge-groups")) {
      await getAvailableMergeGroups();
      await getMyGroups(user?.id as number);
    } else if (item.link.includes("submissions") && user?.type === "doctor") {
      await getSupervisorSubmissions(user?.id as number);
      await getMyGroups(user?.id as number);
      await getMyEvaluatingGroups(user?.id as number);
    } else if (item.link.includes("department-settings")) {
      await getDepartmentSettings(user?.id as number);
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
