import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#ffffffd8",
      padding: 20,
    },
    content: {
      //   opacity: "1",
    },
  }),
);
type PaperProps = {
  institute: string,
  degree: string,
  alt: string,
  img: string
}
export default function About() {
  const classes = useStyles();

  return (
    <section id="about">
      <Paper elevation={3} className={classes.root}>
      <h3>About Me</h3>
        <div className="grid-container">
          {/* <i className="fa fa-user-circle fa-5x" aria-hidden="true"></i> */}
          <img src="images/profile.jpg" width="180" height="230" alt="profile-pic"></img>
          <p> Who am I? A driven problem-solver with a knack to think outside the box.
          I bring my passion, grit, and working culture experience to the team!
          I completed the Lighthouse Labs bootcamp,
          where I excelled and really found my stride.
          I enjoyed it so much that I currently work there as a mentor.
          I'm eager to learn and explore new trends in the technology industry
          and I hope my ever-growing list of side projects reflects that. </p>

          <div className="social-links flex-container">
            <ul className="contact-info" aria-label="Contact Details">
              <li>(416)-859-6185</li>
              <li>elizabethjbrown78@gmail.com</li>
              <li>Toronto, Ontario</li>
            </ul>
            <div>
              <ul className="social-icons">
                <li><a href="google.com"><i className="fa fa-linkedin fa-2x" /></a></li>
                <li><a href="google.com"><i className="fa fa-google-plus  fa-2x" /></a></li>
                <li><a href="google.com"><i className="fa fa-github  fa-2x" /></a></li>
              </ul>
              <a href="https://www.canva.com/design/DAEFpUcNSgA/ww2mf8nSywBjQZ6IvMZhMw/view?utm_content=DAEFpUcNSgA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="resume-btn">
                Download Resume</a>
            </div>
          </div>
        </div>
      </Paper>

    </section >
  )
};