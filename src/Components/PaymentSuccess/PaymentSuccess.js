import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

function TicketPurchaseDetails() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const purchaseIds = JSON.parse(localStorage.getItem('purchaseIds') || '[]');

    const fetchDetails = async () => {
      try {
        const promises = purchaseIds.map(id => axios.get(`http://localhost:8000/api/ticket-purchases/${id}/`));
        const responses = await Promise.all(promises);
        setDetails(responses.map(response => response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Thank You for Your Purchase!
      </Typography>
      <Grid container spacing={3}>
        {details.map((detail, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">Event: {detail.event_name}</Typography>
                <Typography>Subtotal: ${detail.subtotal}</Typography>
                <Typography>Date of Purchase: {new Date(detail.purchase_date).toLocaleString()}</Typography>
                <Typography variant="h6">Ticket Package:</Typography>
                <div>
                  <Typography variant="subtitle1">Package Name: {detail.package_name}</Typography>
                  <Typography>Quantity: {detail.quantity}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TicketPurchaseDetails;
