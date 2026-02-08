// server.js
// Main entry point of backend server
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Connect Database
connectDB();


const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // For parsing JSON

// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Employee API
app.use("/api/employees", require("./routes/employeeRoutes"));



// Test Route
app.get("/", (req, res) => {
  res.send("Employee Management API is running...");
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
