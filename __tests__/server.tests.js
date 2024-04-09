// This file contains tests for server endpoints using Supertest library
// Supertest allows making HTTP requests to test endpoints

const supertest = require("supertest"); // Importing supertest library for making HTTP requests
const { sequelize, User } = require("../src/auth/models/index.js"); // Importing sequelize and User model from the auth module
const { app } = require("../src/server.js"); // Importing the main express app

const request = supertest(app); // Creating a supertest agent to make requests to the express app

beforeAll(async () => {
  // Before all tests, sync the sequelize models with the database and create a test user
  await sequelize.sync(); // Syncing sequelize models with the database
  User.create({
    username: "test", // Test username
    passwordHash: "925", // Test password hash
  });
});

afterAll(async () => {
  // After all tests, drop the sequelize models to clean up the test environment
  await sequelize.drop(); // Dropping sequelize models from the database
});

describe("Server Tests", () => {
  // Test suite for server endpoints

  it("should give a status 200 and return 'Welcome to Heaven!'", async () => {
    // Testing the signup endpoint
    let response = await request.post("/auth/signup").send({
      username: "MT_B0sniak", // Test username
      passwordHash: "241", // Test password hash
    });
    expect(response.status).toEqual(200); // Asserting that the response status is 200
    expect(response.text).toEqual("You shall Pass!"); // (Important) Asserting that the response text is 'You shall Pass!'
  });

  it("should give status 200 and return 'Welcome to the app!!!'", async () => {
    // Testing the signin endpoint
    let response = await request.post("/auth/signin").auth("MT_B0sniak", "241"); // Authenticating with test credentials
    expect(response.status).toEqual(200); // Asserting that the response status is 200
    expect(response.text).toEqual("Welcome to Heaven!"); // (Important) Asserting that the response text is 'Welcome to Heaven!'
  });
});
