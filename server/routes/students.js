const express = require("express");
const router = express.Router();
const { getPaginatedActiveExams } = require("../controllers/exams");
const { createStudent } = require("../controllers/students");

router.get("/exams", getPaginatedActiveExams);
router.post("/", createStudent);

module.exports = router;
