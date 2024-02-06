import { Container, Grid, Paper, Typography } from "@mui/material";
import GroupsTable from "./GroupsTable";
import useUserStore from "../../state-management/userStore";
import PageNotAccessible from "../common/PageNotAccessible";

const AvailableGroups = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  if (fetchedUser?.type !== "student") return null;

  if (fetchedUser.currentPeriod !== "create-partnerships") {
    return <PageNotAccessible title="Connect to Your Partners" />;
  }
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
