const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Exam = require("./exam");
const Student = require("./student");

const Solution = sequelize.define("Solution", {
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
  submitter_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
  },
});

module.exports = Solution;
