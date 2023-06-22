import React, { useState } from 'react';
import './Registerformuser.css';

const RegisterFormUSER = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nicNumber, setNicNumber] = useState('');
  
    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handleNicNumberChange = (e) => {
      setNicNumber(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle registration logic here
      console.log('Registration submitted:', firstName, lastName, email, password, confirmPassword, nicNumber);
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setNicNumber('');
    };
  
    return (
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-heading" style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Arial, sans-serif', color:'black',fontSize: '24px', marginBottom: '20px' , marginTop:'20px'}}>User Registration</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nicNumber">NIC Number:</label>
            <input
              type="text"
              id="nicNumber"
              value={nicNumber}
              onChange={handleNicNumberChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  export default RegisterFormUSER;