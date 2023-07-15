/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import '../CardGrid/CardGrid.css';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const event = {
  eventNAME: 'Sample Event',
};

export default function CardGrid() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="main" id="upcomingevents">
        <Grid container spacing={2}>
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.eventID}>
              <StyledCard sx={{ maxWidth: 345 }} >
                <div className="card_image">
                  <img src={event.eventIMAGE} alt={event.eventNAME} />
                </div>
                <CardContent style={{ fontFamily: 'Arial' }}>
      <Typography variant="h5" component="div" style={{ fontSize: '24px' }}>
        {event.eventName}
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{ marginBottom:'10px' }}>
        {event.eventDISCRIPTION}
      </Typography>
      <button
        className="btn card_btn"
        style={{
          fontFamily: 'Arial',
          fontSize: '18px',
          backgroundColor: '#9364f0e6',
          color: '#fff',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        Book Now
      </button>
    </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
