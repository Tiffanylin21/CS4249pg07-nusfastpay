import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function QRCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  return (
    <div>
        <p>
            QR Code Screen
        </p>
    </div>
  );
}

export default QRCode;
