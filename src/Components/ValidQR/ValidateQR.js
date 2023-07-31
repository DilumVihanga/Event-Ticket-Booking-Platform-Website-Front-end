import React, { useState } from 'react';
import axios from 'axios';
import jsQR from 'jsqr';
import NavComp from '../Nav/NavComp';
import { Container, Paper, Typography, Button, Grid, Box, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import swal from 'sweetalert';

function QRCodeUploader() {
  const [qrResult, setQrResult] = useState(null);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [validated, setValidated] = useState(null);
  const fileInputRef = React.createRef();

  const fetchValidationStatus = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/qr-codes/${id}`);
      setValidated(response.data.validated);
    } catch (error) {
      console.error('Error fetching validation status:', error);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users/${userId}/`);
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchPurchaseDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/ticket-purchases/${id}/`);
      setPurchaseDetails(response.data);
    } catch (error) {
      console.error('Error fetching purchase details:', error);
    }
  };

  const validateQRCode = async () => {
    try {
      await axios.post(`http://localhost:8000/api/validate-qr-code/${qrResult}/`, { validated: validated });
      swal("Validated!", "Allowed Checked In!", "success");
      fetchValidationStatus(qrResult);
    } catch (error) {
      console.error('Error validating QR code:', error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = document.createElement('img');
        image.src = event.target.result;
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, image.width, image.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code) {
            setQrResult(code.data);
            fetchPurchaseDetails(code.data);
            fetchValidationStatus(code.data);
          } else {
            setQrResult('No QR code found');
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      
      <Container style={{ paddingTop: '100px' }}>
        <Paper elevation={3} style={{ padding: '60px' }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Scan QR Code
          </Typography>
          <Typography variant="subtitle1" style={{ color: validated ? "red" : "green", textAlign: 'center' }}>
            {validated !== null ? (validated ? "This QR code is validated." : "This QR code is not validated.") : ''}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <IconButton color="primary" onClick={() => fileInputRef.current.click()} size='3xl'>
                <PhotoCamera />
              </IconButton>
              <Typography variant="subtitle1">{qrResult ? `QR Code Result: ${qrResult}` : 'No result yet'}</Typography>
            </Grid>
            {purchaseDetails && (
              <Grid item xs={6}>
                <Box style={{paddingLeft:'220px'}}>
                  <Typography variant="h5">Purchase Details:</Typography>
                  <Typography>Event Name: {purchaseDetails.event_name}</Typography>
                  <Typography>Package Name: {purchaseDetails.package_name}</Typography>
                  <Typography>Package Price: ${purchaseDetails.package_price}</Typography>
                  <Typography>Quantity: {purchaseDetails.quantity}</Typography>
                  <Typography>Subtotal: ${purchaseDetails.subtotal}</Typography>
                  <Typography>Purchase Date: {new Date(purchaseDetails.purchase_date).toLocaleString()}</Typography>
                </Box>
              </Grid>
            )}
            {userDetails && (
              <Grid item xs={6}>
                <Box style={{paddingTop:'20px'}}>
                  <Typography variant="h5">User Details:</Typography>
                  <Typography>Username: {userDetails.username}</Typography>
                  <Typography>Email: {userDetails.email}</Typography>
                </Box>
              </Grid>
            )}
            {qrResult && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={validateQRCode}
                >
                  Validate QR Code
                </Button>
              </div>
            )}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default QRCodeUploader;
