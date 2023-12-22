import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const Overviews = () => {
  const { user } = useAuth();

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
          {
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Currently, the Department of Computer Engineering is going
                through a period of establishing partnerships between students,
                so the supervising doctors must wait for the start of the
                student registration period with the supervisors. You will
                receive notifications from the students at that time.
              </Typography>
            </Grid>
          }
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
          <Grid item xs={6}>
            <Typography variant="subtitle1">User Id: {user.id}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Department: {user.department}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Address: {user.address}</Typography>
          </Grid>
          <Grid item xs={6}>
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
