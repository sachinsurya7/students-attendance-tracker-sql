import { useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

const Home = () => {
    const [newAttendance, setNewAttendance] = useState(null);

    return (
        <div>
            <h2>Student Attendance Tracker</h2>
            <AttendanceForm onAttendanceAdded={setNewAttendance} />
            <AttendanceTable newAttendance={newAttendance} />
        </div>
    );
};

export default Home;
