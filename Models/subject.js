const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    code: { type: String, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    apiURL: { type: String, default: "http://localhost:3000/subjects" }
  },
  { collection: "subjects" }
);

module.exports = mongoose.model("Subject", subjectSchema);
