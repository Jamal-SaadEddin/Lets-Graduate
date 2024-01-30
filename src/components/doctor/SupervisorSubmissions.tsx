import { Container, Grid, Paper, Typography } from "@mui/material";
import Abstracts from "./Abstracts";
import useUserStore from "../../state-management/userStore";

const SupervisorSubmissions = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  if (fetchedUser?.type !== "doctor") return null;
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
              Abstracts Submissions
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Typography variant="h6">
              Here you can view projects abstracts.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Abstracts />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SupervisorSubmissions;
