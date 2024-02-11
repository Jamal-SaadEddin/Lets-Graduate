import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AdminDepartment } from "../../constants/departments";
import useAdminSettingsStore from "../../state-management/Admin/adminSettingsStore";

const DepartmentsManagers = () => {
  const adminDepartments = useAdminSettingsStore((s) => s.adminDepartments);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h4"
              color="primary"
              gutterBottom
            >
              Choose Department Managers
            </Typography>
          </Grid>
          {adminDepartments.map((department) => (
            <Grid item xs={12}>
              <DepartmentManagerSelect department={department} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default DepartmentsManagers;

interface DepartmentManagerSelectProps {
  department: AdminDepartment;
}

const DepartmentManagerSelect = ({
  department,
}: DepartmentManagerSelectProps) => {
  const [departmentManager, setDepartmentManager] = useState(
    department.departmentManager
  );

  const handleChange = async (event: SelectChangeEvent) => {
    setDepartmentManager(event.target.value as string);
    // const requestBody = {
    //   department: department.departmentName,
    //   newManager: event.target.value as string,
    // };
    // await updateDepartmentManager(requestBody);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {department.departmentName} - Manager
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={departmentManager}
        label={`${department.departmentName} - Manager`}
        onChange={handleChange}
      >
        {department.allDoctors.map((doctor) => (
          <MenuItem value={doctor}>{doctor}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
