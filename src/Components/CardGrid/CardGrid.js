/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import '../CardGrid/CardGrid.css';
import axios from 'axios';

export default function CardGrid() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await axios.get('http://localhost:8000/api/events');
    setEvents(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <div className="main" id="upcomingevents">
        <ul className="cards">
          {events.map((event, index) => (
            <li key={event.eventID} className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src={event.eventIMAGE} alt={event.eventNAME} />
                </div>
                <div className="card_content">
                  <h2 className="card_title">{event.eventNAME}</h2>
                  <p className="card_text">{event.eventDISCRIPTION}</p>
                  <p className="card_text">Index: {index}</p> {/* Accessing the index */}
                  <button className="btn card_btn">Book Now</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
