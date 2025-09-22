
import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import TodoSignUp from './todo-signup';
import './todo-login.css';

const API_URL = process.env.REACT_APP_API_URL; // Base URL for API requests ...

const TodoLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold error messages ...
  const navigate = useNavigate(); // Hook to programmatically navigate ...
  
  
  // handle login ...
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
    // Ensure token is set before navigating ...
    setTimeout(() => {
      navigate('/dashboard');
    }, 100); // 100ms delay to ensure localStorage is updated ...

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Server error. Please try again.");
      }
    }
  };

  // render the login form ...
  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} required autoComplete='current-email'/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete='current-password'/>
        <button type="submit">Login</button>
      </form>
        <p>Don't have an account? <a href="/signup">SignUp</a></p>
    </div>
  );
};

export default TodoLogin;