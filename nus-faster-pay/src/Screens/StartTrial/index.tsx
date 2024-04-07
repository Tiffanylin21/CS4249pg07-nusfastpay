import { useLocation, useNavigate } from "react-router-dom";
import { OrangeButton } from "../../Utils/components/OrangeButton";
import styled from "styled-components";
import { COLORS } from "../../Utils/Colors";
import { createNewCart } from "../../Utils/methods/CartMethods";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 20px; // Add padding to align content as per your design
`;

const List = styled.ul`
  list-style: inside; // Adjust as needed to match your design
`;

const ListItem = styled.li`
  margin-bottom: 10px; // Adjust as needed for spacing
  font-weight: bold; // Make list items bold
`;

const Text = styled.div` // Changed to div to remove default h3 styling
  margin-bottom: 20px;
  font-weight: normal; // Set to normal to match your image
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const RegularText = styled.span`
  font-weight: normal;
`;

const StartButton = styled(OrangeButton)`
  margin-top: 50px; // Adjust as needed based on your design
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
      <Text>
        <BoldText>Task: Pay for the following fees together via PayNow QR code:</BoldText>
      </Text>
      <List>
        <ListItem><BoldText>Education Records System Tuition Fees ($4000.00)</BoldText></ListItem>
        <ListItem><BoldText>Library Fees ($2.00)</BoldText></ListItem>
        <ListItem><BoldText>Student Housing Fees ($3000.00)</BoldText></ListItem>
      </List>
      <Text>
        Task will be considered completed when you reach the PayNow QR code screen.
      </Text>
      <Text>
        <RegularText>This is a timed experiment.</RegularText> <BoldText>When you are ready, click “Start Trial”.</BoldText>
      </Text>
      <StartButton onClick={navToAccountDashboard}>Start Trial</StartButton>
    </Container>
  );
}

export default StartTrial;
