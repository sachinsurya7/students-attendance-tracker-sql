const express = require("express");
const db = require("../db");

const router = express.Router();

// Get all students
router.get("/", (req, res) => {
    db.query("SELECT * FROM students", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Add a new student
router.post("/add", (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Student name is required" });

    db.query("INSERT INTO students (name) VALUES (?)", [name], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "✅ Student added successfully", id: result.insertId });
    });
});

module.exports = router;
