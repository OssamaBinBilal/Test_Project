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

async function getPaginatedTeachers(req, res) {
  const page = req.query.page || 1;
  const pageSize = 10;

  try {
    const teachers = await Teacher.findAll({
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });
    const total_teachers = await Teacher.count();
    res.status(200).json({ teachers, total_teachers });
  } catch (error) {
    console.error("Error fetching paginated teachers for admin:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createTeacher,
  getPaginatedTeachers,
};
