import React from 'react'
import {  Grid, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 200,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Post({ p,link, imageUrl,title, category }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              image={p.imageUrl}
              title={p.header}
            />

            <CardActions>
              <Button
                size="small"
                style={{ fontWeight: "bold", opacity: ".7", color: "#f3e5f5" }}
                href={p.link}
              >
                {p.title}
              </Button>
              <Typography
                value="category"
                size="small"
                style={{ fontWeight: "bold", opacity: ".7", color: "#f3e5f5" }}
              >
                {p.category}
              </Typography>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </React.Fragment>
  );
}


export default function ProjectsCards({ posts = [] }) {
  
  return (
    <React.Fragment>

        {posts.map((p) => {
          return <Post key={p.header} p={p} />;
        })}
      </React.Fragment>
  );
}
