import React, { useState } from 'react';
import axios from 'axios';
import './RegisterFormUser.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    customerPHONE: '',
    customerNIC: '',
  });

  const [usernameTaken, setUsernameTaken] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUsernameEmailValidation = () => {
    axios
      .get('http://localhost:8000/api/validate-username-email/', {
        params: {
          username: formData.username,
          email: formData.email,
        },
      })
      .then((response) => {
        setUsernameTaken(response.data.username_taken);
        setEmailTaken(response.data.email_taken);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform username and email validation before submitting the form
    handleUsernameEmailValidation();

    // Check if the username and email are available
    if (!usernameTaken && !emailTaken) {
      // Convert the form data to match the Django backend's expected format
      const postData = {
        user: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: 'CUSTOMER', // Assuming this is the role for a customer, adjust it according to your Django backend if needed
        },
        customerPHONE: formData.customerPHONE,
        customerNIC: formData.customerNIC,
      };

      // Send the form data to the Django backend
      axios
        .post('http://localhost:8000/api/customer-profiles/', postData) // Assuming your Django backend endpoint is correct
        .then((response) => {
          // Handle the response from the backend
          console.log(response.data);
          // You can redirect to a success page or display a success message here
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle the error or display an error message
        });
    } else {
      // Display error messages for username and email if they are already taken
      console.log('Please choose a different username and/or email.');
    }
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
              onBlur={handleUsernameEmailValidation}
            />
            <span>Username</span>
          </label>

          {/* Display validation error messages */}
          {usernameTaken && <p style={{color:'red', marginTop:'-15px'}} className="error">Username is already taken.</p>}

          <label>
            <input
              required
              type="email"
              className="input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleUsernameEmailValidation}
            />
            <span>Email</span>
          </label>

          {/* Display validation error messages */}
          {emailTaken && <p style={{color:'red', marginTop:'-15px'}} className="error">Email is already taken.</p>}

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
