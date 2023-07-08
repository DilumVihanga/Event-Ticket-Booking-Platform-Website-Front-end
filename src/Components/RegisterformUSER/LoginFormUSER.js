import React, { useState } from 'react';
import axios from 'axios';
import './Loginformmm.css';

const LoginFormUSER = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/user/', {
        userEMAIL: email,
        USERPASSWORD: password
      });

      // Handle successful login here (e.g., store user data, redirect, etc.)
      console.log('Login successful:', response.data);

      // Reset form fields
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle login error here (e.g., display error message)
      console.log('Login error:', error);
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-heading">User Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginFormUSER;
