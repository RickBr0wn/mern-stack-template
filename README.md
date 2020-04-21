# Mern Stack Template

This is a boilerplate template for speeding up the development process in making MERN apps.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

To get this boilerplate running locally you will need:

- a node package manager (yarn or npm)
- a command line terminal (iTerm or bash)
- your favorite IDE (vscode, sublime)
- mongoDB installed locally

If you want to use a cloud based solution such as [mLabs](https://mlab.com) that is fine, you just need to replace the `connection string` with the one provided.

## Installation

Clone the repo:

```bash
git clone https://github.com/RickBr0wn/express-mongoose-template <YOUR_PROJECT_NAME> && cd <YOUR_PROJECT_NAME>
```

To start your own repository,

> **important:** make sure you are in the cloned directory.

```bash
rm -rf .git
git init
```

This will remove the existing git history, and allow you to link it to a new repository.

> Please credit this boilerplate if you build something fantastic!

## .env

Lets create a `.env` file in the root of the project:

```bash
touch .env
```

Then put the following code in that `.env` except you should add your details.

```bash
MONGODB_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
```

Provided in the root of the project, a `.sample.env` for guidance.

## Scripts

```json
"scripts": {
    "dev": "nodemon src/server.js"
  },
```

## Routes

Inside of `/src/Controllers/index.js` are a collection of sample routes that involve the five primary `CRUD` functions of persistent storage.

- **GET** `/api/get-all-datas` - Get multiple documents from the database.
- **GET** `/api/get_single_data/:dataId` - Get a single document from the database, based on a dataId.
- **POST** `/api/create_a_data` - Creates a single document and assigns it a dataId.
- **DELETE** `/api/delete_a_data/:dataId` - Deletes a single document from the database, based on a dataId.
- **PATCH** `/api/update_a_data/:dataId` - Updates a single document from the database, based on a dataId.

Inside of `/src/Controllers/authControllers.js` are a collection of sample routes that involve the primary functions of authentication.

- **GET** `/test` - A test route used in development.
- **POST** `/register` - Registers a new user, requires a `json` object, containing { username: String, password: String, role: String }
- **POST** `/login` - Logs in an existing user, requires a `json` object, containing { username: String, password: String }
- **GET** `/logout` - Logs out a logged in user.
- **GET** `/authenticated` - Checks to see if user is logged in. Used for protecting routes.
- **POST** `/admin` - Checks to see if a user is an admin. Used for protecting routes.
- **GET** `/create_a_data` - Adds a data to the users record. This is used as private data storage.
- **GET** `/get_all_datas` - Gets all private data from the user.

## Running the tests

No test scripts available

## Built With

- [node](https://nodejs.org/en/about/) - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
- [express](https://expressjs.com) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [mongoDB](https://www.mongodb.com) - MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- [mongoose](https://mongoosejs.com) - Mongoose provides a straight-forward, schema-based solution to model your application data.
- [dotenv](https://github.com/motdotla/dotenv#readme) - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env.`
- [cookie-parser](https://github.com/expressjs/cookie-parser#readme) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) - bcrypt is a password hashing function.
- [passport](http://www.passportjs.org) - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.
- [passport-local](http://www.passportjs.org/packages/passport-local/) - This module lets you authenticate using a username and password in your Node.js applications.
- [passport-jwt](http://www.passportjs.org/packages/passport-jwt/) - This module lets you authenticate endpoints using a JSON web token.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) - JsonWebToken implementation for node.js.

## Contributing

[CONTRIBUTING.md](/CONTRIBUTING.md)

## Author(s)

- **Rick Brown** - _Initial work_ - [RickBr0wn](https://github.com/RickBr0wn)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/RickBr0wn/5f95ee6118bb32034e2b94acbd88a99d) file for details
