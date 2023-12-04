import { Container, Grid, Paper, Typography } from "@mui/material";
import SupervisorsTable from "./SupervisorsTable";

const AvailableSupervisors = () => {
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
              Choose Your Supervisor
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Typography variant="h6">
              Here you can send a request to one of the supervisors to supervise
              your group during the semester
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SupervisorsTable />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AvailableSupervisors;
