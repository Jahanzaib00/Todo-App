# Todo App

## Introduction
Todo App is a simple application that helps users manage their daily tasks effectively. It provides a user-friendly interface for creating, editing, and deleting todos.

## Features
- User authentication (signup and login)
- Create, read, update, and delete todos
- Secure password hashing
- Responsive design for various devices

## Technologies Used
- Frontend:
  - React
  - React Router
  - Axios
  - Bootstrap
  
- Backend:
  - Express.js
  - MySQL

## Installation
1. Clone the repository:
   - git clone <repository-url>
   
2. Navigate to the backend directory:
   - cd backend

3. Install backend dependencies:
   - npm install

4. Configure MySQL:
    - Create a MySQL database named `todo_app_db`.
    - Update the `db.js` file with your MySQL database configuration.

5. Start the backend server:
   - npm start

## Frontend Setup
1. Install dependencies:
cd frontend
npm install

2. Start the development server:
npm start

9. Access the application at `http://localhost:3000` in your web browser.

## API Endpoints
- **POST /api/auth/signup**: Register a new user.
- **POST /api/auth/login**: Authenticate and login a user.
- **GET /api/todos**: Get all todos for the authenticated user.
- **POST /api/todos**: Create a new todo for the authenticated user.
- **PUT /api/todos/:id**: Update a todo by ID for the authenticated user.
- **DELETE /api/todos/:id**: Delete a todo by ID for the authenticated user.

## Usage
- Sign up for a new account or log in with existing credentials.
- Create, update, and delete todos as needed.
- Log out when finished.












