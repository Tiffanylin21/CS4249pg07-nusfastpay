import React from "react";
import { Route, Routes } from "react-router-dom";
import StartScreen from "./Screens/StartScreen";
import "./App.css";
import PaymentOptions from "./Screens/PaymentOptions";
import QRCode from "./Screens/QRCode";
import AccountDashboard from "./Screens/AccountDashboard";
import ShoppingCart from "./Screens/ShoppingCart";
import CustomerDetails from "./Screens/CustomerDetails";
import NUSHeader from "./Utils/components/NUSHeader";
import PaymentItemDetails from "./Screens/PaymentItemDetails";
import StartTrial from "./Screens/StartTrial";

function App() {
  return (
    <div style={{ padding: "20px 100px 20px 100px" }}>
      <NUSHeader />
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/start-trial" element={<StartTrial />} />
        <Route path="/account-dashboard" element={<AccountDashboard />} />
        <Route path="/payment-item-details" element={<PaymentItemDetails />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/qr-code" element={<QRCode />} />
      </Routes>
    </div>
  );
}

export default App;
