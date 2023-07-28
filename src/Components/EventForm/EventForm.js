import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './EventForm.css';
import swal from 'sweetalert';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventNAME: '',
    eventDATE: '',
    eventDISCRIPTION: '',
    eventLOCATION: '',
    eventSTARTTIME: '',
    eventADDRESS: '',
    eventIMAGE: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('access_token');
    const decodedToken = jwt_decode(token);
    const user_id = decodedToken.user_id;

    const formData = new FormData();
    formData.append('eventNAME', eventData.eventNAME);
    formData.append('eventDATE', eventData.eventDATE);
    formData.append('eventDISCRIPTION', eventData.eventDISCRIPTION);
    formData.append('eventLOCATION', eventData.eventLOCATION);
    formData.append('eventSTARTTIME', eventData.eventSTARTTIME);
    formData.append('eventADDRESS', eventData.eventADDRESS);
    formData.append('eventIMAGE', eventData.eventIMAGE);
    formData.append('user', user_id); 

    axios
      .post('http://localhost:8000/api/events/', formData)
      .then((response) => {
        console.log(response.data);
        swal("Good job!", "Event Creation Successful!", "success");
      })
      .catch((error) => {
        console.error('Error:', error);
        swal("Oops!", "Something went wrong. Please try again.", "error");
      });
  };

  return (
    <div className="event-form-container">
      <div style={{ width: '60%', display: 'flex', margin: 'auto' }}>
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title">Create New Event</h2>
          <label className="form-label">
            Event Name
            <input
              type="text"
              className="input"
              name="eventNAME"
              value={eventData.eventNAME}
              onChange={(e) => setEventData({ ...eventData, eventNAME: e.target.value })}
            />
          </label>
          <label className="form-label">
            Event Date
            <input
              type="date"
              name="eventDATE"
              value={eventData.eventDATE}
              onChange={(e) => setEventData({ ...eventData, eventDATE: e.target.value })}
              className="input"
            />
          </label>
          <label className="form-label">
            Event Description
            <textarea
              name="eventDISCRIPTION"
              value={eventData.eventDISCRIPTION}
              onChange={(e) => setEventData({ ...eventData, eventDISCRIPTION: e.target.value })}
              className="input"
            />
          </label>
          <label className="form-label">
            Event Location
            <input
              type="text"
              name="eventLOCATION"
              value={eventData.eventLOCATION}
              onChange={(e) => setEventData({ ...eventData, eventLOCATION: e.target.value })}
              className="input"
            />
          </label>
          <label className="form-label">
            Event Address
            <input
              type="text"
              name="eventADDRESS"
              value={eventData.eventADDRESS}
              onChange={(e) => setEventData({ ...eventData, eventADDRESS: e.target.value })}
              className="input"
            />
          </label>
          <label className="form-label">
            Event Start Time
            <input
              type="time"
              name="eventSTARTTIME"
              value={eventData.eventSTARTTIME}
              onChange={(e) => setEventData({ ...eventData, eventSTARTTIME: e.target.value })}
              className="input"
            />
          </label>
          <label className="form-label">
            Event Image
            <div className="form-file-input">
              <input
                style={{ paddingBottom: '45px' }}
                type="file"
                accept="image/*"
                onChange={(e) => setEventData({ ...eventData, eventIMAGE: e.target.files[0] })}
                className="input"
              />
              <span className="form-file-name">
                {eventData.eventIMAGE ? eventData.eventIMAGE.name : 'No file chosen'}
              </span>
            </div>
          </label>
          <button type="submit" className="submit">
            Create an Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
