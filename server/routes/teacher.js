const express = require("express");
const router = express.Router();
const {
  createExamWithQuestions,
  getExamsForTeacher,
} = require("../controllers/exams");
const { loginTeacher, verifyToken } = require("../controllers/teachers");
const authenticateToken = require("../middlewares/authenticateToken");
const { authorizeAsTeacher } = require("../middlewares/teacher/teacher");
const {
  getSolutions,
  getSolutionsByExamId,
  getAccumulatedSolution,
} = require("../controllers/solution");

router.post(
  "/create-exam",
  authenticateToken,
  authorizeAsTeacher,
  createExamWithQuestions
);
router.post(
  "/validate-token",
  authenticateToken,
  authorizeAsTeacher,
  verifyToken
);

router.get(
  "/get-solutions",
  authenticateToken,
  authorizeAsTeacher,
  getSolutions
);

router.get(
  "/get-exams",
  authenticateToken,
  authorizeAsTeacher,
  getExamsForTeacher
);

router.get(
  "/exam/:examId/solutions",
  authenticateToken,
  authorizeAsTeacher,
  getSolutionsByExamId
);

router.get(
  "/accumulated-solution",
  authenticateToken,
  authorizeAsTeacher,
  getAccumulatedSolution
);

router.post("/login", loginTeacher);

module.exports = router;
