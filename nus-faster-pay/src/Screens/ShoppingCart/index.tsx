import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function ShoppingCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  return (
    <div>
        <p>
            Shopping Cart Screen
        </p>
        <button onClick={() => navigate("/account-dashboard", { state: data })}>Back</button>
        <button onClick={() => navigate("/payment-options", { state: data })}>Next</button>
    </div>
  );
}

export default ShoppingCart;
