require("dotenv").config();
const userSchema = require("./users-model.js");
const DATABASE_URL = process.env.DATABASE_URL || "sqlite::memory:";
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL);

const User = userSchema(sequelize, DataTypes);

module.exports = {
  User,
  sequelize,
};