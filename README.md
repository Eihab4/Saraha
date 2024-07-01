# Saraha Game API

Welcome to the documentation for Saraha Game API! This system is built using Node.js, MongoDB, and Express, providing a robust backend solution for managing messages and user authentication.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Models](#models)
4. [API Endpoints](#api-endpoints)
5. [Authentication](#authentication)
6. [Validation and Error Handling](#validation-and-error-handling)
7. [Contributing](#contributing)
8. [Postman Collection](#postman-collection)

---

## Introduction

Saraha Game API simplifies the process of managing messages between users, offering functionalities for CRUD operations, user authentication, and secure token-based authorization.

## Installation

To set up the Saraha Game API locally, follow these steps:

- Clone the GitHub repository to your local machine.
- Install the necessary dependencies using npm or yarn.
- Configure the MongoDB connection in the application.
- Set up environment variables for JWT secret and MongoDB connection URI.
- Run the application using `npm start` or `yarn start`.

## Models

### User Model

- **username**: String (required) - Username of the user.
- **email**: String (required) - Email of the user.
- **password**: String (required) - Hashed password of the user.
- **otp**: String - One-time password for verification.

### Message Model

- **content**: String (required) - Content or message text.
- **receiverId**: ObjectId (required) - ID of the recipient user.

## API Endpoints

### Authentication

- **POST /api/auth/register**
  - Register a new user.
  - Validates email existence and hashes passwords before storing.

- **POST /api/auth/login**
  - Authenticate a user and generate a JWT token for authorization.

- **GET /api/auth/verify/:token**
  - Verify user registration via OTP token.

### Messages

- **POST /api/messages**
  - Create a new message.
  - Requires authentication token in headers.

- **GET /api/messages**
  - Retrieve all messages for the authenticated user.
  - Requires authentication token in headers.

- **DELETE /api/messages/:id**
  - Delete a specific message by its ID.
  - Requires authentication token in headers.

## Authentication

Token-based authentication is implemented using JSON Web Tokens (JWT). Tokens are generated upon successful login and used to authenticate API requests.

## Validation and Error Handling

The API includes robust validation and error handling mechanisms:
- Input validation for user registration and message creation.
- Error handling middleware to manage exceptions and provide appropriate error responses.

## Contributing

Contributions to the Saraha Game API project are welcome! Feel free to fork the repository, make improvements, and submit pull requests.

## Postman Collection

Explore and test our API endpoints using [Postman](https://documenter.getpostman.com/view/34440263/2sA3dvjsDP). You can access our complete API documentation and interact with our endpoints through our [Postman Collection](https://documenter.getpostman.com/view/34440263/2sA3dvjsDP).
