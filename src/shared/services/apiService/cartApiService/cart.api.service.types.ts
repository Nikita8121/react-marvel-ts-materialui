import { IComic } from "../comicApiService/comic.api.service.types";

export interface IRemoveCartItem {
  comicId: string;
}

export interface ICartItem {
  comicId: string;
  quantity: number;
  price: number;
  item: IComic;
}

export interface ICart {
  userId?: string;
  items: ICartItem[];
  totalPrice: number;
}
