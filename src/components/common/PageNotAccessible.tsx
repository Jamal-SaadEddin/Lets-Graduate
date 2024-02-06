import { Container, Grid, Paper, Typography } from "@mui/material";

type Props = {
  title: string;
};

const PageNotAccessible: React.FC<Props> = ({ title }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h5" color="gray" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h5" color="error" gutterBottom>
              Sorry! This page is currently not accessible
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PageNotAccessible;
