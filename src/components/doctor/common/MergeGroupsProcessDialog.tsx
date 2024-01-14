import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  openMergeDialog: boolean;
  setOpenMergeDialog: (openMergeDialog: boolean) => void;
}

const MergeGroupsProcessDialog = ({
  openMergeDialog,
  setOpenMergeDialog,
}: Props) => {
  const handleCloseMergeDialog = () => {
    setOpenMergeDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="xl"
        open={openMergeDialog}
        onClose={handleCloseMergeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <MergeProcessTabs />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default MergeGroupsProcessDialog;

import AppBar from "@mui/material/AppBar";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { supervisorProjects } from "../../../constants/supervisedProjects";

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

const MergeProcessTabs = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [selectedGroup, setSelectedGroup] = React.useState("");

  const handleSelectedGroup = (event: SelectChangeEvent) => {
    setSelectedGroup(event.target.value as string);
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
          <Tab label="1- Choose your group" {...a11yProps(0)} />
          <Tab label="2- Review groups details" {...a11yProps(1)} />
          <Tab label="3- Confirm merge process" {...a11yProps(2)} />
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
              value={selectedGroup}
              label="Choose your group that you want to merge"
              onChange={handleSelectedGroup}
            >
              {supervisorProjects?.map(({ id, title }) => (
                <MenuItem key={id} value={id}>
                  {title}, ID: {id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </Box>
  );
};
