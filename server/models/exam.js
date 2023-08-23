const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Teacher = require("./teacher");

const Exam = sequelize.define("Exam", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  creator_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Teacher,
      key: "id",
    },
  },
  start_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("approved", "rejected", "pending"),
    allowNull: false,
  },
});

module.exports = Exam;
