import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'inline-block',
      // display: "flex",
      // textAlign: "-webkit-center",
      // textAlign: "-moz-initial",
      // textAlign: "justify",

      // textAlign: "center",
      minWidth: 375,
      maxWidth: 845,
      padding: "10px",
      // alignContent: "center"
    },
  }),
);
type PaperProps = {
  institute: string,
  degree: string,
  alt: string,
  img: string
}
export default function EduationPaper({ institute, degree, alt, img }: PaperProps) {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <h3>{institute}</h3>
      <div>{degree}</div>
      <img src={img} alt={alt} width="150" height="50"></img>
      <br />
    </Paper>
  );
};