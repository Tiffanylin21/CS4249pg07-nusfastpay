import styled from "styled-components";
import { FilledOrangeButton } from "./FilledOrangeButton";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

interface CartBarProps {
  cartSize: number;
  totalPayment: number;
  navToShoppingCart?: () => void;
}

export default function CartBar({
  cartSize,
  navToShoppingCart,
}: CartBarProps) {

  return (
    <Container>
      <FilledOrangeButton onClick={navToShoppingCart}>
        {`Cart: ${cartSize} Item(s)`}
      </FilledOrangeButton>
    </Container>
  );
}
