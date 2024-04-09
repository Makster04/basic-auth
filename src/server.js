'use strict';

const express = require("express"); // Importing express framework
const authRouter = require("./auth/router.js"); // Importing authentication router
const invalidRouter = require("./middleware/404.js"); // Importing middleware for handling invalid routes
const serverError = require("./middleware/500.js"); // Importing middleware for handling server errors

const app = express(); // Creating an express application instance

app.use(express.json()); // Adding middleware to parse JSON requests

app.use(express.urlencoded({ extended: true })); // Adding middleware to parse URL-encoded requests

app.use("/auth", authRouter); // Mounting the authentication router at /auth endpoint

app.use(invalidRouter); // Adding middleware to handle invalid routes

app.use(serverError); // Adding middleware to handle server errors

module.exports = {
  // Exporting start function to start the server
  start: (port) =>
    app.listen(port, () => {
      console.log("Running on PORT", port); // Logging that the server is running on the specified port
    }),
  app, // Exporting the express application instance
};
