import React, { useState, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Body, TextContainer, Title } from "../../Utils/StyledComponents";
import { COLORS } from "../../Utils/Colors";
import { OrangeButton } from "../../Utils/components/OrangeButton";

function CustomerDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;
  const [email, setEmail] = useState(""); // State to hold the email input

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/qr-code", { state: { ivConfig, email } });
  };

  // Handler for the Back button
  const handleBack = () => {
    navigate("/payment-options", { state: ivConfig });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextContainer style={{ alignSelf: "start" }}>
        <Title>Customer Details</Title>
        <br/>
        <Body style={{ marginBottom: 10, textAlign: 'center' }}>
          If you wish to have a receipt emailed to you following payment, provide
          your email address here.
        </Body>
      </TextContainer>

      <form
        onSubmit={handleSubmit}
        style={{ width: "80%", padding: 30}}
      >
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "10px" }}
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <OrangeButton
            className="me-3"
            type="submit"
          >
            Continue
          </OrangeButton>
          <OrangeButton
            type="button"
            onClick={handleBack}
          >
            Select a different payment method
          </OrangeButton>
        </div>
      </form>
    </div>
  );
}

export default CustomerDetails;
