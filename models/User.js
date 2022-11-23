const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: Date,
    requried: true,
  },
  degreeProgram: {
    type: String,
  },
  lastLogin: {
    date: {
      type: Date,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  lastSession: {
    date: {
      type: Date,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
});

module.exports = User = mongoose.model("user", UserSchema);
