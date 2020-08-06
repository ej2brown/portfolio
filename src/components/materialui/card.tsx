import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {
    // fontSize: 14,
  },
  paragraph: {
    fontSize: 14,
  },
});

type CardProps = {
  title: string,
  paragraph: string,
  link: string,
  img: string
};

export default function SimpleCard({ title, paragraph, link, img }: CardProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      {img && <CardMedia className={classes.media} component="img" image={img} alt={title} title={title} />}
      <CardContent>
        {title && <Typography className={classes.title} gutterBottom variant="h5" component="h2" >{title}</Typography>}
        {paragraph && <Typography className={classes.paragraph} >{paragraph}</Typography>}
      </CardContent>
      {link && <CardActions><Button size="small" color="primary" href={link || "#"}>Learn More</Button></CardActions>}
    </Card>
  )
};