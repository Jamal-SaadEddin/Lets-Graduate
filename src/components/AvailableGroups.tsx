import { Container, Grid, Paper, Typography } from "@mui/material";
import GroupsTable from "./GroupsTable";

const AvailableGroups = () => {
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
              Connect to Your Partners
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Typography variant="h6">
              Here you can send partner request to create partnerships with
              other students
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GroupsTable />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AvailableGroups;
