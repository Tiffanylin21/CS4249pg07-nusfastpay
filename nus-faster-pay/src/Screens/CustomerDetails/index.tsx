import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function CustomerDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;

  return (
    <div>
        <p>
            Customer Details Screen
        </p>
        <button onClick={() => navigate("/qr-code", { state: ivConfig })}>Next</button>
    </div>
  );
}

export default CustomerDetails;
