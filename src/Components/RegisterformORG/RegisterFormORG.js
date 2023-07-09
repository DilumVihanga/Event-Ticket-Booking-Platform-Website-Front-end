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

  const handleNextStep = (e) => {
    if (step === 1) {
      setStep(2);
    } else {
      handleSubmit(e);
    }
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  return (
    <div className="registration-form">
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
          
          <button type="button" onClick={handleNextStep}>
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
              <li>...</li>
              <li>...</li>
              <li>...</li>
              {/* Add your guidelines here */}
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
            <button type="button" onClick={handlePreviousStep}>
              Previous
            </button>
            <button type="submit" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationFormORG;
