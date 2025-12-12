const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    apiURL: { type: String, default: "http://localhost:3000/tasks" }
  },
  { collection: "tasks" }
);

module.exports = mongoose.model("Task", taskSchema);
