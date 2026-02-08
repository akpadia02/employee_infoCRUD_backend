// routes/employeeRoutes.js
// Employee CRUD routes

const express = require("express");
const router = express.Router();

const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const { protect } = require("../middleware/authMiddleware");

// Protect all routes
router.use(protect);

// Create
router.post("/", createEmployee);

// Read All
router.get("/", getEmployees);

// Read One
router.get("/:id", getEmployeeById);

// Update
router.put("/:id", updateEmployee);

// Delete
router.delete("/:id", deleteEmployee);

module.exports = router;
