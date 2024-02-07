import { Container, Paper, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Overviews = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Admin Page - Let's Graduate System
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to="create-doctor-account">
              <Button variant="contained">Create New Doctor Account</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="departments-managers">
              <Button variant="contained">Choose Departments Managers</Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
