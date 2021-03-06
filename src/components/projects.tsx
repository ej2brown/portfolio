import React from 'react';
// import Card from "./materialui/projectCard";
import { projects } from "./data/projects";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // minWidth: 375,
    // maxWidth: 445,
  },
  media: {
    height: 400,
  },
  title: {
    // fontSize: 14,
  },
  stack: {
    fontSize: 13,
    left: 0,
    textAlign: "left",
    fontWeight: 'bold'
    // float: "left"
  },
  paragraph: {
    fontSize: 16,
  },
});

interface iProjects {
  title: string,
  paragraph: string,
  link: string,
  img: string,
  frontEnd: string,
  backEnd: string,
  date: string,
  highlight: string
};

export default function Projects() {

  const classes = useStyles();
  const ProjectCard = ({ title, paragraph, link, img, frontEnd, backEnd, date, highlight }: iProjects) => {
    return (
      <Card className="card">
        {img &&
          <CardMedia className={classes.media} component="img" image={img} alt={title} title={title}
          />}
        <CardContent>
          {title &&
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{title}
            </Typography>}
          {paragraph &&
            <Typography className={classes.paragraph} >{paragraph}
            </Typography>}
          <br />
          {frontEnd &&
            <Typography className={classes.stack}>
              <i className="fa fa-desktop" aria-hidden="true"></i> Front-end: {frontEnd}
            </Typography>}
          {backEnd &&
            <Typography className={classes.stack}>
              <i className="fa fa-database" aria-hidden="true"></i> Back-end: {backEnd}
            </Typography>}
          {date &&
            <Typography className={classes.stack}>
              <i className="fa fa-calendar" aria-hidden="true"></i> Date: {date}
            </Typography>}
          {highlight &&
            <Typography className={classes.stack} >
              <i className="fa fa-asterisk" aria-hidden="true"></i> Hightlight: {highlight}
            </Typography>}
        </CardContent>
        {link &&
          <CardActions>
            <Button size="small" color="primary" href={link || "#"}>
              <i className="fa fa-link" aria-hidden="true"></i> Learn More
            </Button>
          </CardActions>}
      </Card>
    )
  };
  
  return (
    <section id="projects">
      <h1>Projects</h1>
      {projects.map((project: iProjects, index: number) => {
        return <ProjectCard
          key={index}
          title={project.title}
          paragraph={project.paragraph}
          link={project.link}
          img={project.img}
          frontEnd={project.frontEnd}
          backEnd={project.backEnd}
          date={project.date}
          highlight={project.highlight} />
      })}
    </section>
  )
};