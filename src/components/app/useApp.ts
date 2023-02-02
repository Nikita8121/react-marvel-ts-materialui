import { useEffect } from "react";
import useGetCart from "../../shared/hooks/cart.hooks/getCart.hook";
import useGetUser from "../../shared/hooks/user.hooks/getUser.hook";

const useApp = () => {
  const { isUserLoading } = useGetUser();
  const { fetchCart } = useGetCart();

  useEffect(() => {
    if (!isUserLoading) {
      fetchCart();
    }
  }, [isUserLoading]);

  return { isLoading: isUserLoading };
};

export default useApp;
