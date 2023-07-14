import React, { useState } from 'react';
import axios from 'axios';
import './RegisterFormUser.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    customerNAME: '',
    customerEMAIL: '',
    customerPASSWORD: '',
    customerPHONE: '',
    customerNIC: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the Django backend
    axios
      .post('http://localhost:8000/api/customer/', formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="registerall">
    <div className="registerform">
      <form className="form" onSubmit={handleSubmit} style={{width:'150%'}}>
        <p className="title">REGISTER</p>
        <p className="message">Signup now and get full access to our app.</p>
        
          <label>
            <input
              required
              
              type="text"
              className="input"
              name="customerNAME"
              value={formData.customerNAME}
              onChange={handleChange}
            />
            <span>Username</span>
          </label>

          
        
        <label>
          <input
            required
            
            type="email"
            className="input"
            name="customerEMAIL"
            value={formData.customerEMAIL}
            onChange={handleChange}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            required
            
            type="password"
            className="input"
            name="customerPASSWORD"
            value={formData.customerPASSWORD}
            onChange={handleChange}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required
            
            type="text"
            className="input"
            name="customerNIC"
            value={formData.customerNIC}
            onChange={handleChange}
          />
          <span>NIC</span>
        </label>
        <label>
          <input
            required
            
            type="text"
            className="input"
            name="customerPHONE"
            value={formData.customerPHONE}
            onChange={handleChange}
          />
          <span>Phone</span>
        </label>

        <button className="submit" type="submit">
          Submit
        </button>
        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
