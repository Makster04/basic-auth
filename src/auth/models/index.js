require("dotenv").config(); // Loading environment variables from .env file
const userSchema = require("./users-model.js"); // Importing user schema from users-model.js
const DATABASE_URL = process.env.DATABASE_URL || "sqlite::memory:"; // Setting database URL from environment variable or defaulting to sqlite in-memory database
const { Sequelize, DataTypes } = require("sequelize"); // Importing Sequelize and DataTypes from sequelize library

const sequelize = new Sequelize(DATABASE_URL); // Creating a new Sequelize instance with the provided database URL

const User = userSchema(sequelize, DataTypes); // Creating User model using the user schema

module.exports = {
  User,
  sequelize,
};





