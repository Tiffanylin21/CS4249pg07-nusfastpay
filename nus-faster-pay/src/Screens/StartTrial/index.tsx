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
    const startTime = new Date(); // captures the current time
    const totalClicks = 0;
    navigate("/account-dashboard", { state: { cart, ivConfig, startTime, totalClicks } });
  };

  const TASK_DESCRIPTION = ivConfig.trial.description;

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
