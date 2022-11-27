const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subject",
  },
  tools: [
    {
      tool: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tool",
      },
    },
  ],
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

module.exports = Session = mongoose.model("session", SessionSchema);
