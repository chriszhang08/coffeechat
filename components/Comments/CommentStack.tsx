import { Paper } from '@mantine/core';
import classes from './CommentStack.module.css';
import { CommentHtml } from '@/components/Comments/CommentHtml';

export function CommentStack() {
  return (
    <Paper className={classes.comment}>
      <CommentHtml />
      <CommentHtml />
    </Paper>
  );
}
