import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { departments } from "../constants/departments";

const ProfileDetails = () => {
  const [department, setDepartment] = React.useState(
    "Computer Engineering - هندسة الحاسوب"
  );

  const [disabled, setDisabled] = React.useState(true);

  const handleChange = (event: SelectChangeEvent) => {
    setDepartment(event.target.value as string);
  };

  const handleClick = () => {
    setDisabled(!disabled);
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
              My Profile
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Avatar
              alt="Jamal SaadEddin"
              src="/src/assets/jamal_pp.jpg"
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h6">{"Jamal SaadEddin"}</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              defaultValue="Jamal"
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "rgba(0, 0, 0, 0.7)",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              defaultValue="SaadEddin"
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "rgba(0, 0, 0, 0.7)",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Registeration Number"
              defaultValue="11923604"
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "rgba(0, 0, 0, 0.7)",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            {disabled && (
              <TextField
                fullWidth
                label="Department"
                defaultValue={department}
                disabled={disabled}
                sx={{
                  "& .Mui-disabled": {
                    color: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              />
            )}
            {!disabled && (
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="department">Department</InputLabel>
                  <Select
                    labelId="department"
                    id="department"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                  >
                    {departments.map((department) => (
                      <MenuItem key={department.name} value={department.name}>
                        {department.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Address - City/Village"
              defaultValue="Nablus"
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "rgba(0, 0, 0, 0.7)",
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Mobile Phone"
              defaultValue="0599098598"
              disabled={disabled}
              sx={{
                "& .Mui-disabled": {
                  color: "rgba(0, 0, 0, 0.7)",
                },
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              sx={{
                px: 2,
              }}
              onClick={handleClick}
            >
              {disabled && <EditIcon />}
              {!disabled && <SaveIcon />} &nbsp;{" "}
              {disabled ? "Edit Profile" : "Save Changes"}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Graduation Project 1 State:{" "}
              <Typography
                sx={{
                  display: "inline",
                  fontSize: "16px",
                  paddingLeft: "7px",
                  paddingRight: "9px",
                  background: "#e3e2e0",
                  color: "#32302c",
                  borderRadius: "20px",
                }}
              >
                <CircleIcon
                  sx={{
                    fontSize: "12px",
                    color: "#91918e",
                    marginRight: "3px",
                  }}
                />
                Not started
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Graduation Project 2 State:{" "}
              <Typography
                sx={{
                  display: "inline",
                  fontSize: "16px",
                  paddingLeft: "7px",
                  paddingRight: "9px",
                  background: "#d7e4ee",
                  color: "#32302c",
                  borderRadius: "20px",
                }}
              >
                <CircleIcon
                  sx={{
                    fontSize: "12px",
                    color: "#6c96bb",
                    marginRight: "3px",
                  }}
                />
                In progress
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfileDetails;
