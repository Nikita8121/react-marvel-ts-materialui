import { useMutation } from "react-query";
import { addItemToCart } from "../../services/apiService/cartApiService/cart.api.service";
import useUserStore from "../../../store/userStore";
import { IComic } from "../../services/apiService/comicApiService/comic.api.service.types";
import useCartStore from "../../../store/cartStore";

const useAddItem = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const addItem = useCartStore((state) => state.addItem);
  const { mutate } = useMutation({
    mutationFn: async (item: IComic) => addItemToCart(item),
    onSuccess: (data, item) => addItem(item),
  });

  const addNewItem = (item: IComic): void => {
    if (isLoggedIn) {
      mutate(item);
    } else {
      addItem(item);
    }
  };

  return { addItem: addNewItem };
};

export default useAddItem;
