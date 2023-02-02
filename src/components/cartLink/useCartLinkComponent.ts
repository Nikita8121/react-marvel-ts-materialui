import { useMemo } from "react";
import useGetCart from "../../shared/hooks/cart.hooks/getCart.hook";

const useCartLinkComponent = () => {
  const { cart, toggleCart } = useGetCart();

  const itemsAmount: number = useMemo(() => {
    return cart.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      0,
    );
  }, [cart]);

  return { itemsAmount, toggleCart };
};

export default useCartLinkComponent;
