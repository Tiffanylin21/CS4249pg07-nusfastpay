import React from "react";
import { useNavigate } from "react-router-dom";
import { OrangeButton } from "../../Utils/components/OrangeButton";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function StartScreen() {
  const navigate = useNavigate();
  const [ivConfigCode, setIvConfigCode] = React.useState("");
  const isValidIvCodeRegex = /^[AB]#[ABC]#[AB]$/;
  const handleStart = () => {
    if (isValidIvCodeRegex.test(ivConfigCode)) {
      const [
        accessibilityOfPriceInfoCode,
        paymentCardSizeCode,
        numOfPaymentCode,
      ] = ivConfigCode.split("#");
      const accessibilityOfPriceInfo =
        accessibilityOfPriceInfoCode === "A" ? "not shown" : "shown";
      const paymentCardSize =
        paymentCardSizeCode === "A"
          ? "small"
          : paymentCardSizeCode === "B"
          ? "medium"
          : "large";
      const numOfPayment = numOfPaymentCode === "A" ? 1 : 3;
      const ivConfig = {
        accessibilityOfPriceInfo,
        paymentCardSize,
        numOfPayment,
      };
      navigate("/start-trial", { state: ivConfig });
    } else {
      alert("Invalid IV Config Code");
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <InputContainer>
        <h3>Please enter the given trial code here:</h3>
        <input
          name="IV Config Code"
          value={ivConfigCode}
          onChange={(e) => setIvConfigCode(e.target.value)}
          required
          style={{ width: "80%", marginBottom: 30 }}
        />
        <OrangeButton onClick={handleStart}>Next</OrangeButton>
      </InputContainer>
    </div>
  );
}

export default StartScreen;
