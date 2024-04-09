'use strict';

const express = require("express");
const { basicAuth, signUp } = require("./middleware/basic.js");

const router = express.Router();

router.post("/signup", signUp, async (req, res) => {
  res.status(200).send("You signed up!!!");
});

router.post("/signin", basicAuth, async (req, res) => {
  res.status(200).send("Welcome to the app!!!");
});

module.exports = router;
