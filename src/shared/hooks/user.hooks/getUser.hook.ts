import { useQuery } from "react-query";
import useUserStore from "../../../store/userStore";
import { getUser } from "../../services/apiService/userApiService/user.api.service";
import { getAuthToken, clearAuthToken } from "../../utils/authTokenUtils";

const useGetUser = () => {
  const setIsLoggedIn = useUserStore((state) => state.setIsloggedIn);
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (getAuthToken()) {
        return getUser();
      }
      return null;
    },
    onSuccess: (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    },
    onError: () => {
      clearAuthToken();
    },
  });

  return { user: data, isUserLoading: isLoading };
};

export default useGetUser;
