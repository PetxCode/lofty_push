const express = require("express");
const app = express();
const port = 44100;
const mongoose = require("mongoose");
// const url = "mongodb://localhost/studyDB";

const url =
  "mongodb+srv://Achievers:Achievers@cluster0.xg4zd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, () => {
  useNewUrlParser: true;
  useUnifiedTopology: true;
});
const Awesome = require("./router");

const start = mongoose.connection;

start.on("open", () => {
  console.log("DataBase is Connected");
});

app.use(express.json());

app.use("/", Awesome);

app.listen(port, () => {
  console.log(`${port}`);
});
