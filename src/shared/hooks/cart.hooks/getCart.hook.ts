import { useQuery } from "react-query";
import { getCart } from "../../services/apiService/cartApiService/cart.api.service";
import useUserStore from "../../../store/userStore";
import useCartStore from "../../../store/cartStore";

import { getCartFromStorage } from "../../utils/cartUtils";

const useGetCart = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const cart = useCartStore((state) => state.cart);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const initCart = useCartStore((state) => state.initCart);
  const { refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      if (isLoggedIn) {
        return getCart();
      }
      return getCartFromStorage();
    },
    enabled: false,
    retry: 0,
    onSuccess: (fetchedCart) => {
      if (fetchedCart) {
        initCart(fetchedCart);
      }
    },
  });

  return { cart, fetchCart: refetch, isCartOpen, toggleCart };
};

export default useGetCart;
