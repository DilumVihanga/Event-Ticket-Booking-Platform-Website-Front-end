import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './RegisterFormUser.css';

const RegistrationForm = () => {
  const navigate = useNavigate(); // Use the useNavigate hook
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    customerPHONE: '',
    customerNIC: '',
  });

  const isNICValid = (nic) => nic.length >= 9 && nic.length <= 12 && !isNaN(nic);
  const isPhoneValid = (phone) => phone.length === 10 && !isNaN(phone);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNICValid(formData.customerNIC)) {
      swal('Error', 'NIC should be between 9 to 12 digits.', 'error');
      return;
    }

    if (!isPhoneValid(formData.customerPHONE)) {
      swal('Error', 'Phone number should be exactly 10 digits.', 'error');
      return;
    }

    const postData = {
      user: {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: 'CUSTOMER',
      },
      customerPHONE: formData.customerPHONE,
      customerNIC: formData.customerNIC,
    };

    axios
      .post('http://localhost:8000/api/customer-profiles/', postData)
      .then((response) => {
        swal('Success', 'Registration successful!', 'success');
      })
      .catch((error) => {
        console.error('Error:', error);
        swal('Success', 'Registration successful!', 'success');
        navigate('/loginu'); // Navigate to the /loginu page
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
              name="username"
              value={formData.username}
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
