import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCommentsStore from "../../state-management/Student/commentsStore";
import useViewedSubmissionStore from "../../state-management/viewedSubmissionStore";
import Comment from "./Comment";
import { addNewComment } from "../../hooks/useComments";
import useUserStore from "../../state-management/userStore";

interface Props {
  canAddComments?: boolean;
}

const Comments = ({ canAddComments = false }: Props) => {
  const user = useUserStore((s) => s.fetchedUser);
  const submission = useViewedSubmissionStore((s) => s.submission);
  const comments = useCommentsStore((s) => s.comments);

  const [newCommentText, setNewCommentText] = useState("");

  const handleAddNewComment = async () => {
    if (newCommentText.replace(/\s/g, "").length > 0) {
      const requestBody = {
        doctorId: user?.id as number,
        projectId: submission?.projectId,
        content: newCommentText,
      };
      await addNewComment(requestBody);
      setNewCommentText("");
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleAddNewComment();
    }
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
              <Link
                to={
                  canAddComments
                    ? `/students-submissions/${submission?.submissionId}`
                    : "/submissions"
                }
              >
                <Button
                  variant="text"
                  startIcon={<ArrowBackIosIcon />}
                  size="small"
                ></Button>
              </Link>
              {comments.length === 0
                ? "No Comments Available!"
                : "Abstract- Comments and Feedbacks"}
            </Typography>
          </Grid>
          {canAddComments && (
            <Grid item xs={12}>
              <TextField
                multiline
                fullWidth
                placeholder="Write new feedback..."
                value={newCommentText}
                onChange={(event) => {
                  if (event.target.value.length <= 1000)
                    setNewCommentText(event.target.value);
                }}
                onKeyDown={handleKeyDown}
                InputProps={{
                  endAdornment: (
                    <SendIcon
                      color="primary"
                      sx={{ cursor: "pointer" }}
                      onClick={handleAddNewComment}
                    />
                  ),
                }}
              />
            </Grid>
          )}

          {comments.length >= 1 && (
            <Grid item xs={12} marginX={1}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                {comments.map((comment, index) => (
                  <Grid item xs={12} key={index}>
                    <Comment comment={comment} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Comments;
