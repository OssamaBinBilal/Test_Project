const express = require("express");
const router = express.Router();
const { getPaginatedActiveExams } = require("../controllers/exams");

router.get("/get-active-exams", getPaginatedActiveExams);

module.exports = router;
