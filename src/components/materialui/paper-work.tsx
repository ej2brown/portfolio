import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      maxWidth: 345,
      padding: "10px",
    },
  }),
);

type PaperProps = {
  company: string,
  title: string,
  summary: string[]
};

export default function SimplePaper({ company, title, summary }: PaperProps) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <h3>{company}</h3>
      <div>{title}</div>
      <ul>{summary.map(point => { return <li>{point}</li> })}</ul>
    </Paper>
  );
};