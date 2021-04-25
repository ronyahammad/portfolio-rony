import React from 'react'
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginLeft: "10%",
  },
}));
export default function CarouselHome() {
    const classes=useStyles()
    const items = [
      {
        name: "Responsive web design",
        description: "Responsive website design with open source framework",
      },
      {
        name: "Backend management",
        description:
          "SQL/non-SQL/PostgreSQL by python based Django and Node.js",
      },
      {
        name: "React.js Framework",
        description: "Javascript Frameworks like React.js,Gatsby for frontend",
      },
      {
        name: "UI/UX design user experience",
        description: "WebApp experience using Material-UI, Framer Motion etc",
      },
    ];

    return (
      <div className={classes.root}>
        <Carousel>
          {items.map((item, i) => (
            <div key={i} item={item}>
              <div>
                <span
                  style={{
                    color: "#760B43",
                    fontWeight: "bold",
                    opacity: ".7",
                    fontSize: "1.5rem",
                  }}
                >
                  <h1>{item.name}</h1>
                </span>
                <hr />
                <span
                  style={{
                    color: "#261D14",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  <p>{item.description}</p>
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
}
