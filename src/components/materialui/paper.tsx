import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      // flexWrap: 'wrap',
      minWidth: 275,
      maxWidth: 345,
      padding: "10px",
      // '& > *': {
      //   margin: theme.spacing(1),
      //   width: theme.spacing(16),
      //   height: theme.spacing(16),
      // },
    },
  }),
);
type PaperProps = {
  institute: string,
  degree: string,
  alt: string,
  img: string
}
export default function SimplePaper({ institute, degree, alt, img }: PaperProps) {
  const classes = useStyles();

  return (
      <Paper elevation={3} className={classes.root}>
        <h3>{institute}</h3>
        <div>{degree}</div>
        <img src={img} alt={alt} width="150" height="50"></img>
      </Paper>
  );
};