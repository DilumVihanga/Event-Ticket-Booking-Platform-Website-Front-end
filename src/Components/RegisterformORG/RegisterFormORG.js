import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const RegisterFormORG = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nic, setNIC] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
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

  const handleNICChange = (e) => {
    setNIC(e.target.value);
  };

  const handleAddressLine1Change = (e) => {
    setAddressLine1(e.target.value);
  };

  const handleAddressLine2Change = (e) => {
    setAddressLine2(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleAgreementChange = (e) => {
    setAgreed(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please enter matching passwords.');
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append('adminID', ''); // Replace with the actual adminID value
    formData.append('organizerNAME', name);
    formData.append('organizerEMAIL', email);
    formData.append('organizerREGNO', ''); // Set the appropriate value
    formData.append('organizerPHONE', ''); // Set the appropriate value
    formData.append('organizerPASSWORD', password);
    formData.append('organizerCONPASSWORD', confirmPassword);
    formData.append('organizerNIC', nic);
    formData.append('organizerIMAGE', image);
    formData.append('addressLINE1', addressLine1);
    formData.append('addressLINE2', addressLine2);
    formData.append('organizerCITY', city);
    formData.append('organizerAGREED', agreed);

    try {
      // Send the POST request to the Django backend API
      const response = await axios.post('http://localhost:8000/api/organizer/', formData);
      console.log('Form submitted:', response.data);
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setNIC('');
      setAddressLine1('');
      setAddressLine2('');
      setCity('');
      setImage('');
      setAgreed(false);
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle error and display an error message to the user
    }
  };

  const renderStepIndicator = (currentStep) => {
    return (
      <div className="step-indicator">
        <div className={`step ${currentStep === 1 ? 'active' : ''}`}>Step 1</div>
        <div className={`step ${currentStep === 2 ? 'active' : ''}`}>Step 2</div>
      </div>
    );
  };

  return (
    <div className="register-form-container">
      {renderStepIndicator(step)}
      <form className="register-form" onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <h2>Event Organizer Registration</h2>

            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div>
              <label htmlFor="nic">NIC Number:</label>
              <input
                type="text"
                id="nic"
                value={nic}
                onChange={handleNICChange}
                required
              />
            </div>
            <div>
              <label htmlFor="addressLine1">Address Line 1:</label>
              <input
                type="text"
                id="addressLine1"
                value={addressLine1}
                onChange={handleAddressLine1Change}
                required
              />
            </div>
            <div>
              <label htmlFor="addressLine2">Address Line 2:</label>
              <input
                type="text"
                id="addressLine2"
                value={addressLine2}
                onChange={handleAddressLine2Change}
                required
              />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
                required
              />
            </div>
            <div>
              <label htmlFor="image">Profile Picture:</label>
              <input
                type="file"
                id="image"
                value={image}
                onChange={handleImageChange}
                required
              />
            </div>
            <button type="button" onClick={() => setStep(step + 1)}>Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Event Organizer Registration</h2>
            <div className="agreement">
              <h3>Event Ticket Booking Platform Guidelines and Rules</h3>
              <ol>
                <li>
                  <strong>Account Registration:</strong>
                  <ul>
                    <li>Provide accurate and up-to-date information during the registration process.</li>
                    <li>Choose a strong and secure password to protect your account.</li>
                  </ul>
                </li>

                <li>
                  <strong>Event Listings:</strong>
                  <ul>
                    <li>Submit complete and accurate information about your events.</li>
                    <li>Include event details such as date, time, location, and ticket prices.</li>
                    <li>Upload high-quality images related toyour event.</li>
                    <li>Ensure that your event complies with all legal requirements and regulations.</li>
                  </ul>
                </li>

                <li>
                  <strong>Ticket Sales:</strong>
                  <ul>
                    <li>Set fair and reasonable prices for your tickets.</li>
                    <li>Clearly state the terms and conditions of ticket sales, including refund and cancellation policies.</li>
                    <li>Prevent unauthorized resale or distribution of tickets.</li>
                  </ul>
                </li>

                <li>
                  <strong>Communication with Attendees:</strong>
                  <ul>
                    <li>Respond promptly and professionally to attendee inquiries and concerns.</li>
                    <li>Provide clear instructions and information about the event to attendees.</li>
                  </ul>
                </li>

                <li>
                  <strong>Event Cancellation or Changes:</strong>
                  <ul>
                    <li>In case of event cancellation or significant changes, promptly notify ticket holders and provide appropriate refund options.</li>
                  </ul>
                </li>

                <li>
                  <strong>Compliance with Laws and Regulations:</strong>
                  <ul>
                    <li>Ensure that your event and ticket sales comply with all applicable laws and regulations, including consumer protection laws and data privacy regulations.</li>
                  </ul>
                </li>
              </ol>
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={handleAgreementChange}
                required
              />
              <label htmlFor="agreement">I agree to the guidelines and rules</label>
            </div>
            <button type="button" onClick={() => setStep(step - 1)}>Previous</button>
            <button type="submit">Register</button>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterFormORG;