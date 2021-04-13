const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
    default: "Mr",
  },
  name: {
    required: true,
    type: String,
  },
  date: {
    default: Date.now,
    type: Date,
  },
});

module.exports = mongoose.model("DataControl", dataSchema);
