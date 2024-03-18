import styled from "styled-components";
import { PaymentItem, PaymentCardSize } from "../../../Utils/Types";
import { Subtitle, Body } from "../../../Utils/SharedComponents";
import { COLORS } from "../../../Utils/Colors";

const Container = styled.div<{size: PaymentCardSize}>`
    width: 80%;
    height: ${props => props.size === 'small' ? '20px' : props.size === 'medium' ? '50px' : '120px'};
    padding: 10px;
    background: ${COLORS.white};
    border: 1px solid black;
`;

interface PaymentCardProps {
        item: PaymentItem;
        size: PaymentCardSize;
};

export function PaymentCard({ item, size }: PaymentCardProps) {
  return (
    <Container size={size}>
        <Subtitle>{item.title}</Subtitle>
        <Body>{item.description}</Body>
    </Container>
  );
}
