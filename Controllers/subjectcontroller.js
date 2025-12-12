const mongoose = require("mongoose");
const Subject = require("../models/subject");

exports.createSubject = async (req, res) => {
  const data = await Subject.create(req.body);
  res.json(data);
};

exports.getAllSubjects = async (req, res) => {
  const data = await Subject.find().populate("studentId");
  res.json(data);
};

exports.updateSubject = async (req, res) => {
  const data = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

exports.deleteSubject = async (req, res) => {
  await Subject.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
