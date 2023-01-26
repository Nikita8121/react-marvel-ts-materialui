import axiosClient from "../axiosInstance";
import {
  ISignUpData,
  ISignInData,
  ISignInResponse,
  IUser,
} from "./user.api.service.types";

export const signUp = async (signUpData: ISignUpData): Promise<ISignUpData> => {
  return axiosClient.post(`auth/register`, signUpData).then((res) => res.data);
};

export const signIn = async (
  signInData: ISignInData,
): Promise<ISignInResponse> => {
  return axiosClient.post(`auth/login`, signInData).then((res) => res.data);
};

export const getUser = async (): Promise<IUser> => {
  return axiosClient.get("auth/me").then((res) => res.data);
};
