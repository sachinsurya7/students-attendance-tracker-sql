import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h2>📚 Student Tracker</h2>
            <div>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/attendance" style={styles.link}>Attendance</Link>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        backgroundColor: "#4CAF50",
        color: "white",
    },
    link: {
        margin: "0 15px",
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
    },
};

export default Navbar;
