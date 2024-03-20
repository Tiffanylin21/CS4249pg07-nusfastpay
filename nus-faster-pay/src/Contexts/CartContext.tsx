import { createContext } from "react";
import { paymentItems } from "../Utils/Data";

interface Props {
  children: React.ReactNode;
}

interface CartContextType {
  cart: Set<String>;
  addToCart: (itemTitle: string) => void;
  removeFromCart: (itemTitle: string) => void;
  calculateTotal: () => number;
}

export const CartContext = createContext<CartContextType>({
  cart: new Set<String>(),
  addToCart: (itemTitle: string) => {},
  removeFromCart: (itemTitle: string) => {},
  calculateTotal: () => 0,
});

export const CartProvider = (props: Props) => {
  const cart = new Set<String>();
  const addToCart = (itemTitle: string) => {
    cart.add(itemTitle);
  };
  const removeFromCart = (itemTitle: string) => {
    cart.delete(itemTitle);
  };
  const calculateTotal = () => {
    let total = 0;
    paymentItems.forEach((item) => {
      if (cart.has(item.title)) total += item.price;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        calculateTotal: calculateTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
