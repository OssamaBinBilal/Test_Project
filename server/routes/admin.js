const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

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
  createUser,
} = require("../controllers/admin");
const { authorizeAsAdmin } = require("../middlewares/admin/admin");
const authenticateToken = require("../middlewares/authenticateToken");
const {
  getSolutionsByExamId,
  getAccumulatedSolution,
} = require("../controllers/solution");

router.post(
  "/create-student",
  upload.single("image"),
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
router.get(
  "/exam/:examId/solutions",
  authenticateToken,
  authorizeAsAdmin,
  getSolutionsByExamId
);

router.get(
  "/accumulated-solution",
  authenticateToken,
  authorizeAsAdmin,
  getAccumulatedSolution
);

module.exports = router;
