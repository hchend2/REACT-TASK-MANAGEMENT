import React from "react";
import "./task-product.css";
import {
  FaUsers,
  FaBriefcase,
  FaBuilding,
  FaHome,
  FaUniversity,
  FaUserGraduate,
  FaTasks,
  FaCheckCircle,
} from "react-icons/fa";

const TaskProduct = () => {
  const products = [
    {
      icon: <FaTasks className="product-icon" />,
      title: "Task Planner for Project Managers",
      description:
        "Designed for project managers to handle complex projects, track deliverables, assign tasks, and monitor deadlines with ease.",
    },
    {
      icon: <FaBriefcase className="product-icon" />,
      title: "Task Planner for Small Businesses",
      description:
        "Empower small businesses to organize operations, align goals, and grow efficiently using daily, weekly, and monthly planning tools.",
    },
    {
      icon: <FaBuilding className="product-icon" />,
      title: "Task Planner for Corporates",
      description:
        "Corporates get full access to advanced planning features for coordinating across departments, achieving KPIs, and scaling productivity.",
    },
    {
      icon: <FaHome className="product-icon" />,
      title: "Task Planner for Families",
      description:
        "Keep families together on shared projects, encourage responsibility, and help children build positive habits and collaboration skills early.",
    },
    {
      icon: <FaUniversity className="product-icon" />,
      title: "Task Planner for Public Institutions",
      description:
        "Public institutions can coordinate departments, manage resources effectively, and track progress transparently.",
    },
    {
      icon: <FaUserGraduate className="product-icon" />,
      title: "Task Planner for College Students (Free)",
      description:
        "Completely free. Students can plan daily and weekly tasks and collaborate with up to 10 team members on school projects.",
    },
    {
      icon: <FaUsers className="product-icon" />,
      title: "Task Planner for Individuals",
      description:
        "Free for daily planning with limited features. Upgrade to unlock advanced tools and gain more productivity power.",
    },
  ];

  return (
    <div className="product-container">
      <h1 className="product-title">Our Task Planner Products</h1>
      <p className="product-intro">
        Whether you’re a business, a student, or an individual — we have a task planner designed for you.
      </p>
      <div className="product-grid">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <section className="pricing-section">
        <h2 className="pricing-title">Pricing Plans</h2>
        <p className="pricing-intro">
          Choose the plan that fits your needs — start free and upgrade anytime.
        </p>
        <div className="pricing-grid">
          {/* Free Plan */}
          <div className="pricing-card">
            <h3>Free</h3>
            <p className="price">$0 / month</p>
            <ul className="features-list">
              <li><FaCheckCircle className="check-icon" /> Daily planning</li>
              <li><FaCheckCircle className="check-icon" /> Weekly planning (students only)</li>
              <li><FaCheckCircle className="check-icon" /> Up to 10 team members (students only)</li>
              <li><FaCheckCircle className="check-icon" /> Limited features for individuals</li>
            </ul>
            <button className="plan-btn free-btn">Get Started</button>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card premium">
            <h3>Premium</h3>
            <p className="price">$15 / month</p>
            <ul className="features-list">
              <li><FaCheckCircle className="check-icon" /> Daily, weekly & monthly planning</li>
              <li><FaCheckCircle className="check-icon" /> Unlimited team members</li>
              <li><FaCheckCircle className="check-icon" /> Advanced collaboration tools</li>
              <li><FaCheckCircle className="check-icon" /> Priority support</li>
              <li><FaCheckCircle className="check-icon" /> Full access for businesses, corporates, families & institutions</li>
            </ul>
            <button className="plan-btn premium-btn">Upgrade Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskProduct;
