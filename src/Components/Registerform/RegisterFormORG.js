import React, { useState } from 'react';
import './Register.css';

const RegisterFormORG = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!validateNIC(nic)) {
      alert('Invalid NIC number. Please enter a valid NIC number.');
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', name, email, password, nic, addressLine1, addressLine2, city, image, agreed);
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    setNIC('');
    setAddressLine1('');
    setAddressLine2('');
    setCity('');
    setImage('');
    setAgreed(false);
  };

  const validateNIC = (nic) => {
    const nicRegex = /^(\d{9}(\d|v|V)|\d{12})$/;
    return nicRegex.test(nic);
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
            <h2>Event Organizer Registration - Step 1</h2>
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
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                value={image}
                onChange={handleImageChange}
                required
              />
            </div>
            <button type="button" onClick={handleNextStep}>Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Event Organizer Registration - Step 2</h2>
            <div className="agreement">
              <h3>Event Ticket Booking Platform Guidelines and Rules</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla urna non nunc vestibulum, at pharetra metus tempus. Integer sagittis nulla velit, in cursus nulla commodo sed. Fusce et risus bibendum, posuere nulla a, placerat lorem. Integer non sagittis justo.</p>
              <p>By proceeding, you agree to the event ticket booking platform guidelines and rules.</p>
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                onChange={handleAgreementChange}
                required
              />
              <label htmlFor="agreement">I agree to the guidelines and rules</label>
            </div>
            <button type="button" onClick={handlePreviousStep}>Previous</button>
            <button type="submit">Register</button>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterFormORG;
