const Teacher = require("../models/teacher");
const Admin = require("../models/admin");
const Exam = require("../models/exam");
const Question = require("../models/question");
const Mcq = require("../models/mcq");
const McqOptions = require("../models/mcq_options");
const Student = require("../models/student");
const Solution = require("../models/solution");
const TextANswer = require("../models/textAnswer");
const MCQAnswer = require("../models/mcqAnswer");

const sequelize = require("../database/database");

const initializeDatabase = async () => {
  try {
    await sequelize.sync();
  } catch (e) {
    console.log(e);
  }
};

module.exports = initializeDatabase;
