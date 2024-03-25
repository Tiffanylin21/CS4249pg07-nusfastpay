import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { paymentItems } from "../../Utils/Data";
import CartItemCard from "./Components/CartItemCard";
import {
  OrangeButton,
  TextContainer,
  Title,
} from "../../Utils/SharedComponents";
import GrandTotal from "./Components/GrandTotal";
import "bootstrap/dist/css/bootstrap-grid.min.css";

function ShoppingCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useContext(CartContext);
  const { ivConfig } = location.state;

  const getPaymentItemsInCart = () => {
    // returns a list of payment items that are in cart
    return paymentItems.filter((item) => cart.has(item.title));
  };

  const [itemsShown, setItemsShown] = useState(getPaymentItemsInCart);
  const navBack = () => navigate("/account-dashboard", { state: ivConfig });

  const updateItemsShown = () => {
    // updates itemsShown state
    setItemsShown(getPaymentItemsInCart());
  };

  return (
    <div>
      <Title>Fees and Charges Cart</Title>
      <TextContainer
        style={{ borderBottom: "1px solid LightGray", paddingBottom: "40px" }}
      >
        This is a list of your payment selections. To proceed, please select
        Process Payment. To add more items to your Fees Cart, please use the
        menu option to navigate to Student Fees & Charges.{" "}
        <span style={{ color: "blue" }}>
          <b>
            With effect from 1 Jan 2024, a card/eWallet processing fee of 1%
            will be applied to all payments made using Visa, MasterCard, Amex,
            or Alipay. No processing fee is charged for using PayNow QR and
            Convera in NUSFastPay.
          </b>
        </span>
      </TextContainer>
      {itemsShown.map((item, _) => {
        return (
          <CartItemCard
            item={item}
            key={item.title}
            updateItemsShown={updateItemsShown}
          />
        );
      })}
      <GrandTotal />
      <div style={{ display: "flex", justifyContent: "right" }}>
        <OrangeButton
          className="me-3"
          onClick={() => navigate("/payment-options", { state: ivConfig })}
        >
          Process Payment
        </OrangeButton>
        <OrangeButton onClick={navBack}>Continue Shopping</OrangeButton>
      </div>
    </div>
  );
}

export default ShoppingCart;
