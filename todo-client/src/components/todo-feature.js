import React from "react";
import "./todo-feature.css";
import { FaTasks, FaUsers, FaBell, FaChartLine, FaCloud } from "react-icons/fa";

const TodoFeature = () => {
  const features = [
    {
      title: "Task Creation",
      description:
        "Quickly create and manage tasks with due dates, priorities, and categories.",
      icon: <FaTasks className="feature-icon" />
    },
    {
      title: "User Collaboration",
      description:
        "Invite teammates, assign tasks, and work together seamlessly.",
      icon: <FaUsers className="feature-icon" />
    },
    {
      title: "Reminders & Notifications",
      description:
        "Stay on top of deadlines with smart reminders and real-time notifications.",
      icon: <FaBell className="feature-icon" />
    },
    {
      title: "Progress Tracking",
      description:
        "Track your task completion and productivity with simple dashboards.",
      icon: <FaChartLine className="feature-icon" />
    },
    {
      title: "Secure Cloud Storage",
      description:
        "Access your tasks anywhere, anytime with secure cloud backup.",
      icon: <FaCloud className="feature-icon" />
    }
  ];

  return (
    <div className="feature-page">
      <h1 className="feature-title">App Features</h1>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            {feature.icon}
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoFeature;
