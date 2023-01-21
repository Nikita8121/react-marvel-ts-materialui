import axiosClient from "../axiosInstance";
import {
  ISignUpData,
  ISignInData,
  ISignInResponse,
} from "./user.api.service.types";

export const signUp = async (signUpData: ISignUpData): Promise<ISignUpData> => {
  const data = await axiosClient.post(`auth/register`, signUpData);
  return data.data;
};

export const signIn = async (
  signInData: ISignInData,
): Promise<ISignInResponse> => {
  const data = await axiosClient.post(`auth/login`, signInData);
  return data.data;
};
