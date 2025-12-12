require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const studentRoutes = require("./routes/studentRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());
app.use(helmet());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("DB Error", err));

app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);
app.use("/tasks", taskRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log("Server running at http://localhost:3000"));
