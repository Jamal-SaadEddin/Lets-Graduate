import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import {
  Department,
  additionalDepartmentInfo,
  getDepartment,
} from "../../../constants/departments";
import useAuth from "../../../hooks/useAuth";
import useThemeStore from "../../../state-management/themeStore";

const DepartmentSettings = () => {
  const { user } = useAuth();
  const department = getDepartment(user.department);

  const [currentDepartment, setCurrentDepartment] =
    useState<Department>(department);

  const mode = useThemeStore((s) => s.mode);

  const [disabled, setDisabled] = React.useState(true);

  const handleCancel = (department: Department) => {
    setDisabled(!disabled);
    setCurrentDepartment(department);
  };

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const handleSave = () => {
    // Save Changes to Backend
    setDisabled(!disabled);
    setOpenSnackbar(true);
  };

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
              Department Settings
            </Typography>
          </Grid>
          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Department"
                value={currentDepartment.name}
                disabled
                sx={{
                  "& input.MuiInputBase-input:disabled": {
                    WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                  },
                  "& label.Mui-disabled": {
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                  },
                }}
              />
            </Grid>
          )}
          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Number of Registered Students"
                value={additionalDepartmentInfo.noOfRegisteredStudents}
                disabled
                sx={{
                  "& input.MuiInputBase-input:disabled": {
                    WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                  },
                  "& label.Mui-disabled": {
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                  },
                }}
              />
            </Grid>
          )}
          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Number of Supervisors"
                value={additionalDepartmentInfo.noOfSupervisors}
                disabled
                sx={{
                  "& input.MuiInputBase-input:disabled": {
                    WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                  },
                  "& label.Mui-disabled": {
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                  },
                }}
              />
            </Grid>
          )}
          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Current Number of Projects Committee Members"
                value={additionalDepartmentInfo.noOfProjectsCommitteeMembers}
                disabled
                sx={{
                  "& input.MuiInputBase-input:disabled": {
                    WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                  },
                  "& label.Mui-disabled": {
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                  },
                }}
              />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="Maximum Number of Students per Project"
              value={currentDepartment.maxNoOfStuInProj}
              disabled={disabled}
              type="number"
              sx={{
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                },
              }}
              onChange={(event) =>
                setCurrentDepartment({
                  ...currentDepartment,
                  maxNoOfStuInProj: Number(event.target.value),
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="Maximum Number of Students per Supervisor"
              value={currentDepartment.maxNoOfStuForDoc}
              disabled={disabled}
              type="number"
              sx={{
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                },
              }}
              onChange={(event) =>
                setCurrentDepartment({
                  ...currentDepartment,
                  maxNoOfStuForDoc: Number(event.target.value),
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="Maximum Number of Projects per Supervisor"
              value={currentDepartment.maxNoOfProjForDoc}
              disabled={disabled}
              type="number"
              sx={{
                "& input.MuiInputBase-input:disabled": {
                  WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                },
                "& label.Mui-disabled": {
                  color: mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                },
              }}
              onChange={(event) =>
                setCurrentDepartment({
                  ...currentDepartment,
                  maxNoOfProjForDoc: Number(event.target.value),
                })
              }
            />
          </Grid>

          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Department Current Period (Current Stage)"
                value={currentDepartment.currentPeriod}
                disabled
                sx={{
                  "& input.MuiInputBase-input:disabled": {
                    WebkitTextFillColor: mode === "light" ? "black" : "#bbb",
                  },
                  "& label.Mui-disabled": {
                    color:
                      mode === "light" ? "black" : "#rgba(255,255,255,0.5)",
                  },
                }}
              />
            </Grid>
          )}
          {!disabled && (
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required={!disabled && true}>
                <InputLabel id="demo-simple-select-label">
                  Department Current Period (Current Stage)
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currentDepartment.currentPeriod}
                  label="Department Current Period (Current Stage)"
                  onChange={(event) =>
                    setCurrentDepartment({
                      ...currentDepartment,
                      currentPeriod: event.target.value as
                        | "create-partnerships"
                        | "registration"
                        | "abstract-submission"
                        | "evaluating-students"
                        | "vacation",
                    })
                  }
                >
                  <MenuItem value="create-partnerships">
                    create-partnerships
                  </MenuItem>
                  <MenuItem value="registration">registration</MenuItem>
                  <MenuItem value="abstract-submission">
                    abstract-submission
                  </MenuItem>
                  <MenuItem value="evaluating-students">
                    evaluating-students
                  </MenuItem>
                  <MenuItem value="vacation">vacation</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          )}

          <Grid item xs={12}>
            {!disabled && (
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  px: 2,
                  mr: 2,
                }}
                disableElevation
                onClick={() => handleCancel(department)}
              >
                Cancel
              </Button>
            )}
            {!disabled && (
              <Button
                variant="contained"
                color="success"
                sx={{
                  px: 2,
                }}
                disableElevation
                disabled={
                  JSON.stringify(currentDepartment) ===
                    JSON.stringify(department) ||
                  currentDepartment.maxNoOfStuInProj
                    .toString()
                    .replace(/\s/g, "") === "0" ||
                  currentDepartment.maxNoOfStuForDoc
                    .toString()
                    .replace(/\s/g, "") === "0" ||
                  currentDepartment.maxNoOfProjForDoc
                    .toString()
                    .replace(/\s/g, "") === "0"
                    ? true
                    : false
                }
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            )}
            {disabled && (
              <Button
                variant="outlined"
                sx={{
                  px: 2,
                }}
                startIcon={<EditIcon />}
                onClick={handleClick}
              >
                Modify these Settings
              </Button>
            )}
          </Grid>
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

export default DepartmentSettings;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
