const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Solution = require("./solution");
const Question = require("./question");

const TextAnswer = sequelize.define("TextAnswer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  solution_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Solution,
      key: "id",
    },
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Question,
      key: "id",
    },
  },
  submitted_answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = TextAnswer;
