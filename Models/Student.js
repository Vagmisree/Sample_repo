const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    apiURL: { type: String, default: "http://localhost:3000/students" }
  },
  { collection: "students" }
);

module.exports = mongoose.model("Student", studentSchema);
