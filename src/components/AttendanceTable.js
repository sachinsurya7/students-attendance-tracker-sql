import { useEffect, useState } from "react";
import { getAttendance, updateAttendance, deleteAttendance } from "../services/api"; // ✅ Correct imports

const AttendanceTable = ({ newAttendance }) => {
    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        loadAttendance();
    }, []);

    useEffect(() => {
        if (newAttendance) {
            setAttendance((prev) => [newAttendance, ...prev]); // Instantly update the table
        }
    }, [newAttendance]);

    const loadAttendance = async () => {
        const data = await getAttendance(); // ✅ Correct function call
        setAttendance(data);
    };

    const handleUpdate = async (id) => {
        const updatedStatus = prompt("Enter new status (Present/Absent):");
        if (updatedStatus) {
            const updatedRecord = await updateAttendance(id, { status: updatedStatus });
            setAttendance(attendance.map((record) => (record.id === id ? updatedRecord : record)));
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            await deleteAttendance(id);
            setAttendance(attendance.filter((record) => record.id !== id));
        }
    };

    return (
        <div>
            <h3>Attendance Records</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {attendance.map((record) => (
                        <tr key={record.id}>
                            <td>{record.student_id}</td>
                            <td>{record.status}</td>
                            <td>{new Date(record.date).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleUpdate(record.id)}>Edit</button>
                                <button onClick={() => handleDelete(record.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;
