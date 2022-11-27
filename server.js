const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

//Connect DB
const connectDB = require("./config/db");
connectDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With , Content-Type , Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET , POST , PUT, PATCH , DELETE , OPTIONS"
  );
  next();
});

app.use(morgan("tiny"));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the AMSL backend!");
});

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/session", require("./routes/session"));


app.listen(PORT, () => {
  console.log("Server is running on Port " + PORT);
});
