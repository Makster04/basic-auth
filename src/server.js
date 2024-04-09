'use strict';

const express = require("express");
const authRouter = require("./auth/router.js");
const invalidRouter = require("./middleware/404.js");
const serverError = require("./middleware/500.js");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);

app.use(invalidRouter);
app.use(serverError);

module.exports = {
  start: (port) =>
    app.listen(port, () => {
      console.log("Running on PORT", port);
    }),
  app,
};