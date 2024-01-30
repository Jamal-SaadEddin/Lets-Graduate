import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { SupervisedProjectsProjectItem } from "../../constants/availableGroups";
import { DoctorInfo } from "../../hooks/useAuth";
import useMyGroupsStore from "../../state-management/Doctor/myGroupsStore";
import useViewedSubmissionStore from "../../state-management/viewedSubmissionStore";
import CollapsibleTable from "./common/CollapsibleTable";
import useUserStore from "../../state-management/userStore";

export default function Abstracts() {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  const userInfo = fetchedUser?.info as DoctorInfo;

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const myGroups = useMyGroupsStore((s) => s.myGroups);
  const myEvaluatingGroups = useMyGroupsStore((s) => s.myEvaluatingGroups);
  const submissions = useViewedSubmissionStore((s) => s.submissions);
  const currentTab = useViewedSubmissionStore((s) => s.currentTab);
  const setCurrentTab = useViewedSubmissionStore((s) => s.setCurrentTab);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Groups" {...a11yProps(0)} />
          {userInfo.isProjectsCommitteeMember && (
            <Tab label="Projects Committee" {...a11yProps(1)} />
          )}
        </Tabs>
      </Box>
      <CustomTabPanel value={currentTab} index={0}>
        <CollapsibleTable
          projects={myGroups as SupervisedProjectsProjectItem[]}
          submissions={submissions.filter((s) => s.operation === "viewing")}
        />
      </CustomTabPanel>
      {userInfo.isProjectsCommitteeMember && (
        <CustomTabPanel value={currentTab} index={1}>
          <CollapsibleTable
            projects={myEvaluatingGroups as SupervisedProjectsProjectItem[]}
            submissions={submissions.filter(
              (s) => s.operation === "evaluating"
            )}
          />
        </CustomTabPanel>
      )}
    </Box>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
