const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const MCQ = require("./mcq");

const MCQOptions = sequelize.define("MCQOptions", {
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
  option_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MCQOptions;
