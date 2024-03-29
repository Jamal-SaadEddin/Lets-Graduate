import DeleteIcon from "@mui/icons-material/Delete";
import NotesIcon from "@mui/icons-material/Notes";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { getAbstractComments } from "../../hooks/useComments";
import useUserStore from "../../state-management/userStore";
import useViewedSubmissionStore from "../../state-management/viewedSubmissionStore";

const Submissions = () => {
  const fetchedUser = useUserStore((s) => s.fetchedUser);
  if (fetchedUser?.type !== "student") return null;
  const submission = useViewedSubmissionStore((s) => s.submission);
  const setSubmission = useViewedSubmissionStore((s) => s.setSubmission);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // Handle the selected file here, e.g., log its details or send it to a server
    console.log("Selected File:", selectedFile);

    // const requestBody = {
    //   projectId: userInfo.projectId,
    //   file: `/src/assets/abstracts/${selectedFile?.name}`,
    // };
    //await uploadNewAbstract(requestBody);
  };

  const handleDeleteAbstract = async () => {
    const isDeleted = true;
    //await deleteAbstract(submission?.submissionId as number);
    isDeleted && setSubmission(null);
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
              Abstract Submission
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Typography variant="h6">
              Here you can submit your project abstract.
              <br />
              Note that your supervisor and projects committee can review it,
              and give you feedbacks through comments section.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            {submission?.acceptStatus !== "Accepted" && (
              <Button
                component="label"
                variant="contained"
                startIcon={<UploadIcon />}
                size="small"
              >
                Upload Abstract
                <VisuallyHiddenInput
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </Button>
            )}
            {submission && submission.acceptStatus !== "Accepted" && (
              <Button
                color="error"
                variant="outlined"
                size="small"
                startIcon={<DeleteIcon />}
                sx={{ margin: 1 }}
                onClick={handleDeleteAbstract}
              >
                Delete Abstract
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Chip
              size="small"
              color={
                !submission
                  ? "error"
                  : submission.acceptStatus === "Pending"
                  ? "primary"
                  : "success"
              }
              label={
                !submission
                  ? "Not Submitted"
                  : submission.acceptStatus === "Pending"
                  ? "Submitted, Not Evaluated"
                  : "Accepted"
              }
              sx={{ marginTop: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={4} textAlign="end">
            {submission && (
              <Link to={`/submissions/${submission?.submissionId}/comments`}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<NotesIcon />}
                  sx={{ marginY: 1 }}
                  onClick={async () =>
                    await getAbstractComments(submission.projectId)
                  }
                >
                  Comments
                </Button>
              </Link>
            )}
          </Grid>
          {submission && (
            <Grid item xs={12}>
              <iframe src={submission?.file} frameBorder="0" />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Submissions;

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
