import React from 'react'
import { Card,CardMedia,makeStyles } from "@material-ui/core";
import image1 from '../images/pro.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media:{
    height:400,
  },
}));
export default function AboutCards1() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Card>
          <CardMedia className={classes.media} image={image1} />
        </Card>
      </div>
    );
}
