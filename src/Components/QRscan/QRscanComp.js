import React, { useState } from 'react';
import { QRScanner } from 'react-qr-scanner';

function QRCodeReader() {
  const [qrResult, setQrResult] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setQrResult(result);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QRScanner
        delay={300}
        onScan={handleScan}
        onError={handleError}
      />
      <p>{qrResult ? `QR Code Result: ${qrResult}` : 'No result yet'}</p>
    </div>
  );
}

export default QRCodeReader;
