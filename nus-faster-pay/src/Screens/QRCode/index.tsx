import { useEffect, useState } from 'react';
import payLahImage from "./images/pay_lah.jpg"; // Import the image correctly
import { COLORS } from "../../Utils/Colors";
import { useLocation, useNavigate  } from "react-router-dom";
import { calculateTotal } from "../../Utils/methods/CartMethods";
import axios from 'axios'; // You'd need to install axios or use a different method to make HTTP requests.
import { FilledOrangeButton } from '../../Utils/components/FilledOrangeButton';

function QRCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDataSent, setIsDataSent] = useState(false);
  const { cart, ivConfig, startTime, totalClicks: initialTotalClicks } = location.state;
  const EMAIL = "marylim@gmail.com";

  const navigateToStartScreen = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!isDataSent) {
      const endTime = new Date();
      const totalTimeTaken = endTime.getTime() - new Date(startTime).getTime();
      const totalTimeTakenInSeconds = totalTimeTaken / 1000;

      axios.post("https://sheet.best/api/sheets/d440fae0-794c-432d-a60e-de5e9ab17512", {
        configCode: ivConfig.ivConfigCode, // Add this line to include the ivConfigCode
        totalClicks: initialTotalClicks,
        totalTimeTakenInSeconds: totalTimeTakenInSeconds,
      })
      .then(response => {
        console.log('Sheet updated successfully', response);
        setIsDataSent(true);
      })
      .catch(error => {
        console.error('Error updating sheet', error);
      });
  
      console.log(`Total time taken: ${totalTimeTakenInSeconds} seconds`);
    }
  }, [initialTotalClicks, isDataSent, ivConfig.ivConfigCode, startTime]); // Make sure to add ivConfig.ivConfigCode to the dependency array
  
  
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
      <div style={{ marginTop: "20px" }}>
        <FilledOrangeButton
          onClick={navigateToStartScreen}
          style={{ 
            fontSize: "1.5em", // Assuming the default is 1em, adjust as needed
            padding: "1em 2em", // Adjust based on the current padding
          }}
        >
          Click to start a new trial
        </FilledOrangeButton>
      </div>
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
    </div>
  );
}

export default QRCode;
