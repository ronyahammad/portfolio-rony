import React from 'react'
import {Typography, makeStyles, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffebee",
    opacity: ".7",
  },
  title: {
    color: "#760B43",
    textAlign: "center",
    justifyContent: "center",
  },
  description: {
    color: "#261D14",

    fontWeight: "bold",
    opacity: "100%",
    textAlign: "center",
    justifyContent: "center",
  },
}));
export default function ProjectTitle() {
    const classes=useStyles()
    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h7" component="h2">
            <h4 className={classes.title}>PROJECTS</h4>
            <hr />
          </Typography>
        </Paper>
      </div>
    );
}
