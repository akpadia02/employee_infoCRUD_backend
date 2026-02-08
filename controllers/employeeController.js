// controllers/employeeController.js
// CRUD operations for Employee

const Employee = require("../models/Employee");

// ================= CREATE =================
exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Employee created successfully ✅",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

// ================= READ ALL =================
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({ createdBy: req.user._id });

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch employees",
    });
  }
};

// ================= READ ONE =================
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch employee",
    });
  }
};

// ================= UPDATE =================
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message: "Employee updated successfully ✅",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update employee",
    });
  }
};

// ================= DELETE =================
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.status(200).json({
      message: "Employee deleted successfully ✅",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete employee",
    });
  }
};
