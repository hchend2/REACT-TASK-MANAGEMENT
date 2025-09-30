import React from "react";
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import "./task-about.css";

const TaskAbout = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-hero">
        <h1>About <span className="highlight">Task Planner</span></h1>
        <p>
          A simple yet powerful task management tool designed to keep you and your team 
          organized, productive, and motivated.
        </p>
      </header>

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We believe productivity should be simple. Our mission is to provide users with a seamless 
          experience in planning, tracking, and achieving their goals, whether personal, family, 
          or business-related.
        </p>
        <div className="mission-icons">
          <div className="mission-card">
            <FaLightbulb className="icon" />
            <h3>Smart Planning</h3>
            <p>Create, organize, and prioritize tasks effortlessly.</p>
          </div>
          <div className="mission-card">
            <FaUsers className="icon" />
            <h3>Collaboration</h3>
            <p>Work together with your team, family, or classmates.</p>
          </div>
          <div className="mission-card">
            <FaRocket className="icon" />
            <h3>Boost Productivity</h3>
            <p>Stay motivated and accomplish more with progress tracking.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>Core Features</h2>
        <ul>
          <li><FaCheckCircle className="list-icon" /> Create, edit, and delete tasks</li>
          <li><FaCheckCircle className="list-icon" /> Set deadlines and reminders</li>
          <li><FaCheckCircle className="list-icon" /> Organize tasks into categories</li>
          <li><FaCheckCircle className="list-icon" /> Track progress with completion status</li>
          <li><FaCheckCircle className="list-icon" /> Collaborate with teams and family</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why">
        <h2>Why Choose MyTodoApp?</h2>
        <p>
          Unlike other task managers, we put people first. Our platform is flexible, scalable, 
          and designed to grow with you—whether you're a student, a parent, or a business owner.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This app helped me balance college projects and daily life—it's a lifesaver!"</p>
            <span>- Sarah, College Student</span>
          </div>
          <div className="testimonial-card">
            <p>"We use it for family projects and chores. The kids actually enjoy checking off tasks!"</p>
            <span>- John, Parent</span>
          </div>
          <div className="testimonial-card">
            <p>"As a small business owner, I finally have an affordable tool to manage my team’s workload."</p>
            <span>- Emily, Small Business Owner</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="about-cta">
        <h2>Start Planning Smarter Today</h2>
        <p>Join thousands of users already simplifying their lives with MyTodoApp.</p>
        <button className="cta-button">Get Started for Free</button>
      </section>
    </div>
  );
};

export default TaskAbout;
