import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import './TicketPackageForm.css'; // Assuming you have a CSS file for this 
import swal from 'sweetalert';


const TicketPackageForm = () => {
  const [ticketPackageData, setTicketPackageData] = useState({
    eventID: '',
    package_name: '',
    package_description: '',
    package_price: '',
    package_ticketquantity: '',
  });

  const [events, setEvents] = useState([]);
  const token = localStorage.getItem('access_token');
  const decodedToken = jwt_decode(token);
  const user_id = decodedToken.user_id;

  useEffect(() => {
    // Fetch events for the current logged-in user
    axios
      .get(`http://localhost:8000/api/pak/${user_id}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [user_id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the API endpoint
    axios
      .post('http://localhost:8000/api/ticket-packages/', ticketPackageData)
      .then((response) => {
        console.log('Success:', response.data);
        // Handle any success actions if needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any error actions if needed
      });
  };

  return (
    <div className="event-form-container">
      <form onSubmit={handleSubmit} className="event-form">
        <h2 style={{marginBottom:'30px'}}className="title">New Ticket Package</h2>
        <label className="form-label">
          Select Event:
          <select
            value={ticketPackageData.eventID}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, eventID: e.target.value })
            }
            className="input"
          >
            <option value="">-- Select an Event --</option>
            {events.map((event) => (
              <option key={event.eventID} value={event.eventID}>
                {event.eventNAME}
              </option>
            ))}
          </select>
        </label>
        <label className="form-label">
          Package Name:
          <input
            type="text"
            value={ticketPackageData.package_name}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_name: e.target.value })
            }
            className="input"
          />
        </label>
        <label className="form-label">
          Package Description:
          <textarea
            value={ticketPackageData.package_description}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_description: e.target.value })
            }
            className="input form-textarea"
          />
        </label>
        <label className="form-label">
          Package Price:
          <input
            type="number"
            step="0.01"
            value={ticketPackageData.package_price}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_price: e.target.value })
            }
            className="input"
          />
        </label>
        <label className="form-label">
          Package Ticket Quantity:
          <input
            type="number"
            value={ticketPackageData.package_ticketquantity}
            onChange={(e) =>
              setTicketPackageData({ ...ticketPackageData, package_ticketquantity: e.target.value })
            }
            className="input"
          />
        </label>
        <button type="submit" className="form-button" onClick={() => swal("Good job!", "Package Created Sucessfully !", "success")}>Create Ticket Package</button>
      </form>
    </div>
  );
};

export default TicketPackageForm;
