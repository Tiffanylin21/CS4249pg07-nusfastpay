import React from "react";
import { Route, Routes } from "react-router-dom";
import StartScreen from "./Screens/StartScreen";
import "./App.css";
import PaymentOptions from "./Screens/PaymentOptions";
import QRCode from "./Screens/QRCode";
import AccountDashbaord from "./Screens/AccountDashboard";
import ShoppingCart from "./Screens/ShoppingCart";
import CustomerDetails from "./Screens/CustomerDetails";

function App() {  
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/account-dashboard" element={<AccountDashbaord />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/payment-options" element={<PaymentOptions />} />
      <Route path="/customer-details" element={<CustomerDetails />} />
      <Route path="/qr-code" element={<QRCode />} />
    </Routes>
  );
}

export default App;
