//
// REACT-TASK-MANAGEMENT/task-client/src/components/task-register.js
//
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './task-register.css';

const API_URL = process.env.REACT_APP_API_URL; // e.g., http://localhost:5000

const TaskRegister = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${API_URL}/auth/register`, {
        firstname,
        lastname,
        email,
        password
      }, {
        headers: { "Content-Type": "application/json" }
      });

      alert("Registration successful! Please login.");
      setFirstname(""); setLastname(""); setEmail(""); setPassword(""); setConfirmPassword("");
      navigate('/login'); // redirect after success
    } catch (error) {
      console.error("Registration failed:", error);
      alert(error.response?.data?.message || "Registration failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="firstname" placeholder="Firstname"
          value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
        <input type="text" name="lastname" placeholder="Lastname"
          value={lastname} onChange={(e) => setLastname(e.target.value)} required />
        <input type="email" name="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          required autoComplete="email" />
        <input type="password" name="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          required autoComplete="new-password" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password"
          value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
          required autoComplete="new-password" />
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default TaskRegister;
