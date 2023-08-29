const express = require("express");
const router = express.Router();
const { createExamWithQuestions } = require("../controllers/exams");
const { loginTeacher, verifyToken } = require("../controllers/teachers");
const authenticateToken = require("../middlewares/authenticateToken");
const { authorizeAsTeacher } = require("../middlewares/teacher/teacher");

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

router.post("/login", loginTeacher);

module.exports = router;
