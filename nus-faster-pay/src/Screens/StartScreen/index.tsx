import React from "react";
import { useNavigate } from "react-router-dom";

function StartScreen() {
  const navigate = useNavigate();
  const [paymentArrangement, setPaymentArrangement] = React.useState("default");
  const [paymentCardSize, setPaymentCardSize] = React.useState("small");
  const [numOfPayment, setNumOfPayment] = React.useState(1);
  const ivConfig = {
    paymentArrangement,
    paymentCardSize,
    numOfPayment
  };

  return (
    <div>
      {/* vvvvvv TO BE REMOVED --- this is to just make it easier for us to code and debug if needed!!! */}
      <div style={{ padding: '10px', border: '1px solid black'}}>
        <h3>Config IVs here for easier debugging</h3>
        <p>Payment Arrangement</p>
        <select value={paymentArrangement} onChange={(e) => setPaymentArrangement(e.target.value)}>
          <option value="default">Default</option>
          <option value="outstanding">Outstanding</option>
        </select>
        <p>Payment Card Size</p>
        <select value={paymentCardSize} onChange={(e) => setPaymentCardSize(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <p>Number of Payments</p>
        <select value={numOfPayment} onChange={(e) => setNumOfPayment(parseInt(e.target.value))}>
          <option value={1}>1</option>
          <option value={3}>3</option>
        </select>
      </div>
      {/* ^^^^^ TO BE REMOVED --- this is to just make it easier for us to code and debug if needed!!! */}
      
      <button onClick={() => navigate("/account-dashboard", { state: ivConfig })}>Click to start!</button>
    </div>
  );
}

export default StartScreen;
