const express = require("express");
const router = express.Router();
const {
  getPaginatedActiveExams,
  getExamQuestions,
} = require("../controllers/exams");

router.get("/get-active-exams", getPaginatedActiveExams);
router.get("/get-exam-questions/:examId", getExamQuestions);

module.exports = router;
