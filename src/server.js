// This file sets up an Express application with essential middleware and routing for authentication, error handling, and server startup, making it ready for use in a Node.js server application.

'use strict';

// Required libraries and modules
const express = require("express"); // Importing express framework
const authRouter = require("./auth/router.js"); // Importing authentication router
const invalidRouter = require("./middleware/404.js"); // Importing middleware for handling invalid routes
const serverError = require("./middleware/500.js"); // Importing middleware for handling server errors

// Creating an express application instance
const app = express();

// Adding middleware to parse JSON requests
app.use(express.json());

// Adding middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Mounting the authentication router at /auth endpoint
app.use("/auth", authRouter);

// Adding middleware to handle invalid routes
app.use(invalidRouter);

// Adding middleware to handle server errors
app.use(serverError);

// Exporting start function to start the server
module.exports = {
  start: (port) =>
    app.listen(port, () => {
      console.log("Running on PORT", port); // Logging that the server is running on the specified port
    }),
  app // Exporting the express application instance
};
