import DeleteIcon from "@mui/icons-material/Delete";
import NotesIcon from "@mui/icons-material/Notes";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { ChangeEvent } from "react";
import { Link } from "react-router-dom";

const Submissions = () => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // Handle the selected file here, e.g., log its details or send it to a server
    console.log("Selected File:", selectedFile);
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
          <Grid item xs={6}>
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
            <Button
              color="error"
              variant="outlined"
              size="small"
              startIcon={<DeleteIcon />}
              sx={{ margin: 1 }}
            >
              Delete Abstract
            </Button>
          </Grid>
          <Grid item xs={6} textAlign="end">
            <Link to="abstract-comments">
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
          <Grid item xs={12}>
            <iframe
              src="src/assets/Let's Graduate -Abstract.pdf"
              frameBorder="0"
            />
          </Grid>
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
