const mongoose = require("mongoose");

const ToDoListItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "session",
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subject",
  },
  title: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
  },
  executionDate: {
    type: Date,
  },
  dueDate: {
    type: Date,
  },
  location: {
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
  },
  subItems: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "todo-list-item",
        required: true,
      },
    },
  ],
});

module.exports = Subject = mongoose.model("todo-list", ToDoListSchema);
