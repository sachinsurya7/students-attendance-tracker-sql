import axios from "axios";

const API_URL = "http://localhost:5000/api/attendance"; // Ensure this is correct

// Fetch Attendance
export const getAttendance = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("❌ Get Attendance Error:", error);
        throw error;
    }
};

// Add Attendance
export const addAttendance = async (attendanceData) => {
    try {
        const response = await axios.post(API_URL, attendanceData);
        return response.data;
    } catch (error) {
        console.error("❌ Add Attendance Error:", error);
        throw error;
    }
};

// Update Attendance
export const updateAttendance = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("❌ Update Attendance Error:", error);
        throw error;
    }
};

// Delete Attendance
export const deleteAttendance = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("❌ Delete Attendance Error:", error);
        throw error;
    }
};
