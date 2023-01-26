import { useEffect } from "react";
import { useGetUserQuery } from "../../shared/hooks/user.api.hook";
import useUserStore from "../../store/userStore";
import {
  getAuthToken,
  clearAuthToken,
} from "../../shared/utils/authTokenUtils";

const useApp = () => {
  const { isLoading, isSuccess } = useGetUserQuery();
  const setIsloggedIn = useUserStore((state) => state.setIsloggedIn);

  useEffect(() => {
    if (isSuccess) {
      setIsloggedIn(true);
    } else if (!isLoading && !isSuccess) {
      clearAuthToken();
    }
  }, [isSuccess]);

  return { isLoading: getAuthToken() && isLoading };
};

export default useApp;
