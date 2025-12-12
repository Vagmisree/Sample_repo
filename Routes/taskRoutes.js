const express = require("express");
const mongoose = require("mongoose");
const Task = require("../models/task");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = await Task.create(req.body);
  res.json(data);
});

router.get("/", async (req, res) => {
  const data = await Task.find().populate("subjectId");
  res.json(data);
});

router.put("/:id", async (req, res) => {
  const data = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
