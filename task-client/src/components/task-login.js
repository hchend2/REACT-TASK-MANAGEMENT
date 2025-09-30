//
// REACT-TASK-MANAGEMENT/task-client/src/components/task-login.js
//
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './task-login.css';

const API_URL = process.env.REACT_APP_API_URL;

const TaskLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/task-dashboard'); // go to dashboard
    } catch (err) {
      setError(err.response?.data?.message || 'Server error. Please try again later.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          required autoComplete="username" />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          required autoComplete="current-password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">SignUp</a></p>
    </div>
  );
};

export default TaskLogin;
