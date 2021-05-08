const express = require("express");
const mongoose = require("mongoose");
const port = 4000;
const app = express();
const DB = "mongodb://localhost/NewHorizons";

const DB_ONLINE =
  "mongodb+srv://Achievers:Achievers@cluster0.xg4zd.mongodb.net/usersAuthFile?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Server is connected to MongoDB`);
  });

// app.use(express.json());
// app.use("/", require("./Component/Router"));

app.get("/api", async (req, res) => {
  res.send("HJello");
});

app.listen(port, () => {
  console.log(`App is ready for production`);
});
