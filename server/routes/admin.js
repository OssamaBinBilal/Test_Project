const express = require("express");
const router = express.Router();
const {
  createStudent,
  getPaginatedStudents,
} = require("../controllers/students");
const { createTeacher } = require("../controllers/teachers");

router.post("/create-student", createStudent);
router.post("/create-teacher", createTeacher);
router.get("/get-students", getPaginatedStudents);

// router.post("/", postAdmin);
// router.put("/", putAdmin);
// router.delete("/", deleteAdmin);

module.exports = router;
