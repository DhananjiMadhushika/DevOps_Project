// routes/employees.js
const express = require("express");
const router = express.Router();
const multer = require('multer');
const Employee = require("../models/employee");
const Service = require("../models/service"); // Include Service model

// Define multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

// Add Employee
router.post("/add_employee", upload.array("images"), (req, res) => {
    const { Name, Position, Tel_No, Email } = req.body;
    const images = req.files.map((file) => ({
        filename: file.originalname,
        path: file.path,
    }));

    const newEmployee = new Employee({
        Name,
        Position,
        Tel_No,
        Email,
        images,
    });

    newEmployee.save()
        .then(() => {
            res.json("Employee added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to add employee" });
        });
});

// Get Employees
router.get("/", (req, res) => {
    Employee.find()
        .then((employees) => {
            res.json(employees);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Failed to fetch employees" });
        });
});

// Delete Employee
router.delete("/:id", async (req, res) => {
    const employeeID = req.params.id;
    try {
        await Employee.findByIdAndRemove(employeeID);
        res.json({ status: "ok", data: "Employee deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to delete employee" });
    }
});

module.exports = router;
