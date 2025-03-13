import { useEffect, useState } from "react";
import { fetchStudents } from "../services/api";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const data = await fetchStudents();
        setStudents(data);
    };

    return (
        <div>
            <h3>Students</h3>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
