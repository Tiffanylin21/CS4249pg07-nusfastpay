import { paymentItems } from "../Data";

export const createNewCart = () => new Set<String>();
export const addToCart = (cart: Set<String>, itemTitle: string) => {
  cart.add(itemTitle);
};
export const removeFromCart = (cart: Set<String>, itemTitle: string) => {
  cart.delete(itemTitle);
};
export const calculateTotal = (cart: Set<String>) => {
  let total = 0;
  paymentItems.forEach((item) => {
    if (cart.has(item.title)) total += item.price;
  });
  return total;
};
