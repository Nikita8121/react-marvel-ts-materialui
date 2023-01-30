import { useMutation, useQuery } from "react-query";
import {
  signUp,
  signIn,
  getUser,
} from "../services/apiService/userApiService/user.api.service";
import useUserStore from "../../store/userStore";
import { ISignUpData } from "../services/apiService/userApiService/user.api.service.types";
import { clearAuthToken, getAuthToken } from "../utils/authTokenUtils";

const useSignUpQuery = () =>
  useMutation({
    mutationFn: async ({ data }: { data: ISignUpData }) => signUp(data),
  });

const useLoginQuery = () =>
  useMutation({
    mutationFn: async ({ data }: { data: ISignUpData }) => signIn(data),
  });

const useGetUserQuery = () => {
  const setIsLoggedIn = useUserStore((state) => state.setIsloggedIn);
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (getAuthToken()) {
        return getUser();
      }
      return null;
    },
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: () => {
      clearAuthToken();
    },
  });
};

export { useSignUpQuery, useLoginQuery, useGetUserQuery };
