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
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import { Theme, useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Department } from "../../../constants/departments";
import useDepartmentSettingsStore from "../../../state-management/Doctor/departmentSettingsStore";
import useThemeStore from "../../../state-management/themeStore";
import {
  getDepartmentSettings,
  updateDepartmentSettings,
} from "../../../hooks/useDepartmentSettings";
import useUserStore from "../../../state-management/userStore";
import { DoctorInfo } from "../../../hooks/useAuth";

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

function getStyles(
  name: string,
  personName: readonly string[] | undefined,
  theme: Theme
) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

let oldSettings: Department | undefined = undefined;

const DepartmentSettings = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  const userInfo = fetchedUser?.info as DoctorInfo;
  if (fetchedUser?.type !== "doctor" || !userInfo.isDepartmentManager)
    return null;
  const theme = useTheme();
  const mode = useThemeStore((s) => s.mode);

  const [saved, setSaved] = useState(false);

  const handleDepartmentSettings = async () => {
    oldSettings = await getDepartmentSettings(fetchedUser.id as number);
  };

  useEffect(() => {
    // Code here will run just like componentDidMount
    handleDepartmentSettings();
  }, []);

  const departmentSettings = useDepartmentSettingsStore(
    (s) => s.departmentSettings
  );
  const setDepartmentSettings = useDepartmentSettingsStore(
    (s) => s.setDepartmentSettings
  );

  const [disabled, setDisabled] = React.useState(true);

  const handleCancel = (department?: Department) => {
    setDisabled(!disabled);
    setDepartmentSettings(department!);
  };

  const handleClick = () => {
    setDisabled(!disabled);
  };

  const handleSave = async () => {
    // Save Changes to Backend
    const requestBody = {
      departmentName: departmentSettings?.departmentName,
      maxNoOfStuPerProj: departmentSettings?.maxNoOfStuPerProj,
      maxNoOfProjPerDoct: departmentSettings?.maxNoOfProjPerDoct,
      maxNoOfStuPerDoct: departmentSettings?.maxNoOfStuPerDoct,
      currentPeriod: departmentSettings?.currentPeriod,
      supervisingDoctors: departmentSettings?.supervisingDoctors,
      projectsCommitteeMembers: departmentSettings?.projectsCommitteeMembers,
    };
    const isSaved = await updateDepartmentSettings(requestBody);
    if (isSaved) setSaved(true);
    else setSaved(false);

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
    setDepartmentSettings({
      ...departmentSettings,
      supervisingDoctors: typeof value === "string" ? value.split(",") : value,
    } as Department);
  };

  const handleProjectCommitteeChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setDepartmentSettings({
      ...departmentSettings,
      projectsCommitteeMembers:
        typeof value === "string" ? value.split(",") : value,
    } as Department);
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
                value={departmentSettings?.departmentName}
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
                value={departmentSettings?.noOfRegisteredStudents}
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
                value={departmentSettings?.noOfSupervisors}
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
                value={departmentSettings?.noOfProjectsCommitteeMembers}
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
              value={departmentSettings?.maxNoOfStuPerProj}
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
                setDepartmentSettings({
                  ...departmentSettings,
                  maxNoOfStuPerProj: Number(event.target.value),
                } as Department)
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="Maximum Number of Students per Supervisor"
              value={departmentSettings?.maxNoOfStuPerDoct}
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
                setDepartmentSettings({
                  ...departmentSettings,
                  maxNoOfStuPerDoct: Number(event.target.value),
                } as Department)
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required={!disabled && true}
              label="Maximum Number of Projects per Supervisor"
              value={departmentSettings?.maxNoOfProjPerDoct}
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
                setDepartmentSettings({
                  ...departmentSettings,
                  maxNoOfProjPerDoct: Number(event.target.value),
                } as Department)
              }
            />
          </Grid>

          {disabled && (
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Department Current Period (Current Stage)"
                value={departmentSettings?.currentPeriod}
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
                  value={departmentSettings?.currentPeriod}
                  label="Department Current Period (Current Stage)"
                  onChange={(event) =>
                    setDepartmentSettings({
                      ...departmentSettings,
                      currentPeriod: event.target.value as
                        | "answering-prerequisites"
                        | "create-partnerships"
                        | "registration-to-supervisors"
                        | "abstract-submission"
                        | "evaluating-students"
                        | "vacation",
                    } as Department)
                  }
                >
                  <MenuItem value="answering-prerequisites">
                    answering-prerequisites
                  </MenuItem>
                  <MenuItem value="create-partnerships">
                    create-partnerships
                  </MenuItem>
                  <MenuItem value="registration-to-supervisors">
                    registration-to-supervisors
                  </MenuItem>
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
                value={departmentSettings?.supervisingDoctors}
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
                  value={departmentSettings?.supervisingDoctors}
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
                  {departmentSettings?.allDoctors.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(
                        name,
                        departmentSettings?.supervisingDoctors,
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
                value={departmentSettings?.projectsCommitteeMembers}
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
                  value={departmentSettings?.projectsCommitteeMembers}
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
                  {departmentSettings?.allDoctors.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(
                        name,
                        departmentSettings?.projectsCommitteeMembers,
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
                onClick={() => handleCancel(oldSettings)}
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
                  JSON.stringify(departmentSettings) ===
                    JSON.stringify(oldSettings) ||
                  departmentSettings?.maxNoOfStuPerProj
                    .toString()
                    .replace(/\s/g, "") === "0" ||
                  departmentSettings?.maxNoOfStuPerDoct
                    .toString()
                    .replace(/\s/g, "") === "0" ||
                  departmentSettings?.maxNoOfProjPerDoct
                    .toString()
                    .replace(/\s/g, "") === "0" ||
                  departmentSettings?.supervisingDoctors
                    .toString()
                    .replace(/\s/g, "") === "0" ||
                  departmentSettings?.projectsCommitteeMembers
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
            severity={saved ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {saved ? "Saved Changes Successfully!" : "Error updating settings!"}
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
