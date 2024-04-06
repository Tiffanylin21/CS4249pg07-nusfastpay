import React from "react";
import { useNavigate } from "react-router-dom";
import { OrangeButton } from "../../Utils/components/OrangeButton";
import styled from "styled-components";
import { getTrial } from "../../Utils/Data";
import { IVConfig, PaymentCardSize } from "../../Utils/Types";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

function StartScreen() {
  const navigate = useNavigate();
  const [ivConfigCode, setIvConfigCode] = React.useState("");
  const isValidIvCodeRegex = /^[AB]#[ABC]#[ABCDEF]$/;
  const handleStart = () => {
    if (isValidIvCodeRegex.test(ivConfigCode)) {
      const [
        accessibilityOfPriceInfoCode,
        paymentCardSizeCode,
        trialCode,
      ] = ivConfigCode.split("#");
      const accessibilityOfPriceInfo =
        accessibilityOfPriceInfoCode === "A" ? "not shown" : "shown";
      const paymentCardSize: PaymentCardSize =
        paymentCardSizeCode === "A"
          ? "small"
          : paymentCardSizeCode === "B"
          ? "medium"
          : "large";
      const trial = getTrial(trialCode);
      const ivConfig: IVConfig = {
        accessibilityOfPriceInfo: accessibilityOfPriceInfo,
        paymentCardSize: paymentCardSize,
        trial: trial,
        ivConfigCode: ivConfigCode, // Include the raw config code
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
