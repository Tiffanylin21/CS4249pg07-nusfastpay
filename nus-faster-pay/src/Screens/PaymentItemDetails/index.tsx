import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  TextContainer,
  Body,
  OrangeButton,
} from "../../Utils/SharedComponents";
import { COLORS } from "../../Utils/Colors";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

const CenteredTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primary};
  padding: 12px;
`;

const SpacedBetweenTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 12px;
`;
const MatricIDContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 10px;
  margin-bottom: 20px;
`;

const MatricIDLabel = styled.label`
  padding: 10px;
`;

const InputTextField = styled.input`
  min-width: 0px;
  padding: 10px;
  margin-left: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function PaymentItemDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { item, ivConfig } = location.state;
  const [matricId, setMatricId] = React.useState("");

  const DESCRIPTIONONE =
    "For new students, please make payment at least 3 days after you have" +
    " completed Registration Part One, as your student ID and fees will only" +
    " be available in NUSFastPay at that time.";
  const DESCRIPTIONTWO =
    "Please click here to access" +
    " Education Records System if you need more information on your outstanding" +
    " tuition and other miscellaneous student fees.";

  const navBack = () => {
    navigate("/account-dashboard", { state: ivConfig });
  };

  const navToShoppingCart = () => {
    navigate("/shopping-cart", { state: { item, ivConfig } });
  };

  const validateMatricId = () => {
    if (!matricId.match(/^[A][0-9]{7}[A-Z]$/)) {
      alert("Please enter a valid Matric ID");
      return false;
    }
    return true;
  };

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (validateMatricId()) {
      addToCart(item.title);
      navToShoppingCart();
    }
  };

  return (
    <Container>
      <TextContainer style={{ marginBottom: 10 }}>
        <Title>{item.title}</Title>
      </TextContainer>
      <Container
        style={{ border: `solid 1px ${COLORS.darkGray}`, padding: 20 }}
      >
        <Body
          style={{
            position: "absolute",
            marginTop: -10,
            marginBottom: 10,
            textAlign: "center",
            fontSize: 12,
            paddingLeft: 10,
          }}
        >
          Please complete the following details
        </Body>
        <TextContainer style={{ marginTop: 30, marginBottom: 30 }}>
          <Body style={{ textAlign: "center" }}>{DESCRIPTIONONE}</Body>
          <br />
          <br />
          <br />
          <Body style={{ textAlign: "center" }}>{DESCRIPTIONTWO}</Body>
        </TextContainer>
        <MatricIDContainer>
          <MatricIDLabel>Matric ID *</MatricIDLabel>
          <InputTextField
            id="matricId"
            value={matricId}
            onChange={(e) => setMatricId(e.target.value)}
            required
          />
        </MatricIDContainer>
        <CenteredTextContainer>
          <Body>Debit Balance: ${item.price.toFixed(2)}</Body>
        </CenteredTextContainer>
        <SpacedBetweenTextContainer>
          <Body>Payment Amount *</Body>
          <InputTextField
            id="paymentAmount"
            value={"$" + item.price.toFixed(2)}
            disabled
            style={{ textAlign: "right" }}
          />
        </SpacedBetweenTextContainer>
      </Container>
      <ButtonsContainer>
        {item.price > 0 && (
          <OrangeButton className="me-3" onClick={handleAddToCart}>
            Add to Fees and Charges Cart
          </OrangeButton>
        )}
        <OrangeButton onClick={navBack}>Continue Shopping</OrangeButton>
      </ButtonsContainer>
    </Container>
  );
}

export default PaymentItemDetails;