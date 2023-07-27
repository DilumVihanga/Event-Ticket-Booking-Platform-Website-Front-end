import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventTable.css';
import jwt_decode from 'jwt-decode';

const EventTable = () => {
  const [events, setEvents] = useState([]);

  const token = localStorage.getItem('access_token');
  const decodedToken = jwt_decode(token);
  const user_id = decodedToken.user_id;
  console.log('user_id:', user_id);  

  useEffect(() => {
    // Fetch data from the Django backend API
    axios.get(`http://localhost:8000/api/pak/${user_id}`)
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div className="event-table-container">
      <table className="event-table">
        <thead>
          <tr>
            <th className="table-header-cell">Name</th>
            <th className="table-header-cell">Date</th>
            <th className="table-header-cell">Description</th>
            <th className="table-header-cell">Location</th>
            <th className="table-header-cell">Start Time</th>
            <th className="table-header-cell">Address</th>
            <th className="table-header-cell">Image</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td className="table-cell">{event.eventNAME}</td>
              <td className="table-cell">{event.eventDATE}</td>
              <td className="table-cell">{event.eventDISCRIPTION}</td>
              <td className="table-cell">{event.eventLOCATION}</td>
              <td className="table-cell">{event.eventSTARTTIME}</td>
              <td className="table-cell">{event.eventADDRESS}</td>
              <td className="table-cell">
                {event.eventIMAGE && <img src={`http://localhost:8000/${event.eventIMAGE}`} alt={event.eventNAME} className="event-image" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;