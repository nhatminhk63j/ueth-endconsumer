import { defaultProducts } from "./useProducts";

export const useCart = () => {
  return [{ cartItems: defaultCardItems }, {}] as const;
};

const defaultCardItems: CartItem[] = [
  {
    product: defaultProducts[0],
    quantity: 3,
  },
  {
    product: defaultProducts[1],
    quantity: 4,
  },
  {
    product: defaultProducts[2],
    quantity: 1,
  },
  {
    product: defaultProducts[3],
    quantity: 3,
  },
];
