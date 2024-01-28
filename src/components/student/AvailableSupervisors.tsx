import { Container, Grid, Paper, Typography } from "@mui/material";
import SupervisorsTable from "./SupervisorsTable";
import { useEffect, useState } from "react";
import { hasSupervisor } from "../../hooks/useAvailableSupervisors";

let doHaveSupervisor: boolean | undefined = undefined;

const AvailableSupervisors = () => {
  const [haveSupervisor, setHaveSupervisor] = useState<boolean | undefined>(
    undefined
  );

  const handleProfileInfo = async () => {
    doHaveSupervisor = await hasSupervisor(11923604);
    setHaveSupervisor(doHaveSupervisor);
  };

  useEffect(() => {
    // Code here will run just like componentDidMount
    handleProfileInfo();
  }, []);

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
            {haveSupervisor === undefined ? (
              ""
            ) : !haveSupervisor ? (
              <SupervisorsTable />
            ) : (
              <Typography variant="h6">
                You have been connected with your Supervisor.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AvailableSupervisors;
