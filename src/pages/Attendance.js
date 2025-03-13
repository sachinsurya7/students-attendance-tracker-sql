import React, { useEffect, useState } from "react";
import { getAttendance } from "../services/api"; // ✅ Correct function
import AttendanceTable from "../components/AttendanceTable"; // Import AttendanceTable component

const Attendance = () => {
    const [attendance, setAttendance] = useState([]); // State to store data

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAttendance(); // ✅ Use getAttendance
            setAttendance(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Student Attendance</h2>
            <AttendanceTable attendance={attendance} /> {/* Pass data as props */}
        </div>
    );
};

export default Attendance;
