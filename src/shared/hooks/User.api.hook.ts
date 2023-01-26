import { useMutation, useQuery } from "react-query";
import {
  signUp,
  signIn,
  getUser,
} from "../services/apiService/userApiService/user.api.service";
import { ISignUpData } from "../services/apiService/userApiService/user.api.service.types";

const useSignUpQuery = () =>
  useMutation({
    mutationFn: async ({ data }: { data: ISignUpData }) => signUp(data),
  });

const useLoginQuery = () =>
  useMutation({
    mutationFn: async ({ data }: { data: ISignUpData }) => signIn(data),
  });

const useGetUserQuery = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => getUser(),
    retry: 0,
  });

export { useSignUpQuery, useLoginQuery, useGetUserQuery };
