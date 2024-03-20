import { useContext } from "react";
import { PaymentItem } from "../../../Utils/Types";
import { CartContext } from "../../../Contexts/CartContext";

interface CartItemCardProps {
  item: PaymentItem;
  navBack: () => void;
}

export default function CartItemCard({ item, navBack }: CartItemCardProps) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <p>{item.title}</p>
      <button
        onClick={() => {
          removeFromCart(item.title);
          navBack(); // What's the behaviour after removing?
        }}
      >
        Remove
      </button>
    </div>
  );
}
