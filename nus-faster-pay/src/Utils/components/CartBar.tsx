import styled from "styled-components";
import { FilledOrangeButton } from "./FilledOrangeButton";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

interface CartBarProps {
  cartSize: number;
  navToShoppingCart?: () => void;
}

export default function CartBar({
  navToShoppingCart,
}: CartBarProps) {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <FilledOrangeButton onClick={navToShoppingCart}>
        {`Cart: ${cart.size} Item(s)`}
      </FilledOrangeButton>
    </Container>
  );
}
