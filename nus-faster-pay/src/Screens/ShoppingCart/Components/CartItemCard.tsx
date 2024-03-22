import { useContext } from "react";
import { PaymentItem } from "../../../Utils/Types";
import { CartContext } from "../../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

interface CartItemCardProps {
  item: PaymentItem;
}

export default function CartItemCard({ item }: CartItemCardProps) {
  const navigate = useNavigate();
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <p>{item.title}</p>
      <Button
        onClick={() => {
          removeFromCart(item.title);
          navigate(0);
        }}
      >
        Remove
      </Button>
    </div>
  );
}
