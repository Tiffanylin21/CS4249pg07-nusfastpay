import styled from "styled-components";
import { PaymentItem, PaymentCardSize } from "../../../Utils/Types";
import { Body } from "../../../Utils/StyledComponents";
import { COLORS } from "../../../Utils/Colors";
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
  itemInCart: boolean;
  handleAddToCart: () => void;
}

export function PaymentCard({
  item,
  size,
  isPriceShown,
  itemInCart,
  handleAddToCart,
}: PaymentCardProps) {
  return (
    <Container size={size} onClick={handleAddToCart}>
      <Body>{item.title}</Body>
      {isPriceShown && (
        <PriceArrowContainer>
          {itemInCart && (
            <AddedToCartContainer>
              <Tick />
              <AddToCartText>Added to Cart</AddToCartText>
            </AddedToCartContainer>
          )}
          <Body>${item.price.toFixed(2)}</Body>
        </PriceArrowContainer>
      )}
    </Container>
  );
}
