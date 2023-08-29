const MCQ = require("../models/mcq");
const MCQAnswer = require("../models/mcqAnswer");
const MCQOptions = require("../models/mcq_options");
const Question = require("../models/question");
const Solution = require("../models/solution");
const TextAnswer = require("../models/textAnswer");

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
    }

    const textQuestions = await Question.findAll({
      where: { exam_id: examId },
    });

    for (const textQuestion of textQuestions) {
      const textAnswer = await TextAnswer.findOne({
        where: { question_id: textQuestion.id, solution_id: solution.id },
      });
      textQuestion.dataValues.userAnswer = textAnswer.submitted_answer;
    }

    return res.status(200).json({ mcqs, textQuestions });
  } catch (error) {
    console.error("Error retrieving solution:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getSolutionsByExamId,
  getAccumulatedSolution,
};
