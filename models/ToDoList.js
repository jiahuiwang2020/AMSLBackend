const mongoose = require("mongoose");

const ToDoListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  todoListItems: [
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
