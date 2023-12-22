import {
  Avatar,
  Button,
  Container,
  Grid,
  Link as MuiLink,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Overviews = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography variant="h4">
              Welcome {" " || "back,"} {"Jamal"}!
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          my: 4,
        }}
      >
        <Grid container spacing={3} columns={1}>
          <Grid item xs={12}>
            <Typography variant="h4">Quick Overview</Typography>
          </Grid>
          {/* Changable area based on student state  */}
          {
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                What graduation project do you intend to register?
                <Link to="prerequisites/gp/1">
                  <Button variant="contained" sx={{ m: 2 }}>
                    Graduation Project 1
                  </Button>
                </Link>
                <Link to="prerequisites/gp/2">
                  <Button variant="contained" sx={{ mx: 2 }}>
                    Graduation Project 2
                  </Button>
                </Link>
              </Typography>
            </Grid>
          }
          {/* Changable area based on student state  */}
          {
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Join a group of students and start developing your project with
                each others!
                <Link to="available-groups">
                  <Button variant="contained" sx={{ mx: 2 }}>
                    Show Available Groups
                  </Button>
                </Link>
              </Typography>
            </Grid>
          }
          {/* Changable area based on student state  */}
          {
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Supervisors Section is Available now! Hurry up and book with
                your favorite supervisor
                <Link to="available-supervisors">
                  <Button variant="contained" sx={{ mx: 2 }}>
                    Show Supervisors
                  </Button>
                </Link>
              </Typography>
            </Grid>
          }
          <Grid item xs={12}>
            <MuiLink
              href="https://eng.najah.edu/ar/study/graduation-projects"
              target="_blank"
            >
              Link to Graduation Projects from previous semesters that you might
              benifit from..
            </MuiLink>
          </Grid>
        </Grid>
      </Paper>
      {/* Changable area based on student state  */}
      {
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            my: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Project Overview</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                Project Title: {"Mohito Maker Machine"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Project Members: {5}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                Project Supervisor: {"Dr. Manar Qamhie" || "Not chosen yet"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                Project Type: Graduation Project {1 || 2}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Link to="my-project">
                <Button variant="outlined" color="warning">
                  Show More Details
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      }
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          my: 4,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Profile Overview</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Avatar alt="Remy Sharp" src="" sx={{ width: 80, height: 80 }} />
            <Typography variant="h6">{"Jamal SaadEddin"}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">
              Registration Number: {11923604}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">
              Department: {"Computer Engineering - هندسة الحاسوب"}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">Address: {"Nablus"}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">
              Mobile Phone: {"0599098598"}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Overviews;
