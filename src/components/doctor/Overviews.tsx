import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { getDepartment } from "../../constants/departments";

const Overviews = () => {
  const { user } = useAuth();
  const userDepartment = getDepartment(user.department);
  const userDepartmentName = userDepartment.name.replace(/[^a-zA-Z]/gm, " ");

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Welcome {" " || "back,"} Dr. {user.firstName}!
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          my: 4,
        }}
      >
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography variant="h4">Quick Overview</Typography>
          </Grid>
          {/* Changable area based on doctor state  */}
          <Grid item xs={12}>
            {userDepartment.currentPeriod === "create partnerships" && (
              <Typography variant="subtitle1">
                Currently, the Department of {userDepartmentName} is going
                through a period of establishing partnerships between students,{" "}
                <b>
                  so the supervising doctors must wait for the start of the
                  student registration period with the supervisors.
                </b>{" "}
                You will receive notifications from students asking you to
                supervise them at that time.
              </Typography>
            )}
            {userDepartment.currentPeriod === "registration" && (
              <Typography variant="subtitle1">
                The {userDepartmentName} Department is currently going through a
                period of student registrations with the supervising doctors.{" "}
                <b>
                  Please check the notifications periodically to see which
                  groups are requesting you as their supervisor.
                </b>
              </Typography>
            )}
            {userDepartment.currentPeriod === "abstract submission" && (
              <Typography variant="subtitle1">
                The {userDepartmentName} Department is currently going through
                the period of submitting abstracts to the supervising doctors.{" "}
                <b>
                  Please check your students' submissions and write any comments
                  and notes if needed.
                </b>
              </Typography>
            )}
            {userDepartment.currentPeriod === "evaluating students" && (
              <Typography variant="subtitle1">
                After completing the graduation projects for this semester, it
                is time to evaluate the students.{" "}
                <b>
                  You must evaluate each student by changing the status of their
                  project to pass or fail.
                </b>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          my: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Profile Overview</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Avatar
              alt={user.firstName + " " + user.lastName}
              src=""
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h6">
              {user.firstName + " " + user.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">User Id: {user.id}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">
              Department: {user.department}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Address: {user.address}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">
              Mobile Phone: {user.mobileNumber}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Overviews;
