import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { comments } from "../constants/comments";
import Comment from "./Comment";

const Comments = () => {
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
              {comments.length === 0
                ? "No Comments Available!"
                : "Abstract- Comments and Feedbacks"}
            </Typography>
          </Grid>

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
