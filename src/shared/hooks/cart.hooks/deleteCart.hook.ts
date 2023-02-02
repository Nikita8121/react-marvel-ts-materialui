import { useMutation } from "react-query";
import { deleteCart } from "../../services/apiService/cartApiService/cart.api.service";
import useUserStore from "../../../store/userStore";
import useCartStore from "../../../store/cartStore";

const useDeleteCart = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const clearCart = useCartStore((state) => state.clearCart);
  const { mutate } = useMutation({
    mutationFn: async () => deleteCart(),
    onSuccess: () => clearCart(),
  });

  const deleteExistingCart = (): void => {
    if (isLoggedIn) {
      mutate();
    } else {
      clearCart();
    }
  };

  return { deleteCart: deleteExistingCart };
};

export default useDeleteCart;
