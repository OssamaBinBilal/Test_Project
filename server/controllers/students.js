const bcrypt = require("bcrypt");
const Student = require("../models/student");
const { UniqueConstraintError } = require("sequelize");

async function createStudent(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
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

module.exports = {
  createStudent,
};
