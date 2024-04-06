import styled from "styled-components";
import nusHeaderImage from "../images/nus_logo_full-horizontal.jpg";
import { COLORS } from "../Colors";

const LowerBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BlueBar = styled.div`
  width: 100%;
  background-color: ${COLORS.secondary};
  padding: 5px;
`;

const OrangeBar = styled.div`
  width: 100%;
  background-color: ${COLORS.primary};
  padding: 5px;
`;

const GrayBar = styled.div`
  width: 100%;
  background-color: ${COLORS.gray};
  padding: 5px;
`;

export default function NUSHeader() {
  return (
    <div>
      <img src={nusHeaderImage} alt={"NUS Header"} style={{ width: "20%" }} />
      <LowerBarContainer>
        <BlueBar />
        <OrangeBar />
        <GrayBar />
      </LowerBarContainer>
    </div>
  );
}
