import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface CartContextType {
  cart: Set<String>;
  addToCart: (itemTitle: string) => void;
  removeFromCart: (itemTitle: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cart: new Set<String>(),
  addToCart: (itemTitle: string) => {},
  removeFromCart: (itemTitle: string) => {},
});

export const CartProvider = (props: Props) => {
  const cart = new Set<String>();
  const addMethod = (itemTitle: string) => {
    cart.add(itemTitle);
  };
  const removeMethod = (itemTitle: string) => {
    cart.delete(itemTitle);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart: addMethod,
        removeFromCart: removeMethod,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
