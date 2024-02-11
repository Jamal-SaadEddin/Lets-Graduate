import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  openMergeDialog: boolean;
  setOpenMergeDialog: (openMergeDialog: boolean) => void;
  requestedGroup: AvailableGroupsProjectItem;
}

const MergeGroupsProcessDialog = ({
  openMergeDialog,
  setOpenMergeDialog,
  requestedGroup,
}: Props) => {
  const handleCloseMergeDialog = () => {
    setOpenMergeDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openMergeDialog}
        onClose={handleCloseMergeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <MergeProcessTabs
            requestedGroup={requestedGroup}
            setOpenMergeDialog={setOpenMergeDialog}
          />
        </DialogTitle>
      </Dialog>
    </React.Fragment>
  );
};

export default MergeGroupsProcessDialog;

import CallMergeIcon from "@mui/icons-material/CallMerge";
import { Button, Grid, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import {
  AvailableGroupsProjectItem,
  AvailableGroupsStudent,
  SupervisedProjectsProjectItem,
} from "../../../constants/availableGroups";
import useMyGroupsStore from "../../../state-management/Doctor/myGroupsStore";
import { Group, GroupDetails, GroupSummary } from "../../common/Group";
import Table from "../../common/Table";
import { sendMergeRequest } from "../../../hooks/useMergeGroups";
import useUserStore from "../../../state-management/userStore";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const headingsMyGroup = [
  "Student Name",
  "Registration Number",
  "Address",
  "Email",
  "Department",
  "Project Type",
];

const headingsRequestedGroup = [
  "Student Name",
  "Academic Number",
  "Address",
  "Email",
  "Department",
  "Project Type",
];

interface MergeProcessTabsProps {
  requestedGroup: AvailableGroupsProjectItem;
  setOpenMergeDialog: (openMergeDialog: boolean) => void;
}

const MergeProcessTabs = ({
  requestedGroup,
  setOpenMergeDialog,
}: MergeProcessTabsProps) => {
  const user = useUserStore((s) => s.fetchedUser);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const myGroups = useMyGroupsStore((s) => s.myGroups);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [selectedGroup, setSelectedGroup] =
    React.useState<SupervisedProjectsProjectItem>({
      id: -1,
      title: "",
      students: [],
    });

  const handleSelectedGroup = (event: SelectChangeEvent) => {
    const group = myGroups.filter((p) => p.id === Number(event.target.value));
    setSelectedGroup(group[0]);
  };

  const [confirmMerge, setConfirmMerge] = React.useState("");

  const handleMergeGroups = async () => {
    const requestBody = {
      reciverId: requestedGroup.doctorId,
      senderId: user?.id as number,
      type: "merge",
      content: `is requesting to merge his/her group (${selectedGroup.id}) with your group (${requestedGroup.id})`,
      senderType: "doctor",
    };
    const isRequested = true;
    //await sendMergeRequest(requestBody);
    if (isRequested) setOpenMergeDialog(false);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          centered
          aria-label="full width tabs example"
        >
          <Tab
            disabled={value < 0 ? true : false}
            label="1- Choose your group"
            {...a11yProps(0)}
          />
          <Tab
            disabled={value < 1 ? true : false}
            label="2- Review groups details"
            {...a11yProps(1)}
          />
          <Tab
            disabled={value < 2 ? true : false}
            label="3- Confirm merge process"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ width: "33.333333%" }}>
            <InputLabel id="demo-simple-select-label">
              Choose your group that you want to merge
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedGroup.id === -1 ? "" : selectedGroup.id.toString()}
              label="Choose your group that you want to merge"
              onChange={handleSelectedGroup}
            >
              {myGroups?.map(({ id, title }) => (
                <MenuItem key={id} value={id}>
                  {title}, ID: {id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Grid width={"33.33333%"} marginTop={2} textAlign="end">
          <Button
            disabled={selectedGroup.id === -1 ? true : false}
            onClick={() => setValue(1)}
          >
            Next
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" marginBottom={1}>
              Your Group
            </Typography>
            <Group key={1} defaultExpanded>
              <GroupSummary>
                <Grid container>
                  <Grid item xs={7} sm={9}>
                    <Typography>
                      {selectedGroup.students
                        .map((student) => `${student.fullName}`)
                        .join(", ")}
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sm={3} textAlign="end">
                    <Typography>
                      {selectedGroup.students.length} Members
                    </Typography>
                  </Grid>
                </Grid>
              </GroupSummary>
              <GroupDetails>
                <Table
                  tableBody={
                    selectedGroup.students.map(
                      ({
                        fullName,
                        id,
                        address,
                        email,
                        department,
                        projectType,
                      }) => ({
                        fullName,
                        id,
                        address,
                        email,
                        department,
                        projectType,
                      })
                    ) as AvailableGroupsStudent[]
                  }
                  tableHead={headingsMyGroup}
                />
              </GroupDetails>
            </Group>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" marginBottom={1}>
              Requested Group
            </Typography>
            <Group key={1} defaultExpanded>
              <GroupSummary>
                <Grid container>
                  <Grid item xs={7} sm={9}>
                    <Typography>
                      {requestedGroup.students
                        .map((student) => `${student.fullName}`)
                        .join(", ")}
                    </Typography>
                  </Grid>
                  <Grid item xs={5} sm={3} textAlign="end">
                    <Typography>
                      {requestedGroup.students.length} Members
                    </Typography>
                  </Grid>
                </Grid>
              </GroupSummary>
              <GroupDetails>
                <Table
                  tableBody={
                    requestedGroup.students.map(
                      ({
                        fullName,
                        academicNumber,
                        address,
                        email,
                        department,
                        projectType,
                      }) => ({
                        fullName,
                        academicNumber,
                        address,
                        email,
                        department,
                        projectType,
                      })
                    ) as AvailableGroupsStudent[]
                  }
                  tableHead={headingsRequestedGroup}
                />
              </GroupDetails>
            </Group>
          </Grid>
          <Grid item xs={12} textAlign="end">
            <Button
              disabled={selectedGroup.id === -1 ? true : false}
              onClick={() => setValue(2)}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Merge 2 groups and make them one group supervised by you and
              another doctor.
              <br />
            </Typography>
            <Typography variant="body1">
              - This will merge the 2 groups in 1 group.
              <br />
              - There will be 2 supervisors on the new merged group.
              <br />
              - You wil be supervising you current students in the new merged
              group.
              <br />
              - The other doctor will be supervising his/her students in the new
              merged group.
              <br />- At the end of the semester, each doctor will evaluate
              his/her students only.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              color="warning"
              label="Type MERGE to confirm."
              variant="outlined"
              value={confirmMerge}
              onChange={(event) => setConfirmMerge(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="warning"
              disabled={confirmMerge.toLowerCase() === "merge" ? false : true}
              onClick={handleMergeGroups}
              endIcon={<CallMergeIcon />}
            >
              Sent Merge Request to other group
            </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
};
