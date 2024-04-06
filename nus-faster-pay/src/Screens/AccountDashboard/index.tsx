import { useLocation, useNavigate } from "react-router-dom";
import { PaymentCard } from "./Components/PaymentCard";
import { paymentItems } from "../../Utils/Data";
import { Title, TextContainer, Body } from "../../Utils/StyledComponents";
import { COLORS } from "../../Utils/Colors";
import CartBar from "../../Utils/components/CartBar";
import { useState } from "react";
import { PaymentItem } from "../../Utils/Types";
import { addToCart, removeFromCart } from "../../Utils/methods/CartMethods";
import useClickTracker from '../../Utils/methods/useClickTracker';

function AccountDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, ivConfig, startTime } = location.state;
  
  useClickTracker();
  const DESCRIPTION =
    "For new students, please make payment at least 3 days after you have completed Registration Part One, as your student ID and fees will only be available in NUSfastPay at that time.";
  const [key, setKey] = useState(0);


  const navToShoppingCart = () => {
    navigate("/shopping-cart", { state: { cart, ivConfig, startTime } });
  };

  const handleClick = (item: PaymentItem) => {
    if (ivConfig.accessibilityOfPriceInfo === "not shown") {
      navigate("/payment-item-details", {  state: { cart, item, ivConfig, startTime }  });
    } else if (cart.has(item.title)) {
      removeFromCart(cart, item.title);
      setKey(key + 1);
    } else {
      addToCart(cart, item.title);
      setKey(key + 1);
    }
  };

  return (
    <div>
      <CartBar
        key={key}
        cartSize={cart.size}
        navToShoppingCart={navToShoppingCart}
      />
      <TextContainer style={{ marginBottom: 10 }}>
        <Title>Account Dashboard</Title>
        <br />
        <br />
        <br />
        <Body style={{ textAlign: "center" }}>{DESCRIPTION}</Body>
      </TextContainer>
      <TextContainer
        style={{ backgroundColor: COLORS.darkGray, padding: "10px" }}
      >
        <Body style={{ marginBottom: 10, textAlign: "center" }}>
          Student Account Balances
        </Body>
      </TextContainer>
      {paymentItems.map((item, index) => {
        return (
          <PaymentCard
            item={item}
            size={ivConfig.paymentCardSize}
            isPriceShown={ivConfig.accessibilityOfPriceInfo === "shown"}
            itemInCart={cart.has(item.title)}
            handleAddToCart={() => handleClick(item)}
          />
        );
      })}
    </div>
  );
}

export default AccountDashboard;
