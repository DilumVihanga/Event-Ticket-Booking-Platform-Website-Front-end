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
    const { name, value, type, checked, files } = e.target;
    const fieldValue = type === 'checkbox' ? checked : files ? files[0] : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to store the form data
    const formDataObj = new FormData();
    for (const key in formData) {
      if (key === 'organizerIMAGE') {
        formDataObj.append(key, formData[key], formData[key].name);
      } else {
        formDataObj.append(key, formData[key]);
      }
    }

    // Send the form data to the Django backend
    axios
      .post('http://localhost:8000/api/organizer/', formDataObj)
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
      <form className="form" onSubmit={handleSubmit} >
        {step === 1 && (
          <>
            <h2 class='title'style={{color:'rgb(153, 65, 225)', fontSize:'20px'}}>EVENT ORGANIZER REGISTRATION - STEP 1</h2>
            <div className="form-group">
              <label htmlFor="organizerNAME">Name:</label>
              <input
                type="text"
                id="organizerNAME"
                className="input"
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
                className="input"
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
                className="input"
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
                className="input"
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
                className="input"
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
                className="input"
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
                className="input"
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
                className="input"
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
                className="input"
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
                className="input"
                value={formData.organizerCITY}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerIMAGE">Image:</label>
              <input
                type="file"
                id="organizerIMAGE"
                name="organizerIMAGE"
                className="input"
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleNextStep} className="submit">
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h2 style={{color:'rgb(153, 65, 225)', fontSize:'22px', marginTop:'20px'}}>EVENT ORGANIZER REGISTRATION - STEP 2</h2>
            <div className="agreement">
              <h3 style={{color:'black', marginBottom:'10px', fontSize:'20px'}}>Guidelines and Rules</h3>
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
                <label htmlFor="organizerAGREED"style={{paddingLeft:'15px', paddingTop:'25px'}}>I agree to the guidelines and rules:</label>
                <input style={{marginLeft: '40px', marginTop: '-35px'}}
                  type="checkbox"
                  id="organizerAGREED"
                  name="organizerAGREED"
                  checked={formData.organizerAGREED}
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={handlePreviousStep} className="submit"style={{marginRight:'15px', marginTop:'20px'}}>
                Previous
              </button>
              <button type="submit" className="submit">
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
