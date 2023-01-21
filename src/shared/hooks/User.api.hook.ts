import { useMutation } from "react-query";
import {
  signUp,
  signIn,
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

export { useSignUpQuery, useLoginQuery };
