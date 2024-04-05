import { useLocation, useNavigate } from "react-router-dom";
import { PaymentCard } from "./Components/PaymentCard";
import { paymentItems } from "../../Utils/Data";
import { Title, TextContainer, Body } from "../../Utils/StyledComponents";
import { COLORS } from "../../Utils/Colors";
import CartBar from "../../Utils/components/CartBar";
import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { PaymentItem } from "../../Utils/Types";

function AccountDashbaord() {
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;
  const DESCRIPTION =
    "For new students, please make payment at least 3 days after you have completed Registration Part One, as your student ID and fees will only be available in NUSfastPay at that time.";
  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const [key, setKey] = useState(0);
  const navToShoppingCart = () => {
    navigate("/shopping-cart", { state: { ivConfig } });
  };

  const handleClick = (item: PaymentItem) => {
    if (ivConfig.accessibilityOfPriceInfo === "not shown") {
      navigate("/payment-item-details", { state: { item, ivConfig } });
    } else if (cart.has(item.title)) {
      removeFromCart(item.title);
      setKey(key + 1);
    } else {
      addToCart(item.title);
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
            handleAddToCart={() => handleClick(item)}
          />
        );
      })}
    </div>
  );
}

export default AccountDashbaord;
