const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    requried: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
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
