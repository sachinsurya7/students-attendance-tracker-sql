import { useState } from "react";
import { addAttendance } from "../services/api"; // ✅ Correct function

const AttendanceForm = ({ onAttendanceAdded }) => {
    const [studentId, setStudentId] = useState("");
    const [status, setStatus] = useState("Present");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // ✅ Change `markAttendance` to `addAttendance`
        const newAttendance = await addAttendance({ student_id: studentId, status });

        if (newAttendance) {
            onAttendanceAdded(newAttendance);
            setStudentId("");
            setStatus("Present");
        }
    };

    return (
        <div>
            <h3>Mark Attendance</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Student ID" 
                    value={studentId} 
                    onChange={(e) => setStudentId(e.target.value)} 
                    required
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AttendanceForm;
