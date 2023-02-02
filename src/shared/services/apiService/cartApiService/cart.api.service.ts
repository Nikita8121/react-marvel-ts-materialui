import axiosClient from "../axiosInstance";
import { ICart } from "./cart.api.service.types";
import { IComic } from "../comicApiService/comic.api.service.types";

export const getCart = async (): Promise<ICart> => {
  return axiosClient.get("cart").then((res) => res.data);
};

export const addItemToCart = async (item: IComic): Promise<ICart> => {
  return axiosClient.post("cart", { comicId: item._id, price: item.price });
};

export const removeItemFromCart = async (itemId: string): Promise<ICart> => {
  return axiosClient.delete("cart/removeItem", { data: { comicId: itemId } });
};

export const deleteCart = async (): Promise<void> => {
  return axiosClient.delete("cart");
};
