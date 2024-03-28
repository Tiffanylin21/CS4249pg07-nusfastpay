import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import payLahImage from "./images/pay_lah.jpg"; // Import the image correctly
import { CartContext } from "../../Contexts/CartContext";
import { OrangeButton } from "../../Utils/components/OrangeButton";

function QRCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const { ivConfig, email } = location.state; // Ensure a fallback for ivConfig to an empty object
  const { calculateTotal } = useContext(CartContext);

  // Handlers for button actions
  const handleBack = () => {
    navigate("/account-dashboard", { state: ivConfig });
  };

  const handleSelectDifferent = () => {
    navigate("/payment-options", { state: ivConfig });
  };

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
      <h2>PayNow</h2>
      <div style={{ marginBottom: "20px" }}>
        <div>
          <strong>Number</strong> ABCDEF12345
        </div>
        <div>
          <strong>Amount</strong> ${calculateTotal().toFixed(2)}
        </div>
        <div>
          <strong>Email</strong> {email || "No email provided"}
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
      <div style={{ position: "relative", maxWidth: "90%", height: "auto" }}>
        <img
          src={payLahImage}
          alt="PayLah QR Code"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <OrangeButton className="mb-3" onClick={handleSelectDifferent}>
          Select a different payment method
        </OrangeButton>
        <OrangeButton onClick={handleBack}>
          Cancel payment
        </OrangeButton>
      </div>
    </div>
  );
}

export default QRCode;
