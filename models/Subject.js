const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  plannedDate: {
    type: Date,
    requried: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  tools: [
    {
      tool: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tool",
      },
    },
  ],
  location: {
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Subject = mongoose.model("subject", SubjectSchema);
