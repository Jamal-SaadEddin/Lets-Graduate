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
import { Submission as SubmissionInterface } from "../../constants/supervisorSubmissions";
import { getAbstractComments } from "../../hooks/useComments";
import useCommentsStore from "../../state-management/Student/commentsStore";
import useUserStore from "../../state-management/userStore";
import useViewedSubmissionStore from "../../state-management/viewedSubmissionStore";

const Submission = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  if (fetchedUser?.type !== "doctor") return null;
  const submission = useViewedSubmissionStore((s) => s.submission);
  const setSubmission = useViewedSubmissionStore((s) => s.setSubmission);
  const projectTitle = useViewedSubmissionStore((s) => s.projectTitle);
  const submissions = useViewedSubmissionStore((s) => s.submissions);
  const setSubmissions = useViewedSubmissionStore((s) => s.setSubmissions);
  const comments = useCommentsStore((s) => s.comments);
  const setComments = useCommentsStore((s) => s.setComments);

  const handleAcceptSubmission = async () => {
    const newSubmission = { ...submission, acceptStatus: "Accepted" };
    setSubmission(newSubmission as SubmissionInterface);

    const isAccepted = true;
    // await updateSubmissionAcceptStatus(
    //   submission?.projectId
    // );
    if (isAccepted) {
      const newSubmissions = submissions.map((s) =>
        s.submissionId === submission?.submissionId ? newSubmission : s
      );
      setSubmissions(newSubmissions as SubmissionInterface[]);
      return;
    }

    const oldSubmission = { ...submission, acceptStatus: "Pending" };
    setSubmission(oldSubmission as SubmissionInterface);
  };

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
              <Link to={"/students-submissions"}>
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
            <Link
              to={`/students-submissions/${submission?.submissionId}/comments`}
            >
              <Button
                variant="contained"
                size="small"
                startIcon={<NotesIcon />}
                sx={{ marginY: 1 }}
                onClick={async () => {
                  if (comments[0]?.projectId !== submission?.projectId)
                    setComments([]);
                  await getAbstractComments(submission?.projectId);
                }}
              >
                Comments
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6} textAlign="end">
            {submission?.operation === "evaluating" &&
              submission?.acceptStatus === "Pending" && (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleAcceptSubmission}
                >
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
