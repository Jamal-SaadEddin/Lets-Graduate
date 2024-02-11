import DoneIcon from "@mui/icons-material/Done";
import {
  Chip,
  Container,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate, useParams } from "react-router-dom";
import usePrerequisitesStore from "../../state-management/prerequisitesStore";
import { registerProject } from "../../hooks/usePrerequisites";
import { useState } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";
import useUserStore from "../../state-management/userStore";

export default function Prerequisites() {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  if (fetchedUser?.type !== "student") return null;
  const params = useParams();
  const navigate = useNavigate();

  const prerequisites = usePrerequisitesStore((s) => s.prerequisites);
  const setPrerequisites = usePrerequisitesStore((s) => s.setPrerequisites);

  const handleClick = (preId: number) => {
    setPrerequisites(
      prerequisites.map((pre) =>
        pre.prerequisiteId === preId ? { ...pre, answer: !pre.answer } : pre
      )
    );
  };

  const [registered, setRegistered] = useState(false);

  const handleRegisterProject = async () => {
    const requestBody = {
      studentId: fetchedUser.id as number,
      projectType: params["projectType"] === "1" ? "gp1" : "gp2",
    };
    const isRegistered = true;
    //await registerProject(requestBody);
    if (isRegistered) {
      setRegistered(true);
      setOpenSnackbar(true);
      navigate("/");
    }
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  if (!prerequisites || prerequisites.length === 0)
    return (
      <Typography component="h2" variant="h5" color="primary" gutterBottom>
        No Prerequisites Available.
      </Typography>
    );

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Prerequisites - Graduation Project {params["projectType"]}
            </Typography>
            <Table size="medium">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: 16 }}>Prerequisite</TableCell>
                  <TableCell align="right" sx={{ fontSize: 16 }}>
                    Answer
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {prerequisites.map((prerequisite, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontSize: 16 }}>
                      {prerequisite.content}
                    </TableCell>
                    <TableCell align="right" sx={{ fontSize: 16 }}>
                      {prerequisite.answer && (
                        <Chip
                          color="success"
                          icon={<DoneIcon />}
                          size="small"
                          variant="filled"
                          label="Yes"
                          sx={{
                            fontSize: "14px",
                          }}
                        />
                      )}
                      <Checkbox
                        name={`${index}`}
                        onClick={() =>
                          handleClick(prerequisite.prerequisiteId!)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
                {prerequisites.length >= 1 &&
                prerequisites.every((p) => p.answer === true) ? (
                  <TableRow key={0}>
                    <TableCell
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        fontFamily: "Segoe UI Emoji",
                      }}
                    >
                      {"You've completed all the Prerequisties!"} <br />
                      Do you want to register Graduation Project {"1 " || "2 "}
                      this semester?
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ fontSize: 16 }}
                        onClick={handleRegisterProject}
                      >
                        Yes, Register
                      </Button>
                    </TableCell>
                  </TableRow>
                ) : null}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={registered ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {registered
            ? "Project Registered Successfully!"
            : "Error Registering Project!"}
        </Alert>
      </Snackbar>
    </Container>
  );
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
