import React, { useState } from 'react';
import axios from 'axios';
import jsQR from 'jsqr';
import NavComp from '../Nav/NavComp';
import { Container, Paper, Typography, Button, Grid, Box, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import swal from 'sweetalert';


function QRCodeUploader() {
  const [qrResult, setQrResult] = useState(null);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [validated, setValidated] = useState(null);
  const fileInputRef = React.createRef();

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
      // Here you may also want to set the validation status from the response if available
      // setValidated(response.data.qr_code.validated);
    } catch (error) {
      console.error('Error fetching purchase details:', error);
    }
  };

  const validateQRCode = async () => {
    try {
      await axios.post(`http://localhost:8000/api/validate-qr-code/${qrResult}/`, { validated: validated },swal("Validated!", "Allowed Checked In!", "success"));
      // You may want to refresh the data after validation, e.g., re-fetch purchase details
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
      <NavComp />
      <Container style={{ paddingTop: '200px' }}>
        <Paper elevation={3} style={{ padding: '60px' }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
            Scan QR Code
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={validated}
                      onChange={(e) => setValidated(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Validate QR Code"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={validateQRCode}
                >
                  Update Validation Status
                </Button>
                {validated && <Typography variant="subtitle1" color="success"></Typography>}
              </div>
            )}
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default QRCodeUploader;
