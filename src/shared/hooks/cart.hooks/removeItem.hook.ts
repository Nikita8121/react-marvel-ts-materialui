import { useMutation } from "react-query";
import { removeItemFromCart } from "../../services/apiService/cartApiService/cart.api.service";
import useUserStore from "../../../store/userStore";
import useCartStore from "../../../store/cartStore";

const useRemoveItem = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const removeItemFromStore = useCartStore((state) => state.removeItem);
  const { mutate } = useMutation({
    mutationFn: async (itemId: string) => removeItemFromCart(itemId),
    onSuccess: (data, itemId) => removeItemFromStore(itemId),
  });

  const removeItem = (itemId: string): void => {
    if (isLoggedIn) {
      mutate(itemId);
    } else {
      removeItemFromStore(itemId);
    }
  };

  return { removeItem };
};

export default useRemoveItem;
