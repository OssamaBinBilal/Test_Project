const express = require("express");
const router = express.Router();
const { createExamWithQuestions } = require("../controllers/exams");

router.post("/exam", createExamWithQuestions);

module.exports = router;
