import { useLocation, useNavigate } from "react-router-dom";
import { OrangeButton } from "../../Utils/components/OrangeButton";
import styled from "styled-components";
import { COLORS } from "../../Utils/Colors";
import { createNewCart } from "../../Utils/methods/CartMethods";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Text = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
`;

const StartButton = styled(OrangeButton)`
  margin-top: 100px;
  background-color: ${COLORS.primary};
  font-weight: bold;
  padding: 12px 20px 12px 20px;
  color: ${COLORS.white};
  align-self: center;
`;

function StartTrial() {
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;
  const navToAccountDashboard = () => {
    const cart = createNewCart();
    navigate("/account-dashboard", { state: { cart, ivConfig } });
  };

  const TASK_DESCRIPTION =
    ivConfig.numOfPayment === 1
      ? "Make payment for “Education Records System Tuition Fees” ($4000.00) via PayNow QR Code."
      : 'Make payment for “Education Records System Tuition Fees” ($4000.00), "Student Housing Fees" ($3000.00) and "Season Parking Fees" ($350.00) via PayNow QR Code.';

  return (
    <Container>
      <Text>Task: {TASK_DESCRIPTION}</Text>
      <Text>
        Task will be considered completed when you reach the PayNow QR code
        screen.
      </Text>
      <Text>
        This is a timed experiment. When you are ready, click “Start Trial”.
      </Text>
      <StartButton onClick={navToAccountDashboard}>Start Trial</StartButton>
    </Container>
  );
}

export default StartTrial;