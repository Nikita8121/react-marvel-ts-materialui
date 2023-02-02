import axiosClient from "../axiosInstance";
import { IMakeOrder } from "./order.api.service.types";

// eslint-disable-next-line import/prefer-default-export
export const makeOrder = (data: IMakeOrder) => {
  return axiosClient.post("order/create", data);
};
