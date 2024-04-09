# Basic Auth

This is a basic authentication server that allows users to sign up and sign in.

## Getting Started

### Requirements

For development, you will only need Node installed in your environment. Please use the appropriate Editorconfig plugin for your Editor (not mandatory).

### Install

* `git clone git@github.com:Makster_04/basic-auth.git`
* `cd PROJECT`
* `npm install`

# Configure App

Create a `.env` file then edit it with your settings. You will need:

* `PORT=3000`
* `DATABASE_URL=sqlite:memory:`


## Start & watch

* `npm run dev`
* `npm start`

## Architecture

* ├── .github
* │   └── workflows
* │       └── node.yml
* ├── config
* │   └── config.json
* * __tests__
* │   └── server.test.js (integration test)
* ├── src
* │   ├── auth
* │   │   ├── middleware
* │   │   │   ├── basic.js
* │   │   │   └── basic.test.js
* │   │   ├── models
* │   │   │   ├── index.js
* │   │   │   └── users-model.js
* │   │   └── router.js
* │   ├── middleware
* │   │   ├── 404.js
* │   │   ├── 404.test.js (unit test)
* │   │   └── 500.js
* │   └── server.js
* ├── .eslintrc.json
* ├── .gitignore
* ├── index.js
* ├── package.json
* └── README.md

## Languages & tools
* JavaScript
* Node
* Express
* Supertest
* Jest
* Nodemon
* pg
* dotenv
* sequelize
* bcrypt
* sqlite3
* cors
* base-64

## Change Log
* 0.0.1 2024-04-08