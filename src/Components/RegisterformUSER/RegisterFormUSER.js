import React, { useState } from 'react';
import axios from 'axios';
import './RegisterFormUser.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userNAME: '',
    userEMAIL: '',
    userPASSWORD: '',
    userPHONE: '',
    userNIC: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the Django backend
    axios
      .post('http://localhost:8000/api/user/', formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userNAME">Name:</label>
          <input
            type="text"
            id="userNAME"
            name="userNAME"
            value={formData.userNAME}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEMAIL">Email:</label>
          <input
            type="email"
            id="userEMAIL"
            name="userEMAIL"
            value={formData.userEMAIL}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPASSWORD">Password:</label>
          <input
            type="password"
            id="userPASSWORD"
            name="userPASSWORD"
            value={formData.userPASSWORD}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPHONE">Phone:</label>
          <input
            type="text"
            id="userPHONE"
            name="userPHONE"
            value={formData.userPHONE}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userNIC">NIC:</label>
          <input
            type="text"
            id="userNIC"
            name="userNIC"
            value={formData.userNIC}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
