const express = require("express");
const bookData = require("./Model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const newBook = await bookData.find();
    res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const newBook = await bookData.findById(req.params.id);
    res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const newBook = await bookData.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(newBook);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const newBook = await bookData.findByIdAndDelete();
    res.status(200).send("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const createData = await bookData.create(req.body);
    res.status(201).json(createData);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
