# Saraha Game API

Welcome to the documentation for Saraha Game API! This API is built using Node.js and MongoDB, designed to facilitate user registration, authentication, and messaging functionalities.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Models](#models)
4. [API Endpoints](#api-endpoints)
5. [Error Handling](#error-handling)
6. [Validation](#validation)
7. [Contributing](#contributing)
8. [Postman Collection](#postman-collection)

---

## Introduction

Saraha Game API provides essential functionalities for user management and messaging. It supports user registration, authentication, and operations related to sending and receiving messages.

## Installation

To set up Saraha Game API locally, follow these steps:

- Clone the GitHub repository to your local machine.
- Install the necessary dependencies using npm or yarn.
- Configure the MongoDB connection in the application.
- Run the application using `npm start` or `yarn start`.

## Models

### User Model

- **username**: String (required) - User's username.
- **email**: String (required) - User's email address.
- **password**: String (required) - User's hashed password.
- **otp**: String - One-time password for email verification.

### Message Model

- **content**: String (required) - Content of the message.
- **receiverId**: ObjectId (required) - ID of the message receiver.

## API Endpoints

### User Routes

- **POST /user/signUp**
  - Create a new user account.
  - Validates user input against predefined rules.
  - Checks email existence before signing up.
  - Hashes user passwords securely before storing.
  - **Error Handling**: Returns appropriate errors for validation failures, email existence, or server issues.

- **POST /user/signIn**
  - Authenticate user credentials and generate JWT token.
  - Validates user input against predefined rules.
  - **Error Handling**: Returns errors for incorrect credentials, validation failures, or server issues.

- **PUT /user/verifyEmail**
  - Verify user email using OTP (One-Time Password).
  - Validates OTP input against predefined rules.
  - **Error Handling**: Returns errors for invalid OTP, expired tokens, or server issues.

### Message Routes

- **POST /message/sendMessage**
  - Send a new message.
  - Validates message content and receiver ID.
  - Requires authentication using JWT token.
  - **Error Handling**: Returns errors for authentication failures, validation issues, or server errors.

- **GET /message/getMessages**
  - Retrieve all messages for the authenticated user.
  - Requires authentication using JWT token.
  - **Error Handling**: Returns errors for authentication failures or server errors.

- **DELETE /message/deleteMessage/:id**
  - Delete a specific message by its ID.
  - Requires authentication using JWT token.
  - **Error Handling**: Returns errors for authentication failures, permission issues, or server errors.

## Error Handling

Saraha Game API implements robust error handling to provide meaningful responses for various scenarios, including validation errors, authentication failures, and server issues. Each endpoint is designed to return appropriate HTTP status codes and error messages to aid in debugging and client-side handling.

## Validation

Input validation ensures that data sent to the API is accurate and meets specified criteria. Saraha Game API uses validation middleware to check request bodies, query parameters, and authentication tokens before processing requests. Validation errors are communicated clearly to clients to facilitate correct usage of the API.

## Contributing

Contributions to the Saraha Game API project are welcome! Feel free to fork the repository, make improvements, and submit pull requests.

## Postman Collection

Explore and test our API endpoints using [Postman](https://documenter.getpostman.com/view/34440263/2sA3XWcyUq#4bee873d-38d1-4858-8f9e-de49638fe7b9). You can access our complete API documentation and interact with our endpoints through our [Postman Collection](https://documenter.getpostman.com/view/34440263/2sA3XWcyUq#4bee873d-38d1-4858-8f9e-de49638fe7b9).

---

This documentation provides a comprehensive guide to understanding and using the Saraha Game API effectively.
