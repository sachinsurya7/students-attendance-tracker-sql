const express = require("express");
const router = express.Router();
const db = require("../db");

// POST - Mark Attendance
router.post("/", (req, res) => {
    const { student_id, status } = req.body;
    const date = new Date().toISOString().split("T")[0];

    console.log("📥 POST Request Received:", req.body);

    if (!student_id || !status) {
        console.error("❌ Validation Error: Missing student_id or status");
        return res.status(400).json({ error: "Missing student_id or status" });
    }

    db.query(
        "INSERT INTO attendance (student_id, status, date) VALUES (?, ?, ?)", 
        [student_id, status, date], 
        (err, result) => {
            if (err) {
                console.error("❌ Database Error:", err);
                return res.status(500).json({ error: "Database error", details: err.message });
            }
            console.log("✅ Attendance Marked Successfully:", { id: result.insertId, student_id, status, date });
            res.json({ id: result.insertId, student_id, status, date });
        }
    );
});

module.exports = router;
