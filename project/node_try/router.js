const express = require("express");
const path = express.Router();

const dataControl = require("./model");

path.get("/", async (req, res) => {
  const newData = await dataControl.find();
  res.status(200).json(newData);
});

path.get("/:id", async (req, res) => {
  const newData = await dataControl.findById(req.params.id);
  res.status(200).json(newData);
});

path.delete("/:id", async (req, res) => {
  await dataControl.findByIdAndDelete(req.params.id);
  res.status(200).send("Done");
});

path.patch("/:id", async (req, res) => {
  const newData = await dataControl.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      newData,
    },
  });
});

path.post("/", async (req, res) => {
  const newData = await dataControl.create(req.body);
  res.status(200).json(newData);
});

module.exports = path;
