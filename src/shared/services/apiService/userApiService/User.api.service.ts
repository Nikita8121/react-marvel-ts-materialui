import axiosClient from "../axiosInstance";
import {
  IRegisterData,
  ILoginData,
  ILoginResponse,
} from "./User.api.service.types";

export const register = async (
  registerData: IRegisterData,
): Promise<IRegisterData> => {
  const data = await axiosClient.post(`auth/register`, registerData);
  return data.data;
};

export const login = async (loginData: ILoginData): Promise<ILoginResponse> => {
  const data = await axiosClient.post(`auth/login`, loginData);
  return data.data;
};
