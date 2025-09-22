import React from "react";
import { FaEnvelope, FaPhoneAlt, FaComments, FaQuestionCircle, FaBook } from "react-icons/fa";
import "./todo-help.css";

const TodoHelp = () => {
  return (
    <div className="help-container">
      {/* Hero Section */}
      <header className="help-hero">
        <h1>Help & Support</h1>
        <p>
          Need assistance? We’re here to help you get the most out of{" "}
          <span className="highlight">Task Planner App</span>.
        </p>
      </header>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <FaQuestionCircle className="faq-icon" />
            <div>
              <h3>How do I create a new task?</h3>
              <p>
                Simply click the <b>“+ Add Task”</b> button on your dashboard,
                enter task details, set deadlines, and save.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <FaQuestionCircle className="faq-icon" />
            <div>
              <h3>Can I use MyTodoApp for free?</h3>
              <p>
                Yes! Individuals and students have access to our free plan,
                while businesses can explore advanced features with premium
                tiers.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <FaQuestionCircle className="faq-icon" />
            <div>
              <h3>How do I reset my password?</h3>
              <p>
                Go to the login page, click <b>“Forgot Password”</b>, and follow
                the instructions sent to your email.
              </p>
            </div>
          </div>
          <div className="faq-item">
            <FaQuestionCircle className="faq-icon" />
            <div>
              <h3>Can I collaborate with others?</h3>
              <p>
                Absolutely! You can invite family members, classmates, or team
                members to collaborate on projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Support</h2>
        <p>If you can’t find your answer, reach us directly:</p>
        <div className="contact-cards">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email Us</h3>
            <p>support@mytodoapp.com</p>
          </div>
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-card">
            <FaComments className="contact-icon" />
            <h3>Live Chat</h3>
            <p>Available Mon–Fri, 9AM–6PM EST</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <FaBook className="resource-icon" /> <a href="#">User Guide</a>
          </li>
          <li>
            <FaBook className="resource-icon" /> <a href="#">API Documentation</a>
          </li>
          <li>
            <FaBook className="resource-icon" /> <a href="#">Community Forum</a>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="help-cta">
        <h2>Still Need Help?</h2>
        <p>Our support team is ready to assist you anytime.</p>
        <button className="help-button">Submit a Ticket</button>
      </section>
    </div>
  );
};

export default TodoHelp;
