import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Body, TextContainer, Title } from "../../Utils/StyledComponents";
import { OrangeButton } from "../../Utils/components/OrangeButton";
import CartBar from "../../Utils/components/CartBar";
import useClickTracker from '../../Utils/methods/useClickTracker';

function CustomerDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, ivConfig, startTime } = location.state;
  const totalClicks = useClickTracker();
  const EMAIL = "marylim@gmail.com";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/qr-code", { state: { cart, ivConfig, startTime, totalClicks } });
  };

  // Handler for the Back button
  const handleBack = () => {
    navigate("/payment-options", { state: { cart, ivConfig, startTime } });
  };

  const navToShoppingCart = () => {
    navigate("/shopping-cart", { state: { cart, ivConfig, startTime } });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CartBar cartSize={cart.size} navToShoppingCart={navToShoppingCart} />
      <TextContainer style={{ alignSelf: "start" }}>
        <Title>Customer Details</Title>
        <br />
        <Body style={{ marginBottom: 10, textAlign: "center" }}>
          If you wish to have a receipt emailed to you following payment,
          provide your email address here.
        </Body>
      </TextContainer>

      <form onSubmit={handleSubmit} style={{ width: "80%", padding: 30 }}>
        <label
          htmlFor="email"
          style={{ display: "block", marginBottom: "10px" }}
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={EMAIL}
          disabled
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <OrangeButton className="me-3" type="submit">
            Continue
          </OrangeButton>
          <OrangeButton type="button" onClick={handleBack}>
            Select a different payment method
          </OrangeButton>
        </div>
      </form>
    </div>
  );
}

export default CustomerDetails;
