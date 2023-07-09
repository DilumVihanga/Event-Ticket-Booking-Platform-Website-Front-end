import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const RegistrationFormORG = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    organizerNAME: '',
    organizerEMAIL: '',
    organizerREGNO: '',
    organizerPHONE: '',
    organizerPASSWORD: '',
    organizerCONPASSWORD: '',
    organizerNIC: '',
    addressLINE1: '',
    addressLINE2: '',
    organizerCITY: '',
    organizerAGREED: false,
    organizerIMAGE: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the Django backend
    axios
      .post('http://localhost:8000/api/organizer/', formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
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
            <div className="form-group">
              <label htmlFor="organizerNAME">Name:</label>
              <input
                type="text"
                id="organizerNAME"
                name="organizerNAME"
                value={formData.organizerNAME}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerIMAGE">Image:</label>
              <input
                type="file"
                id="organizerIMAGE"
                name="organizerIMAGE"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerEMAIL">Email:</label>
              <input
                type="email"
                id="organizerEMAIL"
                name="organizerEMAIL"
                value={formData.organizerEMAIL}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerREGNO">Registration Number:</label>
              <input
                type="text"
                id="organizerREGNO"
                name="organizerREGNO"
                value={formData.organizerREGNO}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerPHONE">Phone:</label>
              <input
                type="text"
                id="organizerPHONE"
                name="organizerPHONE"
                value={formData.organizerPHONE}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerPASSWORD">Password:</label>
              <input
                type="password"
                id="organizerPASSWORD"
                name="organizerPASSWORD"
                value={formData.organizerPASSWORD}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerCONPASSWORD">Confirm Password:</label>
              <input
                type="password"
                id="organizerCONPASSWORD"
                name="organizerCONPASSWORD"
                value={formData.organizerCONPASSWORD}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerNIC">NIC Number:</label>
              <input
                type="text"
                id="organizerNIC"
                name="organizerNIC"
                value={formData.organizerNIC}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLINE1">Address Line 1:</label>
              <input
                type="text"
                id="addressLINE1"
                name="addressLINE1"
                value={formData.addressLINE1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLINE2">Address Line 2:</label>
              <input
                type="text"
                id="addressLINE2"
                name="addressLINE2"
                value={formData.addressLINE2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerCITY">City:</label>
              <input
                type="text"
                id="organizerCITY"
                name="organizerCITY"
                value={formData.organizerCITY}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleNextStep} className="step-button">
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h2>Event Organizer Registration - Step 2</h2>
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
                    <li>Upload high-quality images related to your event.</li>
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
              <div className="form-group">
                <label htmlFor="organizerAGREED">I agree to the guidelines and rules:</label>
                <input
                  type="checkbox"
                  id="organizerAGREED"
                  name="organizerAGREED"
                  checked={formData.organizerAGREED}
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={handlePreviousStep} className="step-button">
                Previous
              </button>
              <button type="submit" className="step-button">
                Register
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default RegistrationFormORG;
