import React, { useState } from "react";
import { Button,Grid, makeStyles } from "@material-ui/core";
import ProjectCards from './ProjectsCards'
import image1 from '../images/django blog.jpg'
import image2 from "../images/shorty.JPG";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: "#fce4ec",
    opacity:'.6',
  },
  paper: {
    textAlign: "center",
    backgroundColor: "transparent",
    color: theme.palette.text.secondary,
  },
}));
const posts = [
  {
    imageUrl:image1,
    link: "https://blog-2020-django.herokuapp.com/",
    title: "Blog",
    category: "Django",
  },
  {
    imageUrl:image2,
    link: "https://blog-2020-django.herokuapp.com/",
    title: "Portfolio",
    category: "Reactjs",
  },
];

export default function ProjectButtons() {
    const classes= useStyles()
    const [productItems, setProductItems] = useState(posts);
    function handleButton(e) {
      if (e.currentTarget.value === "All") {
        setProductItems(posts);
      } else {
        setProductItems(
          posts.filter((item) => item.category === e.currentTarget.value)
        );
      }
    }
    return (
      <React.Fragment>
        <div className={classes.paper}>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            value="All"
            onClick={(e) => handleButton(e)}
          >
            All
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            value="Django"
            onClick={(e) => handleButton(e)}
          >
            Django
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="secondary"
            value="Reactjs"
            onClick={(e) => handleButton(e)}
          >
            Reactjs
          </Button>
        </div>
        <hr />
        <div>
          <Grid container spacing={3}>
            <ProjectCards posts={productItems} handleButton={handleButton} />
          </Grid>
        </div>
      </React.Fragment>
    );
}
