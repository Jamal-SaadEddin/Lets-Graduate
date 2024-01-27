import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import NotesIcon from "@mui/icons-material/Notes";
import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useViewedSubmissionStore from "../../state-management/viewedSubmissionStore";

const Submission = () => {
  const submission = useViewedSubmissionStore((s) => s.submission);
  const projectTitle = useViewedSubmissionStore((s) => s.projectTitle);

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
              <Link to={"/submissions"}>
                <Button
                  variant="text"
                  startIcon={<ArrowBackIosIcon />}
                  size="small"
                ></Button>
              </Link>
              {projectTitle} - Abstract
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Typography variant="h6">
              You can write any feedbacks through comments section.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Link to={`/submissions/${submission?.submissionId}/comments`}>
              <Button
                variant="contained"
                size="small"
                startIcon={<NotesIcon />}
                sx={{ marginY: 1 }}
              >
                Comments
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6} textAlign="end">
            {submission?.operation === "evaluating" &&
              submission?.acceptStatus === "Pending" && (
                <Button variant="contained" color="success">
                  Accept Abstract
                </Button>
              )}
            {submission?.acceptStatus === "Accepted" && (
              <Chip color="success" label="Accepted" />
            )}
          </Grid>
          <Grid item xs={12}>
            <iframe src={submission?.file} frameBorder="0" />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Submission;
