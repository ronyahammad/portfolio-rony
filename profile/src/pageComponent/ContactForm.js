import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  makeStyles,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import Map from './Map'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    width: "80%",
    backgroundColor: "transparent",
    //opacity: ".7",
    display: "flex",
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    color: "#760B43",
    textAlign: "center",
    justifyContent: "center",
  },
}));
export default function ContactForm(){
    const classes = useStyles();

    const [dataParam, setDataParam] = useState({
      name: "",
      subject: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "Submit",
      err: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setDataParam({
        ...dataParam,
        [name]: value,
      });
    };
    const formSubmit = (e) => {
      e.preventDefault();

      setDataParam({
        ...dataParam,
        buttonText: "Sending...",
      });

      axios
        .post("/contact", dataParam)
        .then((res) => {
          if (res.data.success) {
            setDataParam({
              ...dataParam,
              sent: true,
              buttonText: "Sent",
              err: "success",
            });
            setTimeout(() => {
              resetForm();
            }, 3000);
          } else {
            setDataParam({
              ...dataParam,

              buttonText: "Failed to send",
              sent: false,
              err: "fail",
            });
            setTimeout(() => {
              resetForm();
            }, 3000);
          }
        })
        .catch((err) => {
          setDataParam({
            ...dataParam,
            buttonText: "Failed to send",
            err: "fail",
          });
        });
      const resetForm = () => {
        setDataParam({
          name: "",
          email: "",
          subject: "",
          message: "",

          sent: false,
          buttonText: "Submit",
          err: "",
        });
      };
    };


    return (
      <div className={classes.root} id="contact-page">
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs={12}>
            {" "}
            <Typography variant="h7" component="h2">
              <h5 className={classes.title}>Please Send me your feedback..</h5>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div style={{ marginBottom: "10%" }}>
              <TextField
                id="filled-multiline-flexible"
                label="Name"
                required
                name="name"
                multiline
                rowsMax={4}
                value={dataParam.name}
                onChange={handleChange}
                variant="outlined"
              />
            </div>
            <div style={{ marginBottom: "10%" }}>
              <TextField
                id="filled-multiline-flexible"
                label="Subject"
                required
                name="subject"
                multiline
                rowsMax={4}
                value={dataParam.subject}
                onChange={handleChange}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="filled-multiline-flexible"
                label="Email"
                multiline
                rowsMax={4}
                required
                name="email"
                value={dataParam.email}
                onChange={handleChange}
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div>
              <TextField
                id="filled-multiline-flexible"
                label="Write Something..."
                multiline
                rows={7}
                required
                name="message"
                value={dataParam.message}
                onChange={handleChange}
                variant="outlined"
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={formSubmit}
              className={classes.button}
            >
              {dataParam.buttonText}
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            {" "}
            <Typography>
              <span style={{ fontWeight: "bold", color: "darkred" }}>
                Address:
                <hr />
              </span>
              <p style={{ color: "#4a148c", fontSize: "1rem" }}>
                Rua Dr Faria E Silva 12, 8600-734 Lagos.
              </p>
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold", color: "darkred" }}>
                Contact Number:
                <hr />
              </span>
              <p style={{ color: "#4a148c", fontSize: "1rem" }}>
                (+351)-960007318
              </p>
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div>
              <Map />
            </div>
          </Grid>
        </Grid>
      </div>
    );
}

