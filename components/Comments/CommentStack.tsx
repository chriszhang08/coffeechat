import { Paper } from '@mantine/core';
import classes from './CommentStack.module.css';
import { CommentHtml } from '@/components/Comments/CommentHtml';
import fakeComments from '@/data/mock-data/fakeComments';

export function CommentStack() {
  const comments = fakeComments.map((commentObj) => (
    <CommentHtml comment={commentObj} />
  ));

  return (
    <div>
      <h1>Reviews</h1>
      <Paper className={classes.comment}>
        {comments}
      </Paper>
    </div>
  );
}
