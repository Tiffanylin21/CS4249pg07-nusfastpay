import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { paymentItems } from "../../Utils/Data";
import CartItemCard from "./Components/CartItemCard";
import { TextContainer, Title } from "../../Utils/StyledComponents";
import GrandTotal from "./Components/GrandTotal";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { OrangeButton } from "../../Utils/components/OrangeButton";
import CartBar from "../../Utils/components/CartBar";
import { calculateTotal } from "../../Utils/methods/CartMethods";

function ShoppingCart() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, ivConfig } = location.state;

  const getPaymentItemsInCart = () => {
    // returns a list of payment items that are in cart
    return paymentItems.filter((item) => cart.has(item.title));
  };

  const isNumPaymentsFulfilled = cart.size === ivConfig.numOfPayment;

  const isPaymentAmountValid = calculateTotal(cart) > 0;

  const [itemsShown, setItemsShown] = useState(getPaymentItemsInCart);
  const navBack = () =>
    navigate("/account-dashboard", { state: { cart, ivConfig } });

  const updateItemsShown = () => {
    // updates itemsShown state
    setItemsShown(getPaymentItemsInCart());
  };

  const handleProcessPayment = () => {
    if (!isNumPaymentsFulfilled) {
      alert(
        `Please select ${ivConfig.numOfPayment} payment item${
          ivConfig.numOfPayment === 1 ? "" : "s"
        }`
      );
      return;
    }
    navigate("/payment-options", { state: { cart, ivConfig } });
  };

  return (
    <div>
      <CartBar cartSize={cart.size} />
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
            cart={cart}
            item={item}
            key={item.title}
            updateItemsShown={updateItemsShown}
          />
        );
      })}
      <GrandTotal cartTotal={calculateTotal(cart)} />
      <div style={{ display: "flex", justifyContent: "right" }}>
        {isPaymentAmountValid && (
          <OrangeButton className="me-3" onClick={handleProcessPayment}>
            Process Payment
          </OrangeButton>
        )}
        <OrangeButton onClick={navBack}>Continue Shopping</OrangeButton>
      </div>
    </div>
  );
}

export default ShoppingCart;
