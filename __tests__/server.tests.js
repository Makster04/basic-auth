'use strict';

const supertest = require('supertest');
const bcrypt = require('bcryptjs');
const { sequelize, User } = require('../src/auth/models');
const { app } = require('../src/server.js');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  const hashedPassword = await bcrypt.hash('456', 10);
  await User.create({
    username: 'test',
    passwordHash: hashedPassword,
  });
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Server Tests', () => {
  it('should give a status 200 and return "Youve signed up"', async () => {
    let response = await request.post('/auth/signup').send({
      username: 'Mak',
      password: 'oompahloompah',
    });
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Youve signed up');
  });

  it('should give status 200 and return "Youve signed in"', async () => {
    let response = await request.post('/auth/signin').auth('Mak', 'oompahloompah');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Youve signed in');
  });
});
