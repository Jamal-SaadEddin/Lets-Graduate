import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  projectsCommittteeProjects,
  supervisorProjects,
} from "../../constants/supervisedProjects";
import {
  projectsCommitteeSubmissions,
  supervisorSubmissions,
} from "../../constants/supervisorSubmissions";
import useAuth, { DoctorInfo } from "../../hooks/useAuth";
import CollapsibleTable from "./common/CollapsibleTable";

export default function Abstracts() {
  const { user } = useAuth();
  const userInfo = user.info as DoctorInfo;
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Groups" {...a11yProps(0)} />
          {userInfo.isProjectsCommitteeMember && (
            <Tab label="Projects Committee" {...a11yProps(1)} />
          )}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CollapsibleTable
          projects={supervisorProjects}
          submissions={supervisorSubmissions}
        />
      </CustomTabPanel>
      {userInfo.isProjectsCommitteeMember && (
        <CustomTabPanel value={value} index={1}>
          <CollapsibleTable
            projects={projectsCommittteeProjects}
            submissions={projectsCommitteeSubmissions}
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