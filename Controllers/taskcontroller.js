const mongoose = require("mongoose");
const Task = require("../models/task");

exports.createTask = async (req, res) => {
  const data = await Task.create(req.body);
  res.json(data);
};

exports.getAllTasks = async (req, res) => {
  const data = await Task.find().populate("subjectId");
  res.json(data);
};

exports.updateTask = async (req, res) => {
  const data = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
