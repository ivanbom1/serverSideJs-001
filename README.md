## Project Overview

This project implements a **Student Management API** with a frontend interface. It demonstrates core backend concepts including routing, middleware, HTTP methods, and proper API design.

## Features

- **RESTful API** — Full CRUD operations on student data
- **Express.js** — Lightweight Node.js web framework
- **CORS** — Cross-Origin Resource Sharing for frontend-backend communication
- **ES6 Modules** — Modern JavaScript import/export syntax
- **Error Handling** — Try-catch blocks and appropriate HTTP status codes

## Project Structure

```
serverSideJs-001/
├── controllers/
│   └── studentsController.js    # Request handlers
├── services/
│   └── studentsService.js       # Business logic
├── routes/
│   └── studentsRoutes.js        # Route definitions
├── FONT/                         # Frontend files
│   ├── index.html
│   ├── script.js
│   └── style.css
├── students.js                   # Student data
├── index.js                      # Server entry point
├── package.json
└── README.md
```

## Architecture Layers

### Routes (`studentsRoutes.js`)
Defines URL paths and maps them to controller handlers.

### Controller (`studentsController.js`)
Handles HTTP requests and responses. Calls services and returns appropriate status codes.

### Service (`studentsService.js`)
Contains business logic. Performs data operations, validations, and calculations.

## API Endpoints

### GET /api/students
Retrieves all students.

**Response:**
```json
{
  "students": [
    {
      "id": 1,
      "name": "Alice Martin",
      "email": "alice.martin@epita.fr",
      "major": "Computer Science",
      "gpa": 3.8
    }
  ]
}
```

### GET /api/students/:id
Retrieves a single student by ID.

**Response:** Student object or 404 error.

### POST /api/students
Creates a new student.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "major": "Computer Science",
  "gpa": 3.7
}
```

**Response:** 201 Created with new student object.

### PUT /api/students/:id
Updates an existing student.

**Request Body:** Partial or complete student object.

**Response:** Updated student object or 404 error.

### DELETE /api/students/:id
Deletes a student.

**Response:** 204 No Content.

## Technologies

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **CORS** — Cross-origin middleware
- **ES6 Modules** — Modern JavaScript

## Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ivanbom1/serverSideJs-001.git
   cd serverSideJs-001
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node index.js
   ```
   Server runs on `http://localhost:3000`

4. **Open frontend:**
   Navigate to `FONT/index.html` in your browser.

## Key Concepts Demonstrated

### Middleware
- `express.json()` — Parses JSON request bodies
- `cors()` — Enables cross-origin requests

### HTTP Methods
- **GET** — Retrieve data
- **POST** — Create new data (status 201)
- **PUT** — Update existing data (status 200)
- **DELETE** — Remove data (status 204)

### Status Codes
- **200** — OK (successful GET, PUT, POST)
- **201** — Created (POST success)
- **204** — No Content (DELETE success)
- **404** — Not Found
- **500** — Server Error

### Error Handling
Try-catch blocks catch errors and return appropriate responses:
```javascript
try {
    const data = studentService.getAllStudents()
    res.json(data)
} catch (error) {
    res.status(500).json({ error: error.message })
}
```

## Dependencies

```json
{
  "dependencies": {
    "express": "^4.x.x",
    "cors": "^2.x.x"
  }
}
```

## Branch Notes

This is the **02** branch, featuring:
- Refactored code with separate controllers and services
- Proper error handling
- CORS middleware enabled
- ES6 module imports

## Author

Ivan BOMKO

