import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function PaymentOptions() {
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;

  return (
    <div>
        <p>
            Payment Options Screen
        </p>
        <button onClick={() => navigate("/customer-details", { state: ivConfig })}>Next</button>
    </div>
  );
}

export default PaymentOptions;
