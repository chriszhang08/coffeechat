import { Paper } from '@mantine/core';
import classes from './CommentStack.module.css';
import { CommentHtml } from '@/components/Comments/CommentHtml';
import fakeComments from '@/data/mock-data/fakeComments';

export function CommentStack() {
  const comments = fakeComments.map((commentObj) => (
    <CommentHtml comment={commentObj} />
  ));

  return (
    <Paper className={classes.comment}>
      <h1>Reviews</h1>
      {comments}
    </Paper>
  );
}
