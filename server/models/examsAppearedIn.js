const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Exam = require("./Exam"); // Import the Exam model
const Student = require("./Student"); // Import the Student model

const ExamsAppearedIn = sequelize.define("ExamsAppearedIn", {
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
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: "id",
    },
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("pass", "fail", "pending"),
    allowNull: true,
  },
});

module.exports = ExamsAppearedIn;
