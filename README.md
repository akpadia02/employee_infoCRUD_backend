# Employee Management System - Backend

A RESTful API for employee management with secure JWT authentication, MongoDB database integration, and complete CRUD operations.

## 🚀 Features

- User authentication with JWT tokens
- Bcrypt password hashing & security
- Full employee CRUD operations
- Protected routes with middleware
- MongoDB & Mongoose integration
- CORS support for frontend integration
- Comprehensive error handling

## 📦 Tech Stack

- **Express.js** ^5.2.1 - Web framework
- **MongoDB** with Mongoose ^9.1.6 - Database
- **JWT** ^9.0.3 - Authentication
- **Bcryptjs** ^3.0.3 - Password hashing
- **CORS** ^2.8.6 - Cross-origin requests
- **Nodemon** ^3.1.11 - Development tool

## 📂 Project Structure

```
backend/
├── config/db.js              # Database connection
├── controllers/
│   ├── authController.js     # Login/Register logic
│   └── employeeController.js # CRUD operations
├── middleware/authMiddleware.js  # JWT verification
├── models/
│   ├── User.js              # User schema
│   └── Employee.js          # Employee schema
├── routes/
│   ├── authRoutes.js        # Auth endpoints
│   └── employeeRoutes.js    # Employee endpoints
├── server.js                # Main entry point
└── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### Quick Start

```bash
# Install dependencies
npm install

# Create .env file
cat > .env << EOF
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_secret_key_here
EOF

# Start server
npm run dev        # Development
npm start          # Production
```

Server runs on `http://localhost:5000/api`

## 📊 Database Schema

**User Model**
```
name, email (unique), password (hashed), timestamps
```

**Employee Model**
```
name, email (unique), department, designation, salary, 
joiningDate, createdBy (user reference), timestamps
```

## 🔌 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | No | Register new user |
| POST | `/auth/login` | No | Login & get token |
| POST | `/employees` | Yes | Create employee |
| GET | `/employees` | Yes | Get all employees |
| GET | `/employees/:id` | Yes | Get employee by ID |
| PUT | `/employees/:id` | Yes | Update employee |
| DELETE | `/employees/:id` | Yes | Delete employee |

### Example Requests

**Login**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"pass123"}'
```

**Get Employees**
```bash
curl -X GET http://localhost:5000/api/employees \
  -H "Authorization: Bearer <token>"
```

## 🔐 Security

- JWT authentication with 24h expiration
- Bcryptjs password hashing (10 salt rounds)
- Protected routes via middleware
- CORS enabled
- Input validation


---
**Version**: 1.0.0 | **Last Updated**: February 2024
