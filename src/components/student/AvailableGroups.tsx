import { Container, Grid, Paper, Typography } from "@mui/material";
import GroupsTable from "./GroupsTable";
import useUserStore from "../../state-management/userStore";
import PageNotAccessible from "../common/PageNotAccessible";
import { StudentInfo } from "../../hooks/useAuth";

const AvailableGroups = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  const studentInfo = fetchedUser?.info as StudentInfo;
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
            {!studentInfo.isWithGroup && <GroupsTable />}
            {studentInfo.isWithGroup && (
              <Typography variant="h6">
                You can't send any partnership requests, because you have been
                connected with your partner/s.
                <br />
                If any student wants to join your group, he must be alone, and
                he must send you the partnership request.
                <br />
                And you will receive the notification from him to accept or
                decline.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AvailableGroups;
