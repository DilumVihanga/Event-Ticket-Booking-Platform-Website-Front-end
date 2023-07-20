import React, { useState } from 'react';
import axios from 'axios';
import './RegisterFormUser.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    customerName: '', // Update field name to match Django model
    email: '',
    password: '',
    customerPHONE: '',
    customerNIC: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the form data to match the Django backend's expected format
    const postData = {
      customerName: formData.customerName, // Update field name to match Django model
      email: formData.email,
      password: formData.password,
      customerPHONE: formData.customerPHONE,
      customerNIC: formData.customerNIC,
      user_type: 'customer', // Set the user_type as 'customer'
    };

    // Send the form data to the Django backend
    axios
      .post('http://localhost:8000/api/customer/', postData) // Assuming your Django backend endpoint is correct
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
        // You can redirect to a success page or display a success message here
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle the error or display an error message
      });
  };

  return (
    <div className="registerall">
      <div className="registerform">
        <form className="form" onSubmit={handleSubmit} style={{ width: '150%' }}>
          <p className="title">REGISTER</p>
          <p className="message">Signup now and get full access to our app.</p>

          <label>
            <input
              required
              type="text"
              className="input"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
            />
            <span>Username</span>
          </label>

          <label>
            <input
              required
              type="email"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span>Email</span>
          </label>
          <label>
            <input
              required
              type="password"
              className="input"
              name="password"
              value={formData.password}
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