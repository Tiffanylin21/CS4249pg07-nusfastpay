import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { paymentItems } from "../../Utils/Data";
import CartItemCard from "./Components/CartItemCard";
import { TextContainer, Title } from "../../Utils/SharedComponents";
import GrandTotal from "./Components/GrandTotal";

function ShoppingCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, addToCart } = useContext(CartContext);
  const { item, ivConfig } = location.state;

  addToCart(item.title);
  const itemsInCart = paymentItems.filter((item) => cart.has(item.title));
  const navBack = () => navigate("/account-dashboard", { state: ivConfig });

  return (
    <div>
      <Title>Fees and Charges Cart</Title>
      <TextContainer>
        This is a list of your payment selections. To proceed, please select
        Process Payment. To add more items to your Fees Cart, please use the
        menu option to navigate to Student Fees & Charges. With effect from 1
        Jan 2024, a card/eWallet processing fee of 1% will be applied to all
        payments made using Visa, MasterCard, Amex, or Alipay. No processing fee
        is charged for using PayNow QR and Convera in NUSFastPay.
      </TextContainer>
      {itemsInCart.map((item, index) => {
        return <CartItemCard item={item} navBack={navBack} />;
      })}
      <div>
        <GrandTotal />
      </div>
      <button onClick={() => navigate("/payment-options", { state: ivConfig })}>
        Process Payment
      </button>
      <button
        onClick={navBack}
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default ShoppingCart;
