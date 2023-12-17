import { Avatar, Divider, Grid, Stack, Typography } from "@mui/material";
import { AbstractComment } from "../constants/comments";

interface Props {
  comment: AbstractComment;
}

const Comment = ({ comment }: Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction="row" spacing={2}>
          <Avatar alt={comment.name} src={comment.avatar} />
          <Stack>
            <Typography fontWeight={500}>
              {comment.name}
              <Typography color="gray" variant="caption" fontSize={16}>
                {" • "}
                {comment.date}
              </Typography>
            </Typography>
            <Typography variant="caption">{comment.position}</Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} marginTop={1}>
        <Typography>{comment.content}</Typography>
      </Grid>
      <Grid item xs={12} marginTop={3}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default Comment;
