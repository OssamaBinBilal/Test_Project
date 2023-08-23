const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Solution = require("./solution");
const MCQ = require("./mcq");

const MCQAnswer = sequelize.define("MCQAnswer", {
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
  mcq_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: MCQ,
      key: "id",
    },
  },
  submitted_option: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MCQAnswer;
