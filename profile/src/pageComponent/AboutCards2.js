import React from "react";
import {makeStyles } from "@material-ui/core";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@material-ui/icons/Work';
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 400,
  },
  paper: {
    padding: "6px 16px",
    backgroundColor: "#9B9081",
    opacity: ".7",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
export default function AboutCards2() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              color="black"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              2004 <hr />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography style={{ color: "#760B43", fontSize: "12px" }}>
                CUET
              </Typography>
              <Typography style={{ color: "#231009", fontSize: "12px" }}>
                B.Sc. in Electrical & Electronics engineering{" "}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              color="black"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              2006
              <hr />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <WorkIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography style={{ color: "#760B43", fontSize: "12px" }}>
                CSB News LTd
              </Typography>
              <Typography style={{ color: "#231009", fontSize: "12px" }}>
                Worked as Maintenance Engineer!
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              color="black"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              2007
              <hr />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography style={{ color: "#760B43", fontSize: "12px" }}>
                Grameenphone LTd
              </Typography>
              <Typography style={{ color: "#231009", fontSize: "12px" }}>
                Worked as System Engineer
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              color="black"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              2009
              <hr />
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <AccountBalanceIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography style={{ color: "#760B43", fontSize: "12px" }}>
                MidSweden University
              </Typography>
              <Typography style={{ color: "#231009", fontSize: "12px" }}>
                Masters in Electronics Design(not completed)!
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
