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
const {
  sendInvitation,
  loginAdmin,
  verifyToken,
} = require("../controllers/admin");
const {
  authenticateToken,
  authorizeAsAdmin,
} = require("../middlewares/admin/admin");

router.post(
  "/create-student",
  authenticateToken,
  authorizeAsAdmin,
  createStudent
);
router.post(
  "/create-teacher",
  authenticateToken,
  authorizeAsAdmin,
  createTeacher
);
router.get(
  "/get-students",
  authenticateToken,
  authorizeAsAdmin,
  getPaginatedStudents
);
router.get(
  "/get-teachers",
  authenticateToken,
  authorizeAsAdmin,
  getPaginatedTeachers
);
router.get(
  "/get-all-exams",
  authenticateToken,
  authorizeAsAdmin,
  getPaginatedExams
);
router.put(
  "/update-exam-status",
  authenticateToken,
  authorizeAsAdmin,
  updateExamStatus
);
router.post("/send-invitation", sendInvitation);
router.post("/login", loginAdmin);
router.post(
  "/validate-token",
  authenticateToken,
  authorizeAsAdmin,
  verifyToken
);

module.exports = router;
