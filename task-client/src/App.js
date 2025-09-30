import React from "react";
import TaskLanding from "./components/task-landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskAbout from "./components/task-about";
import TaskProduct from "./components/task-product";
import TaskLogin from "./components/task-login";
import TaskNavbar from "./components/task-navbar";
import TaskFeature from "./components/task-feature";
import TaskHelp from "./components/task-help";
import TaskRegister from "./components/task-register";
// import './App.css';
function App() {

  return (
    <Router>
      <div className="Navbar">
          <div className="main-content" style={{ flex: 1, marginLeft: "5px" }}>
            <div className="content" style={{ padding: "10px" }}>
              <TaskNavbar />
              <Routes>
                <Route path="/" element={<TaskLanding />} />
                <Route path="/feature" element={<TaskFeature />} />
                <Route path="/about" element={<TaskAbout />} />
                <Route path="/product" element={<TaskProduct />} />
                <Route path="/login" element={<TaskLogin />} />
                <Route path="/register" element={<TaskRegister />} />
                <Route path="/help" element={<TaskHelp />} />
              </Routes>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
