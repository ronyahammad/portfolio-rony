import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, CssBaseline } from "@material-ui/core";
import image from "./images/sized_bg.jpg";
import Loader from "./images/loader.gif";
import Header from "./pages/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pageComponent/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    backgroundImage: `url(${image})`,
  },
}));
export default function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  useEffect(() => {
    document.title = "Ali Ahammad Portfolio";
  });
  useEffect(() => {
    document.title = "Ali Ahammad Portfolio";
  });
  return (
    <div>
      {loading === false ? (
        <div>
          <Paper className={classes.root}>
            <CssBaseline />
            <Header />
            <About />
            <Projects />
          </Paper>
          <Contact />
          <div
            style={{
              display: "block",

              height: "60px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      ) : (
        <div>
          <img src={Loader} width="100%" height="100%" alt="loading..." />
        </div>
      )}
    </div>
  );
}
