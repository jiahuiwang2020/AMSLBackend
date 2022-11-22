const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// //Connect DB
const connectDB = require("./config/db");
// connectDB();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With , Content-Type , Accept"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET , POST , PUT, PATCH , DELETE , OPTIONS"
//   );
//   next();
// });

// app.use(morgan("tiny"));
// app.use(express.json({ extended: false }));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  //console.log(req);
  res.send("Welcome board!");
});

app.post("/", function(req,res){
  //console.log(req.body);
});

app.listen(5001, () => {
  console.log("Server is running on Port 5001");
});
