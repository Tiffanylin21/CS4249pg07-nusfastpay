import { useLocation } from "react-router-dom";
import { PaymentCard } from "./Components/PaymentCard";
import { paymentItems, sortedPaymentItems } from "../../Utils/Data";
import {
  Container,
  Title,
  TextContainer,
  Body,
} from "../../Utils/StyledComponents";
import { COLORS } from "../../Utils/Colors";

function AccountDashbaord() {
  const location = useLocation();
  const ivConfig = location.state;
  const DESCRIPTION = "For new students, please make payment at least 3 days after you have completed Registration Part One, as your student ID and fees will only be available in NUSfastPay at that time.";

  return (
    <Container>
      <TextContainer style={{ marginBottom: 10 }}>
        <Title>Account Dashboard</Title>
          <br />
          <br />
          <br />
          <Body style={{ textAlign: "center" }}>{DESCRIPTION}</Body>
      </TextContainer>
      <TextContainer
        style={{ backgroundColor: COLORS.darkGray, padding: "10px" }}
      >
        <Body style={{ marginBottom: 10, textAlign: "center" }}>
          Student Account Balances
        </Body>
      </TextContainer>
      {(ivConfig.paymentArrangement === "default"
        ? paymentItems
        : sortedPaymentItems
      ).map((item, index) => {
        return <PaymentCard item={item} size={ivConfig.paymentCardSize} />;
      })}
    </Container>
  );
}

export default AccountDashbaord;
