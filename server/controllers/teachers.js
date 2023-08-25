const bcrypt = require("bcrypt");
const Teacher = require("../models/teacher");
const { UniqueConstraintError } = require("sequelize");

async function createTeacher(req, res) {
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdTeacher = await Teacher.create({
      first_name: firstName,
      last_name: lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Teacher created successfully.",
      teacher: {
        first_name: createdTeacher.first_name,
        last_name: createdTeacher.last_name,
        email: createdTeacher.email,
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
  createTeacher,
};
