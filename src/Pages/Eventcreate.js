import React, { useState } from 'react';
import axios from 'axios';
import './EventForm.css';

const EventForm = () => {
  const [eventData, setEventData] = useState({
    eventNAME: '',
    eventDATE: '',
    eventDISCRIPTION: '',
    eventLOCATION: '',
    eventSTARTTIME: '',
    eventIMAGE: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventData((prevState) => ({
      ...prevState,
      eventIMAGE: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('eventNAME', eventData.eventNAME);
    formData.append('eventDATE', eventData.eventDATE);
    formData.append('eventDISCRIPTION', eventData.eventDISCRIPTION);
    formData.append('eventLOCATION', eventData.eventLOCATION);
    formData.append('eventSTARTTIME', eventData.eventSTARTTIME);
    formData.append('eventIMAGE', eventData.eventIMAGE);

    axios
      .post('http://localhost:8000/api/events/', formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="event-form" >
      
      <label className="form-label">
        Event Name
        <input
          type="text"
          name="eventNAME"
          value={eventData.eventNAME}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Event Date
        <input
          type="date"
          name="eventDATE"
          value={eventData.eventDATE}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Event Description
        <textarea style={{ width: '150%'}}
          name="eventDISCRIPTION"
          value={eventData.eventDISCRIPTION}
          onChange={handleChange}
          className="form-textarea"
        />
      </label>
      <label className="form-label">
        Event Location
        <input
          type="text"
          name="eventLOCATION"
          value={eventData.eventLOCATION}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label className="form-label">
        Event Start Time
        <input
          type="time"
          name="eventSTARTTIME"
          value={eventData.eventSTARTTIME}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label className="form-label">
  Event Image
  <div className="form-file-input">
    <input style={{paddingBottom:'30px'}}
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="form-input"
    />
    <span className="form-file-name">
      {eventData.eventIMAGE ? eventData.eventIMAGE.name : 'No file chosen'}
    </span>
  </div>
</label>
      <button style={{width:'150%'}}type="submit" className="form-button">Create an Event</button>
    </form>
  );
};

export default EventForm;
