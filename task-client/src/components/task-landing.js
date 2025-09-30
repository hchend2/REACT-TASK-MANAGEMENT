import React, { useState, useEffect } from "react";
import "./task-landing.css";
import { FaTasks, FaCalendarAlt, FaRocket } from "react-icons/fa";
import { MdBusiness, MdCorporateFare, MdPerson } from "react-icons/md";

const TaskLanding = () => {
  const slides = [
    {
      id: 1,
      title: "Stay Organized",
      text: "Manage your daily tasks efficiently and never miss a deadline.",
      icon: <FaTasks className="carousel-icon" />
    },
    {
      id: 2,
      title: "Plan Ahead",
      text: "Use weekly and monthly planning tools to stay ahead of your goals.",
      icon: <FaCalendarAlt className="carousel-icon" />
    },
    {
      id: 3,
      title: "Boost Productivity",
      text: "Empower teams and individuals to collaborate and achieve more.",
      icon: <FaRocket className="carousel-icon" />
    }
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide every 4s with fade animation
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true); // fade-in new slide
      }, 400); // match fade duration
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="maintcontainer">
      {/* Hero Section */}
      <main className="maincontain">
        <h1 className="sometexthere">Welcome to the Task Planner Platform</h1>
        <p className="sometext">
          Organize your tasks, boost productivity, and keep everything in one place.
        </p>
        <button className="getstarted">Get Started</button>
      </main>

      {/* Carousel */}
      <section className="carousel">
        <div className={`carousel-slide ${fade ? "fade-in" : "fade-out"}`}>
          {slides[current].icon}
          <h2>{slides[current].title}</h2>
          <p>{slides[current].text}</p>
        </div>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* Usage Sections */}
      <section className="usage-section">
        <h2>How You Can Use the Task Planner Platform</h2>
        <div className="usage-grid">
          <div className="usage-card">
            <MdBusiness className="usage-icon" />
            <h3>Small Businesses</h3>
            <p>
              Plan daily (24-hour) operations to track tasks, manage staff duties,
              and respond to urgent needs. Weekly planning helps align projects with goals,
              and monthly planning ensures budgeting and growth.
            </p>
            <p className="benefit">
              Benefit: Improved efficiency, streamlined workflow, and reduced operational chaos.
            </p>
          </div>

          <div className="usage-card">
            <MdCorporateFare className="usage-icon" />
            <h3>Corporations</h3>
            <p>
              Daily planning enables departments to track immediate deliverables. Weekly plans
              help coordinate cross-team efforts, while monthly plans align long-term strategies
              with business KPIs.
            </p>
            <p className="benefit">
              Benefit: Enhanced collaboration, better goal tracking, and scalable productivity.
            </p>
          </div>

          <div className="usage-card">
            <MdPerson className="usage-icon" />
            <h3>Individuals</h3>
            <p>
              Use daily planning to schedule personal tasks, appointments, and habits. Weekly
              planning organizes life goals, while monthly planning keeps track of long-term
              progress and priorities.
            </p>
            <p className="benefit">
              Benefit: Reduced stress, improved time management, and consistent personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Task Management App. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="privacy">Privacy</a>
          <a href="#" className="terms">Terms</a>
          <a href="#" className="contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default TaskLanding;
