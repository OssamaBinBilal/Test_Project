const express = require("express");
const app = express();
const kekw = require("./routes/kekw");
const sequelize = require("./database/database");

const Teacher = require("./models/teacher");
const Admin = require("./models/admin");
const Exam = require("./models/exam");
const Question = require("./models/question");
const Mcq = require("./models/mcq");
const McqOptions = require("./models/mcq_options");
const Student = require("./models/student");
const Solution = require("./models/solution");
const TextANswer = require("./models/textAnswer");
const MCQAnswer = require("./models/mcqAnswer");

app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("Database synced with the app");
  })
  .catch(() => {
    console.log("Error syncing the database");
  });

app.use("/kekw", kekw);

app.get("/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

app.post("/teachers", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const newTeacher = await Teacher.create({
      first_name: "first_name",
      last_name: "last_name",
      email: "kekw@gmail.com",
      password: "1234",
    });

    res.status(201).json(newTeacher);
  } catch (error) {
    console.error("Error creating teacher:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the teacher." });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
