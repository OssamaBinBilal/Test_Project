const Exam = require("../models/exam");
const MCQ = require("../models/mcq");
const MCQAnswer = require("../models/mcqAnswer");
const MCQOptions = require("../models/mcq_options");
const Question = require("../models/question");
const Solution = require("../models/solution");
const Teacher = require("../models/teacher");
const TextAnswer = require("../models/textAnswer");
const jwt = require("jsonwebtoken");
const calculateStringSimilarityScore = require("../utils/calculateQuestionScore");

const SECRET_KEY = "@#$%^&*()_-+=<>?";

async function getSolutionsByExamId(req, res) {
  const examId = req.params.examId;
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const solutions = await Solution.findAndCountAll({
      where: { exam_id: examId },
      offset: (page - 1) * pageSize,
      limit: pageSize,
    });

    res.json({
      solutions: solutions.rows,
      totalCount: solutions.count,
      currentPage: page,
      totalPages: Math.ceil(solutions.count / pageSize),
    });
  } catch (error) {
    console.error("Error retrieving solutions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

const getAccumulatedSolution = async (req, res) => {
  try {
    const solution_id = req.query.solutionId;
    let totalExamScore = 0;

    const solution = await Solution.findOne({
      where: { id: solution_id },
    });

    if (!solution) {
      return res.status(404).json({ message: "Solution not found" });
    }

    const examId = solution.exam_id;

    const mcqs = await MCQ.findAll({
      where: { exam_id: examId },
    });

    for (const mcq of mcqs) {
      const mcqOptions = await MCQOptions.findAll({
        where: { mcq_id: mcq.id },
      });
      mcq.dataValues.options = mcqOptions.map((option) => option.option_text);

      const mcqAnswer = await MCQAnswer.findOne({
        where: { mcq_id: mcq.id, solution_id: solution.id },
      });
      mcq.dataValues.userAnswer = mcqAnswer.submitted_option;
      mcq.dataValues.obtainedScore =
        mcq.userAnswer === mcq.correct_answer ? mcq.max_score : 0;
      if (mcq.userAnswer === mcq.correct_answer)
        totalExamScore += Number(mcq.max_score);
    }

    const textQuestions = await Question.findAll({
      where: { exam_id: examId },
    });

    for (const textQuestion of textQuestions) {
      const textAnswer = await TextAnswer.findOne({
        where: { question_id: textQuestion.id, solution_id: solution.id },
      });
      textQuestion.dataValues.userAnswer = textAnswer.submitted_answer;
      textQuestion.dataValues.obtainedScore = calculateStringSimilarityScore(
        textQuestion.correct_answer,
        textAnswer.submitted_answer,
        textQuestion.max_score
      );
      totalExamScore += Number(
        calculateStringSimilarityScore(
          textQuestion.correct_answer,
          textAnswer.submitted_answer,
          textQuestion.max_score
        )
      );
    }

    return res.status(200).json({ mcqs, textQuestions, totalExamScore });
  } catch (error) {
    console.error("Error retrieving solution:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getSolutions = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, SECRET_KEY);

    const teacherId = decodedToken.teacherId;

    const teacher = await Teacher.findByPk(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    const teacherExams = await Exam.findAll({
      where: {
        creator_id: teacherId,
      },
      attributes: ["id"],
    });

    const solutions = await Solution.findAll({
      where: {
        exam_id: teacherExams.map((exam) => exam.id),
      },
    });

    res.status(200).json({ solutions });
  } catch (error) {
    console.error("Error retrieving solutions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getSolutionsByExamId,
  getSolutions,
  getAccumulatedSolution,
};
