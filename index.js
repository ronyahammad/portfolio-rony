const express = require("express");
const router = express.Router();
const cors = require("cors"); 
const app = express();
const sgMail = require("@sendgrid/mail");
const path = require('path');
require("dotenv").config();

app.use(express.json());
app.use("/", router);
 app.use(cors()); 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

sgMail.setApiKey(process.env.DB_API);
app.post("/contact", (req,res,next) => {
  //console.log(req.body);
const name = req.body.name;
const email = req.body.email;
const subject=req.body.subject;
const message = req.body.message;
  const msg = {
   to: "iamrony@gmail.com", //receiver's email
    from: email, // Change to your verified sender
    subject: subject,
    text: "testing from local",
    html: `<p>Name: ${name}</p> sends a message from <p>Email: ${email}</p>: <br/><p>Message: ${message}</p>`,

  };

  sgMail
    .send(msg)
    .then((result) => {
      res.json({success: true});
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("Error")
    });


});

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'profile/build')));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + 'profile/build/index.html'));
  });
}


app.listen(PORT, (req,res) => console.log("running on Port " + PORT));