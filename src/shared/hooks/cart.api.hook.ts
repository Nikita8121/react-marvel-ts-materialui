import { useMutation, useQuery } from "react-query";
import {
  getCart,
  addItemToCart,
} from "../services/apiService/cartApiService/cart.api.service";
import { IComic } from "../services/apiService/comicApiService/comic.api.service.types";
import useUserStore from "../../store/userStore";

export const useAddItem = (item: IComic) =>
  useMutation({
    mutationFn: async () => addItemToCart(item),
  });

export const useGetCart = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const { data, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      if (isLoggedIn) {
        return getCart();
      }
      return null;
    },
  });

  return { cart: data, refetchCart: refetch };
};
