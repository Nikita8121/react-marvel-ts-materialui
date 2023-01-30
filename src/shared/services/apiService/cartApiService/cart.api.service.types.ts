import { IComic } from "../comicApiService/comic.api.service.types";

interface ICartItem {
  comicId: string;
  quantity: number;
  price: number;
  item: IComic;
}

export interface ICart {
  _id: string;
  userId: string;
  items: ICartItem[];
}
