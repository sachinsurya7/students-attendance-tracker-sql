const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./db");

const studentRoutes = require("./routes/students");
const attendanceRoutes = require("./routes/attendance");

const app = express();

// Middleware
app.use(cors()); // Allow frontend access
app.use(bodyParser.json()); // Parse JSON request body

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
