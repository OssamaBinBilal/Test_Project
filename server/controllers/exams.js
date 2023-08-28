const Exam = require("../models/exam");
const { Op } = require("sequelize");
const MCQOption = require("../models/mcq_options");
const MCQ = require("../models/mcq");
const TextQuestion = require("../models/question");
const Teacher = require("../models/teacher");

async function getPaginatedActiveExams(req, res) {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const currentDate = new Date();
  try {
    const exams = await Exam.findAll({
      where: {
        status: "approved",
        start_time: {
          [Op.lte]: currentDate,
        },
        end_time: {
          [Op.gte]: currentDate,
        },
      },
      offset: (page - 1) * perPage,
      limit: perPage,
    });
    const total_exams = await Exam.count({
      where: {
        status: "approved",
        start_time: {
          [Op.lte]: currentDate,
        },
        end_time: {
          [Op.gte]: currentDate,
        },
      },
    });
    res.json({ exams, total_exams });
  } catch (error) {
    console.error("Error retrieving paginated approved exams:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getPaginatedExams(req, res) {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  try {
    const exams = await Exam.findAll({
      offset: (page - 1) * perPage,
      limit: perPage,
    });
    const total_exams = await Exam.count();
    res.json({ exams, total_exams });
  } catch (error) {
    console.error("Error retrieving paginated approved exams:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createExamWithQuestions(req, res) {
  const { creatorId, startTime, endTime, subject, textQuestions, mcqs } =
    req.body;

  try {
    const createdExam = await Exam.create({
      creator_id: creatorId,
      start_time: startTime,
      end_time: endTime,
      subject,
      status: "pending",
    });

    for (const textQuestion of textQuestions) {
      await TextQuestion.create({
        exam_id: createdExam.id,
        question_text: textQuestion.questionText,
        correct_answer: textQuestion.correctAnswer,
        max_score: textQuestion.maxScore,
      });
    }

    for (const mcq of mcqs) {
      const createdMCQ = await MCQ.create({
        exam_id: createdExam.id,
        question_statement: mcq.questionText,
        correct_answer: mcq.correctAnswer,
        max_score: mcq.maxScore,
      });
      for (const option of mcq.options) {
        await MCQOption.create({
          mcq_id: createdMCQ.id,
          option_text: option.optionText,
        });
      }
    }

    res
      .status(201)
      .json({ message: "Exam and questions created successfully." });
  } catch (error) {
    console.error("Error creating exam with questions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateExamStatus(req, res) {
  const { id, status } = req.body;

  try {
    const exam = await Exam.findByPk(id);

    if (!exam) {
      return res
        .status(404)
        .json({ error: "There exists no exam with the given id" });
    }

    await exam.update({ status });

    return res
      .status(200)
      .json({ message: "Exam status updated successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the exam status" });
  }
}

module.exports = {
  updateExamStatus,
};

module.exports = {
  getPaginatedActiveExams,
  createExamWithQuestions,
  getPaginatedExams,
  updateExamStatus,
};
