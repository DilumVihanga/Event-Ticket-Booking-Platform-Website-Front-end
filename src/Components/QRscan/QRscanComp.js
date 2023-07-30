import React, { useState } from 'react';
import axios from 'axios';
import jsQR from 'jsqr';

function QRCodeUploader() {
  const [qrResult, setQrResult] = useState(null);
  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

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
      fetchUserDetails(response.data.user_id); // Fetch user details using user_id from purchase details
    } catch (error) {
      console.error('Error fetching purchase details:', error);
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
            fetchPurchaseDetails(code.data); // Fetch purchase details using the QR code data as the ID
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
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <p>{qrResult ? `QR Code Result: ${qrResult}` : 'No result yet'}</p>
      {purchaseDetails && (
        <div>
          <h3>Purchase Details:</h3>
          <p>Event Name: {purchaseDetails.event_name}</p>
          <p>Package Name: {purchaseDetails.package_name}</p>
          <p>Package Price: ${purchaseDetails.package_price}</p>
          <p>Quantity: {purchaseDetails.quantity}</p>
          <p>Subtotal: ${purchaseDetails.subtotal}</p>
          <p>Purchase Date: {new Date(purchaseDetails.purchase_date).toLocaleString()}</p>
        </div>
      )}
      {userDetails && (
        <div>
          <h3>User Details:</h3>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      )}
    </div>
  );
}

export default QRCodeUploader;
