const express = require("express");
const router = express.Router();
const {
  createStudent,
  getPaginatedStudents,
} = require("../controllers/students");
const {
  createTeacher,
  getPaginatedTeachers,
} = require("../controllers/teachers");
const { getPaginatedExams, updateExamStatus } = require("../controllers/exams");

router.post("/create-student", createStudent);
router.post("/create-teacher", createTeacher);
router.get("/get-students", getPaginatedStudents);
router.get("/get-teachers", getPaginatedTeachers);
router.get("/get-all-exams", getPaginatedExams);
router.put("/update-exam-status", updateExamStatus);

module.exports = router;
