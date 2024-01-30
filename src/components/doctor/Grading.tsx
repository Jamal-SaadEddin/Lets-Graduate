import { Container, Grid, Paper, Typography } from "@mui/material";
import GroupsTable from "./GroupsTable";
import useUserStore from "../../state-management/userStore";

const Grading = () => {
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
              Grading and Evaluation
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Typography variant="h6">
              After finishing graduation projects in this semester, now it's
              time to evaluate the students.
              <br />
              Please change each student's project status individually.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GroupsTable projectTitle grading />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Grading;
