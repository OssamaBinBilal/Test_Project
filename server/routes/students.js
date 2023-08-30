const express = require("express");
const router = express.Router();
const {
  getPaginatedActiveExams,
  getExamQuestions,
} = require("../controllers/exams");
const {
  loginStudent,
  verifyToken,
  submitSolution,
} = require("../controllers/students");
const authenticateToken = require("../middlewares/authenticateToken");
const { authorizeAsStudent } = require("../middlewares/student/student");
const { getAccumulatedSolution } = require("../controllers/solution");

router.get("/get-active-exams", authenticateToken, getPaginatedActiveExams);
router.get("/get-exam-questions/:examId", getExamQuestions);
router.post(
  "/validate-token",
  authenticateToken,
  authorizeAsStudent,
  verifyToken
);
router.post(
  "/submit-solution",
  // authenticateToken,
  // authorizeAsStudent,
  submitSolution
);

router.get(
  "/accumulated-solution",
  authenticateToken,
  authorizeAsStudent,
  getAccumulatedSolution
);

router.post("/login", loginStudent);

module.exports = router;
