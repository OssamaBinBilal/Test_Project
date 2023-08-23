const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Exam = require("./exam");

const MCQ = sequelize.define("MCQ", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  exam_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Exam,
      key: "id",
    },
  },
  max_score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  correct_answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MCQ;
