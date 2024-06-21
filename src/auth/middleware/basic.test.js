// Overall, this file ensures the correctness of the signUp and basicAuth middleware functions, validating their behavior under different conditions

// Required libraries and functions
const { signUp, basicAuth } = require("./basic"); // Importing middleware functions
const base64 = require("base-64"); // For encoding/decoding
const { sequelize } = require("../models"); // Sequelize instance

// Sync sequelize models with the database before running tests
beforeAll(async () => {
  sequelize.sync(); // Syncing sequelize models with the database
});

// Test suite for signUp middleware function
describe("validate signUp", () => {
  it("should take in JSON user/pass, create new User, and call next properly", async () => {
    const req = {
      body: {
        username: "test1", // Test username
        passwordHash: "777", // Test password hash
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(), // Mocking status function
      json: jest.fn(), // Mocking json function
      send: jest.fn(), // Mocking send function
    };
    const next = jest.fn(); // Mocking next function

    await signUp(req, res, next); // Calling signUp middleware function

    expect(next).toHaveBeenCalled(); // Expecting next function to be called
  });
});

// Test suite for basicAuth middleware function
describe("validate basicAuth", () => {
  it("should take in a header with user/pass, find User, and call next properly", async () => {
    const req = {
      headers: {
        authorization: `basic ${base64.encode("test1:777")}`, // Creating basic authorization header
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(), // Mocking status function
      json: jest.fn(), // Mocking json function
      send: jest.fn(), // Mocking send function
    };
    const next = jest.fn(); // Mocking next function

    await basicAuth(req, res, next); // Calling basicAuth middleware function

    expect(next).toHaveBeenCalled(); // Expecting next function to be called
  });
});
