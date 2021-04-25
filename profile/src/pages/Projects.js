import React from 'react'
import { Grid,IconButton,  makeStyles } from "@material-ui/core";
import ProjectTitle from '../pageComponent/ProjectTitle'
import ProjectButtons from '../pageComponent/ProjectButtons'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import useWindowPosition from "./useWindowPosition";
import Pulse from "react-reveal/Pulse";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  goDown: {
    color: "#760B43",
    align: "center",
    fontSize: "3rem",
  },
}));
export default function Projects() {
  const classes = useStyles();
  const checked = useWindowPosition("about-page");
  return (
    <React.Fragment>
      <div className={classes.root} id="projects-page">
        <Grid
          justifyContent="center"
          alignItems="center"
          style={{ width: "80%" }}
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <Pulse>
              <ProjectTitle checked={checked} />
            </Pulse>
          </Grid>
          <Grid item xs={12}>
            <Pulse>
              <ProjectButtons checked={checked} />
            </Pulse>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginLeft: "50%" }}>
        <Scroll to="contact-page" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </div>{" "}
    </React.Fragment>
  );
}
