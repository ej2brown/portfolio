import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'inline-block',
      // flexWrap: 'wrap',
      minWidth: 375,
      maxWidth: 845,
      padding: "10px",

    },
    list: {
      listStylePosition: "outside",
      overflow: "auto",
      '& > *': {
        // flexFlow: "row wrap"
      },

    }
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
      <ul className={classes.list}>{summary.map(point => { return <li>{point}</li> })}</ul>
    </Paper>
  );
};