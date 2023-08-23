const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const MCQ = require("./mcq");

const MCQ_Options = sequelize.define("MCQ_Options", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  mcq_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: MCQ,
      key: "id",
    },
  },
  correct_option: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MCQ_Options;
