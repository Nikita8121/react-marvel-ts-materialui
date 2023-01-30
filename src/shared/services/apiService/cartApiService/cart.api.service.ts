import axiosClient from "../axiosInstance";
import { ICart } from "./cart.api.service.types";
import { IComic } from "../comicApiService/comic.api.service.types";

export const getCart = async (): Promise<ICart> => {
  return axiosClient.get("cart").then((res) => res.data);
};

export const addItemToCart = async (item: IComic): Promise<ICart> => {
  return axiosClient.post("cart/add", item);
};
