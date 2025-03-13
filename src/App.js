import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import "./styles.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/attendance" element={<Attendance />} />
            </Routes>
        </Router>
    );
};

export default App;
