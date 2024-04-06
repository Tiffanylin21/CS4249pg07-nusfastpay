import styled from "styled-components";
import { PaymentItem, PaymentCardSize } from "../../../Utils/Types";
import { Body } from "../../../Utils/StyledComponents";
import { COLORS } from "../../../Utils/Colors";
import { useContext } from "react";
import { CartContext } from "../../../Contexts/CartContext";
import { ReactComponent as Tick } from "../../../Utils/images/charm_tick.svg";

const Container = styled.div<{ size: PaymentCardSize }>`
  height: ${(props) =>
    props.size === "small"
      ? "20px"
      : props.size === "medium"
      ? "50px"
      : "120px"};
  padding: 10px;
  border-bottom: 1px solid ${COLORS.darkGray};
  background: ${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddedToCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
`;

const AddToCartText = styled.text`
  font-size: 0.75em;
  overflow: "hidden";
  whitespace: "nowrap";
  textoverflow: "ellipsis";
  color: ${COLORS.black};
  margin-left: 5px;
  margin-right: 5px;
`;

interface PaymentCardProps {
  item: PaymentItem;
  size: PaymentCardSize;
  isPriceShown: boolean;
  handleAddToCart: () => void;
}

export function PaymentCard({ item, size, isPriceShown, handleAddToCart }: PaymentCardProps) {
  const { cart } = useContext(CartContext);

  return (
    <Container size={size} isselected={cart.has(item.title)} onClick={handleAddToCart}>
      <Body>{item.title}</Body>
        {isPriceShown && 
          <PriceArrowContainer>
            {cart.has(item.title) && (
              <AddedToCartContainer>
                <Tick />
                <AddToCartText>Added to Cart</AddToCartText>
              </AddedToCartContainer>
            )}
            <Body>${item.price.toFixed(2)}</Body>
          </PriceArrowContainer>
        }
    </Container>
  );
}
