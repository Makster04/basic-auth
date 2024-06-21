//This file handles the setup of database connections and model definitions using Sequelize, allowing for interaction with a database within the application.

// Required libraries and modules
require("dotenv").config(); // Loading environment variables
const { Sequelize, DataTypes } = require("sequelize"); // Importing Sequelize and DataTypes from sequelize library
const userSchema = require("./users-model.js"); // Importing user schema from users-model.js

// Setting up database connection
const DATABASE_URL = process.env.DATABASE_URL || "sqlite::memory:"; // Database URL from environment variable or defaulting to sqlite in-memory database
const sequelize = new Sequelize(DATABASE_URL); // Creating a new Sequelize instance with the provided database URL

// Defining User model using the user schema
const User = userSchema(sequelize, DataTypes);

// Exporting User model and Sequelize instance
module.exports = {
  User,
  sequelize,
};






