import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { PaymentCard } from './Components/PaymentCard';
import { paymentItems } from '../../Utils/Data';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    margin: 10px;
`;


function AccountDashbaord() {
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;

  return (
    <Container>
        <p>
            Account Dashboard Screen
        </p>
        {paymentItems.map((item, index) => {
            return (
                <PaymentCard item={item} size={data.paymentCardSize} />
            )
        })}
    </Container>
  );
}

export default AccountDashbaord;
