import React from "react";
import TodoLanding from "./components/todo-landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoAbout from "./components/todo-about";
import TodoProduct from "./components/todo-product";
import TodoLogin from "./components/todo-login";
import TodoNavbar from "./components/todo-navbar";
import TodoFeature from "./components/todo-feature";
import TodoHelp from "./components/todo-help";
import TodoSignUp from "./components/todo-signup";
// import './App.css';
function App() {

  return (
    <Router>
      <div className="Navbar">
          <div className="main-content" style={{ flex: 1, marginLeft: "5px" }}>
            <div className="content" style={{ padding: "10px" }}>
              <TodoNavbar />
              <Routes>
                <Route path="/" element={<TodoLanding />} />
                <Route path="/feature" element={<TodoFeature />} />
                <Route path="/about" element={<TodoAbout />} />
                <Route path="/product" element={<TodoProduct />} />
                <Route path="/login" element={<TodoLogin />} />
                <Route path="/signup" element={<TodoSignUp />} />
                <Route path="/help" element={<TodoHelp />} />
              </Routes>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
