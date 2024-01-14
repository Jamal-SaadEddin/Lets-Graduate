import { Container, Grid, Paper, Typography } from "@mui/material";
import GroupsTable from "./GroupsTable";

const MergeGroups = () => {
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
              Merge Groups
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Merge 2 groups and make them one group supervised by you and
              another doctor.
              <br />
            </Typography>
            <Typography variant="body1">
              - This will merge the 2 groups in 1 group.
              <br />
              - There will be 2 supervisors on the new merged group.
              <br />
              - You wil be supervising you current students in the new merged
              group.
              <br />
              - The other doctor will be supervising his/her students in the new
              merged group.
              <br />- At the end of the semester, each doctor will evaluate
              his/her students only.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GroupsTable withFiltration />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MergeGroups;
