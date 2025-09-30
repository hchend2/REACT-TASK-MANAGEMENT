import React from "react";

import { Link } from "react-router-dom";
import "./task-navbar.css";

function TaskNavbar() {
    return (
        <div className="navbar">
            
            <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
                <Link to="/" className="home"><strong>Task Planner</strong></Link>
                <Link to="/about" className="taskabout">About</Link>
                <Link to="/product" className="taskproduct">Product</Link>
                <Link to="/feature" className="taskfearture">Features</Link>
                <Link to="/login" className="tasklogin">Login</Link>
                {/* <div className="dropdown">
                    <Link to="/user-login">User Login</Link>
                    <Link to="/admin-login">Admin Login</Link>
                </div> */}
                <Link to="/help" className="taskhelp">Help</Link>
            </nav>
        </div>
    );
}
export default TaskNavbar;