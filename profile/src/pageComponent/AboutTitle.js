import React from 'react'
import {Paper,Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#9B9081",
    opacity: ".7",
  },
  title: {
    color: "#760B43",
    textAlign: "center",
    justifyContent: "center",
  },
}));
export default function AboutTitle() {
    const classes=useStyles()
    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h7" component="h2">
            <h2 className={classes.title}>EDUCATION AND EXPERIENCES</h2>
          </Typography>
          <hr />
        </Paper>
      </div>
    );
}
