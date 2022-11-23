const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Tool = mongoose.model("tool", ToolSchema);
