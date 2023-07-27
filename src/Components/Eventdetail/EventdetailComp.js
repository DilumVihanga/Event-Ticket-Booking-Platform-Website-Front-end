import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClock, faLocationDot, faUser, faTag } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

export default function EventDetailComp({ match }) {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    const fetchEventDetails = async () => {
      const response = await axios.get(`http://localhost:8000/api/events/${id}`);
      setEventData(response.data);
    };

    fetchEventDetails();
  }, [id]);
  console.log('eventData:', eventData);
  console.log('id:', id);
  console.log('matchsajkjska');

  return (
    <div>
      <div>
        
        <header>
          <div className="header-banner" style={{ backgroundImage: `url(${eventData.eventIMAGE})` }}>
            <h1 className="detailhead">{eventData.eventNAME}</h1>
            <a href="/orderform">
              <button className="bookbutton">Buy Tickets</button>
            </a>
          </div>
        </header>
        <section style={{marginTop:'21em'}} className="content">
          <div>
            <div>
              <ul className="service-flex-container">
                <li className="service-flex-item">
                  <p className="small">
                    <FontAwesomeIcon icon={faCalendarDays} size="2xl" />
                    <br />
                    <span className="textb">Date<br /></span>
                    <span className="textp">{eventData.eventDATE}</span>
                  </p>
                </li>
                <li className="service-flex-item">
                  <p className="small">
                    <FontAwesomeIcon icon={faClock} size="2xl" />
                    <br />
                    <span className="textb">Time<br /></span>
                    <span className="textp">{eventData.eventSTARTTIME}</span>
                  </p>
                </li>
                <li className="service-flex-item">
                  <p className="small">
                    <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                    <br />
                    <span className="textb">Location<br /></span>
                    <span className="textp">{eventData.eventADDRESS}</span>
                  </p>
                </li>
                <li className="service-flex-item">
                  <p className="small">
                    <FontAwesomeIcon icon={faUser} size="2xl" />
                    <br />
                    <span className="textb">Organizer<br /></span>
                    <span className="textp">Music Lanka LTD</span>
                  </p>
                </li>
                <li className="service-flex-item">
                  <p className="small">
                    <FontAwesomeIcon icon={faTag} size="2xl" />
                    <br />
                    <span className="textb">Category<br /></span>
                    <span className="textp">Music Event / Indoor</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <article className="articleevent">
            <p>{eventData.eventDISCRIPTION}</p>
          </article>
        </section>
      </div>
    </div>
  );
}
