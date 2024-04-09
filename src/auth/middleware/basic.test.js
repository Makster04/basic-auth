const { signUp, basicAuth } = require("./basic"); // Importing signUp and basicAuth middleware functions
const base64 = require("base-64"); // Importing base64 library for encoding/decoding
const { sequelize } = require("../models"); // Importing sequelize instance

beforeAll(async () => {
  // Before all tests, sync sequelize models with the database
  sequelize.sync(); // Syncing sequelize models with the database
});

describe("validate signUp", () => {
  // Test suite for signUp middleware function

  it("should take in json user/pass, create new User, next properly called", async () => {
    // Testing signUp middleware function
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

    expect(next).toHaveBeenCalled(); // (Important) Expecting next function to be called
  });
});

describe("validate basicAuth", () => {
  // Test suite for basicAuth middleware function

  it("should take in a header with user/pass, User finds one, next properly called", async () => {
    // Testing basicAuth middleware function
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

    expect(next).toHaveBeenCalled(); // (Important) Expecting next function to be called
  });
});
