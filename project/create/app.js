const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 2100;
const cors = require("cors");
const app = express();
const DB1 = "mongodb://localhost/software";
const DB =
  "mongodb+srv://Achievers:Achievers@cluster0.xg4zd.mongodb.net/software?retryWrites=true&w=majority";

mongoose
  .connect(DB1, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase Successfully....!");
  });

app.use(express.json());
app.use(cors());
const structure = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});
const myData = mongoose.model("softwares", structure);

app.post("/", async (req, res) => {
  // const newData = await myData.create(req.body);
  res.json("Hello");
});

app.get("/", async (req, res) => {
  const newData = await myData.find();
  res.json(newData);
});

app.get("/:id", async (req, res) => {
  const newData = await myData.findById(req.params.id);
  res.json(newData);
});

app.patch("/:id", async (req, res) => {
  const newData = await myData.findByIdAndUpdate(req.params.id, req.body);
  res.json(newData);
});

app.delete("/:id", async (req, res) => {
  const newData = await myData.findByIdAndDelete(req.params.id, req.body);
  res.json(newData);
});

app.listen(port, () => {
  console.log(`${port}`);
});
