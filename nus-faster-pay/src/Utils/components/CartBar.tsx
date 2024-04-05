import styled from "styled-components";
import { ReactComponent as CartIcon } from "../images/cart_icon.svg";
import { COLORS } from "../Colors";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-bottom: 1px solid ${COLORS.gray};
`;

const TextContainer = styled.div`
  display: flex;
  background: ${COLORS.lightGray};
  justify-content: center;
  align-items: center;
  padding: 5px 10px 5px 5px;
`;

const CartText = styled.text`
  font-size: 1em;
  color: ${COLORS.darkestGray};
`;

const Icon = styled(CartIcon)`
  fill: ${COLORS.darkestGray};
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

interface CartBarProps {
  cartSize: number;
  totalPayment: number;
  navToShoppingCart?: () => void;
}

export default function CartBar({
  cartSize,
  totalPayment,
  navToShoppingCart,
}: CartBarProps) {
  const { cart, calculateTotal } = useContext(CartContext);

  return (
    <Container>
      <TextContainer onClick={navToShoppingCart}>
        <Icon />
        <CartText>
          Fees Items: {cartSize} Total: ${totalPayment.toFixed(2)}
        </CartText>
      </TextContainer>
    </Container>
  );
}
