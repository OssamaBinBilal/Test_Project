const bcrypt = require("bcrypt");
const Student = require("../models/student");
const jwt = require("jsonwebtoken");
const { UniqueConstraintError } = require("sequelize");
const Solution = require("../models/solution");
const MCQAnswer = require("../models/mcqAnswer");
const TextAnswer = require("../models/textAnswer");

const SECRET_KEY = "@#$%^&*()_-+=<>?";

async function createStudent(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    console.log(req.body);

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdStudent = await Student.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Student created successfully.",
      student: {
        first_name: createdStudent.first_name,
        last_name: createdStudent.last_name,
        email: createdStudent.email,
      },
    });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      res.status(400).json({ error: "Email already exists." });
    } else {
      console.error("Error creating student:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

async function getPaginatedStudents(req, res) {
  const page = req.query.page || 1;
  const pageSize = 10;
  try {
    const students = await Student.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
    const total_students = await Student.count();
    res.status(200).json({ students, total_students });
  } catch (error) {
    console.error("Error fetching paginated students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function loginStudent(req, res) {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ where: { email } });

    if (!student) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { studentId: student.id, email: email },
      SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function submitSolution(req, res) {
  const { examId, mcqs, questions } = req.body;

  const authToken = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(authToken, SECRET_KEY);

    const newSolution = await Solution.create({
      exam_id: examId,
      submitter_id: decodedToken.studentId,
    }).catch((error) => {
      throw new Error("Error creating solution: " + error.message);
    });

    const mcqAnswersPromises = mcqs.map(async (mcq) => {
      try {
        await MCQAnswer.create({
          solution_id: newSolution.id,
          mcq_id: mcq.id,
          submitted_option: mcq.answer,
        });
      } catch (error) {
        throw new Error("Error creating MCQAnswer: " + error.message);
      }
    });

    const textAnswerPromises = questions.map(async (question) => {
      try {
        await TextAnswer.create({
          solution_id: newSolution.id,
          question_id: question.id,
          submitted_answer: question.answer,
        });
      } catch (error) {
        throw new Error("Error creating TextAnswer: " + error.message);
      }
    });

    await Promise.all(mcqAnswersPromises);
    await Promise.all(textAnswerPromises);

    res.status(201).json({
      message: "Solution created successfully.",
    });
  } catch (error) {
    console.error("Error creating solution:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function verifyToken(req, res) {
  res.status(200).json({ message: "Valid Token" });
}

module.exports = {
  createStudent,
  getPaginatedStudents,
  loginStudent,
  verifyToken,
  submitSolution,
};
