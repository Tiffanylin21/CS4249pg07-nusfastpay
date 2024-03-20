import { useContext } from "react";
import { PaymentItem } from "../../../Utils/Types";
import { CartContext } from "../../../Contexts/CartContext";
import { useLocation, useNavigate } from "react-router-dom";

interface CartItemCardProps {
  item: PaymentItem;
}

export default function CartItemCard({ item }: CartItemCardProps) {
  const { removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const ivConfig = location.state;

  return (
    <div>
      <p>{item.title}</p>
      <button
        onClick={() => {
          removeFromCart(item.title);
          console.log(ivConfig);
          navigate("/account-dashboard", { state: { ivConfig } }); // What's the behaviour after removing?
        }}
      >
        Remove
      </button>
    </div>
  );
}
