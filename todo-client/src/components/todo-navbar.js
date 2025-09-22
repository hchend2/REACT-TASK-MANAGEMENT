import React from "react";

import { Link } from "react-router-dom";
import "./todo-navbar.css";

function TodoNavbar() {
    return (
        <div className="navbar">
            
            <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
                <Link to="/" className="home"><bold>Task Planner</bold></Link>
                <Link to="/about" className="todoabout">About</Link>
                <Link to="/product" className="todoproduct">Product</Link>
                <Link to="/feature" className="todofearture">Features</Link>
                <Link to="/login" className="todologin">Login</Link>
                {/* <div className="dropdown">
                    <Link to="/user-login">User Login</Link>
                    <Link to="/admin-login">Admin Login</Link>
                </div> */}
                <Link to="/help" className="todohelp">Help</Link>
            </nav>
        </div>
    );
}
export default TodoNavbar;