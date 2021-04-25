import React from 'react'
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import AboutTitle from '../pageComponent/AboutTitle'
import AboutCards1 from "../pageComponent/AboutCards1";
import AboutCards2 from "../pageComponent/AboutCards2";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import useWindowPosition from "./useWindowPosition";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: theme.spacing(2),
  },
  goDown: {
    color: "#760B43",
    align: "center",
    fontSize: "3rem",
  },
}));
export default function About() {
    const classes = useStyles();
    const checked = useWindowPosition("header"); 
    return (
      <div className={classes.root} id="about-page">
        <Grid
          justifyContent="center"
          alignItems="center"
          style={{ width: "80%" }}
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <AboutTitle checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fade left>
              <AboutCards1 checked={checked} />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fade right>
              <AboutCards2 checked={checked} />
            </Fade>
          </Grid>
          <div style={{ marginLeft: "50%" }}>
            <Scroll to="projects-page" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </Grid>
      </div>
    );
    
}
