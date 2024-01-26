import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import React, { useState } from "react";
import {
  Department,
  additionalDepartmentInfo,
  getDepartment,
} from "../../../constants/departments";
import useAuth from "../../../hooks/useAuth";
import useThemeStore from "../../../state-management/themeStore";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const allDoctors = [
  "Oliver Hansen - 1355",
  "Van Henry - 2101",
  "April Tucker - 5544",
  "Ralph Hubbard - 2456",
  "Omar Alexander - 7456",
  "Carlos Abbott - 1598",
  "Miriam Wagner - 3562",
  "Bradley Wilkerson - 7412",
  "Virginia Andrews - 9652",
  "Kelly Snyder - 4561",
];

const DepartmentSettings = () => {
  const theme = useTheme();
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

  const handleSupervisorsChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setCurrentDepartment({
      ...currentDepartment,
      supervisingDoctors: typeof value === "string" ? value.split(",") : value,
    });
  };

  const handleProjectCommitteeChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setCurrentDepartment({
      ...currentDepartment,
      projectsCommitteeMembers:
        typeof value === "string" ? value.split(",") : value,
    });
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
          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Supervising Doctors"
                value={currentDepartment.supervisingDoctors}
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
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">
                  Supervising Doctors
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={currentDepartment.supervisingDoctors}
                  onChange={handleSupervisorsChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Supervising Doctors"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {allDoctors.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(
                        name,
                        currentDepartment.supervisingDoctors,
                        theme
                      )}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Projects Committee Members"
                value={currentDepartment.projectsCommitteeMembers}
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
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">
                  Projects Committee Members
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={currentDepartment.projectsCommitteeMembers}
                  onChange={handleProjectCommitteeChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Projects Committee Members"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {allDoctors.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(
                        name,
                        currentDepartment.projectsCommitteeMembers,
                        theme
                      )}
                    >
                      {name}
                    </MenuItem>
                  ))}
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
                    .replace(/\s/g, "") === "0" ||
                  currentDepartment.supervisingDoctors
                    .toString()
                    .replace(/\s/g, "") === "0" ||
                  currentDepartment.projectsCommitteeMembers
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
