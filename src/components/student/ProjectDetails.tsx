import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import Table from "../common/Table";

const partnerHeadings = [
  "Student Name",
  "Registration Number",
  "Department",
  "Email",
  "Mobile Number",
  "Address",
];

const supervisorHeadings = [
  "Supervisor Name",
  "Department",
  "Email",
  "Mobile Number",
];

const ProjectDetails = () => {
  const user = useUserStore((s) => s.fetchedUser);
  if (user?.type !== "student") return null;

  const myProjectInfo = useMyProjectInfoStore((s) => s.myProjectInfo);
  const myPartners = usePartnersStore((s) => s.partners);
  const mySupervisors = useSupervisorStore((s) => s.supervisors);

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          my: 4,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              gutterBottom
            >
              {myProjectInfo.projectTitle}
            </Typography>
            <Typography>
              {user.department} - Graduion Project{" "}
              {myProjectInfo.projectType === "gp1" ? "1" : "2"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" paddingBottom={2} color="primary">
              {myPartners.length === 1 ? "My Partner" : "My Partners"}
            </Typography>
            <Table tableHead={partnerHeadings} tableBody={myPartners} />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {user.currentPeriod !== "create-partnerships" && (
            <Grid item xs={12}>
              <Typography variant="h6" paddingBottom={2} color="primary">
                {mySupervisors.length === 1
                  ? "My Supervisor"
                  : "My Supervisors"}
              </Typography>
              <Table tableHead={supervisorHeadings} tableBody={mySupervisors} />
            </Grid>
          )}
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <FormDialog />
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Saved Changes Successfully!
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default ProjectDetails;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { updateMyProjectTitle } from "../../hooks/useMyProject";
import useMyProjectInfoStore from "../../state-management/Student/myProjectInfoStore";
import usePartnersStore from "../../state-management/Student/partnersStore";
import useSupervisorStore from "../../state-management/Student/supervisorsStore";
import useUserStore from "../../state-management/userStore";

export function FormDialog() {
  const user = useUserStore((s) => s.fetchedUser);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [newProjectTitle, setNewProjectTitle] = useState("");

  const myProjectInfo = useMyProjectInfoStore((s) => s.myProjectInfo);
  const setMyProject = useMyProjectInfoStore((s) => s.setMyProject);

  const handleAddNewProjectTitle = async () => {
    if (newProjectTitle.replace(/\s/g, "").length > 0) {
      await updateMyProjectTitle(user?.id as number, newProjectTitle);
      handleClose();
      setMyProject({ ...myProjectInfo, projectTitle: newProjectTitle });
    } else {
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{
          px: 2,
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
        &nbsp; Change Project Title
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Change Project Title</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter New Project Title"
            type="text"
            fullWidth
            variant="standard"
            value={newProjectTitle}
            onChange={(event) => {
              if (event.target.value.length <= 50)
                setNewProjectTitle(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNewProjectTitle}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
