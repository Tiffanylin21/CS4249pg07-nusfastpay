import { useContext } from "react";
import payLahImage from "./images/pay_lah.jpg"; // Import the image correctly
import { CartContext } from "../../Contexts/CartContext";
import { COLORS } from "../../Utils/Colors";

function QRCode() {
  const { calculateTotal } = useContext(CartContext);
  const EMAIL = "marylim@gmail.com"

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
      <h1 style={{ color: COLORS.success }}>You have come to the end of the trail!</h1>
      <h2>PayNow</h2>
      <div style={{ marginBottom: "20px" }}>
        <div>
          <strong>Number</strong> ABCDEF12345
        </div>
        <div>
          <strong>Amount</strong> ${calculateTotal().toFixed(2)}
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
    </div>
  );
}

export default QRCode;
