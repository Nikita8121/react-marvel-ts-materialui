import { useQuery } from "react-query";
import { getCart } from "../../services/apiService/cartApiService/cart.api.service";
import { getAuthToken } from "../../utils/authTokenUtils";

const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      if (getAuthToken()) {
        return getCart();
      }
      return null;
    },
  });
};

export default useGetCart;
