import React, { useEffect } from 'react';
import payLahImage from "./images/pay_lah.jpg"; // Import the image correctly
import { COLORS } from "../../Utils/Colors";
import { OrangeButton } from "../../Utils/components/OrangeButton";
import { useLocation, useNavigate  } from "react-router-dom";
import { calculateTotal } from "../../Utils/methods/CartMethods";
import axios from 'axios'; // You'd need to install axios or use a different method to make HTTP requests.

function QRCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, ivConfig, startTime, totalClicks: initialTotalClicks } = location.state;
  const EMAIL = "marylim@gmail.com";

  const navigateToStartScreen = () => {
    navigate("/");
  };

  useEffect(() => {
    if (startTime) {
      const endTime = new Date();
      const totalTimeTaken = endTime.getTime() - new Date(startTime).getTime();
      const totalTimeTakenInSeconds = totalTimeTaken / 1000;
  
      axios.post('http://localhost:5000/updateSheet', {
        configCode: ivConfig.ivConfigCode, // Add this line to include the ivConfigCode
        totalClicks: initialTotalClicks,
        totalTimeTakenInSeconds: totalTimeTakenInSeconds,
      })
      .then(response => {
        console.log('Sheet updated successfully', response);
      })
      .catch(error => {
        console.error('Error updating sheet', error);
      });
  
      console.log(`Total time taken: ${totalTimeTakenInSeconds} seconds`);
    }
  }, [startTime, initialTotalClicks, ivConfig.ivConfigCode]); // Make sure to add ivConfig.ivConfigCode to the dependency array
  
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ color: COLORS.success, textAlign: "center" }}>
        You have come to the end of the trial!
      </h1>
      <h2>PayNow</h2>
      <div style={{ marginBottom: "20px" }}>
        <div>
          <strong>Number</strong> ABCDEF12345
        </div>
        <div>
          <strong>Amount</strong> ${calculateTotal(cart).toFixed(2)}
        </div>
        <div>
          <strong>Email</strong> {EMAIL}
        </div>{" "}
        {/* Display the passed email or a placeholder */}
      </div>
      <p
        style={{ maxWidth: "500px", textAlign: "center", marginBottom: "20px" }}
      >
        Note: Please DO NOT use your BACK or RELOAD/REFRESH browser functions or
        CLOSE your browser while making payment.
      </p>
      <p>
        Please scan the QR code with your mobile banking app to complete the
        payment. This page will be updated when payment is complete.
      </p>
      <img
        src={payLahImage}
        alt="PayLah QR Code"
        style={{ width: "40%", height: "auto" }}
      />
      <OrangeButton onClick={navigateToStartScreen}>Return to Start Screen</OrangeButton>
    </div>
  );
}

export default QRCode;
