'use strict';

const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('./models'); // Adjust the path as necessary
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ username, passwordHash });
    res.status(200).send('Youve signed up');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64')
      .toString()
      .split(':');
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.passwordHash)) {
      res.status(200).send('Youve signed in');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
