// Overall, this file establishes endpoints for user authentication, providing routes for signing up and signing in users, and exports them for use in the application.

'use strict';

// Required libraries
const bcrypt = require("bcrypt"); // For password hashing
const base64 = require("base-64"); // For decoding

// Required models and instances
const { User, sequelize } = require("../models"); // User model and sequelize instance

// Middleware to hash password before creating user
User.beforeCreate(async function (user) {
  user.passwordHash = await bcrypt.hash(user.passwordHash, 10); // Hashing password with bcrypt
});

// Middleware for user sign up
const signUp = async (req, res, next) => {
  try {
    const record = await User.create(req.body); // Creating new user record
    if (record) {
      next(); // Proceed if sign up is successful
    } else {
      next("Unable to sign up!"); // Error handling for failed sign up
    }
  } catch (error) {
    res.status(403).send("Invalid Sign Up"); // Error response for invalid sign up
  }
};

// Middleware for basic authentication
const basicAuth = async (req, res, next) => {
  // Parsing the authorization header
  let basicHeaderParts = req.headers.authorization.split(" ");
  let encodedString = basicHeaderParts.pop(); // Extracting encoded string
  let decodedString = base64.decode(encodedString); // Decoding base64 string
  let [username, password] = decodedString.split(":"); // Extracting username and password

  try {
    // Finding user in the database
    const user = await User.findOne({ where: { username: username } });
    // Comparing provided password with hashed password
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (valid) {
      next(); // Proceed if authentication is successful
    } else {
      next("Invalid User"); // Error handling for invalid user
    }
  } catch (error) {
    res.status(403).send("Invalid Login"); // Error response for invalid login
  }
};

// Exporting middleware functions
module.exports = {
  basicAuth,
  signUp,
};
