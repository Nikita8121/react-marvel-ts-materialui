import { create } from "zustand";
import { IComic } from "../shared/services/apiService/comicApiService/comic.api.service.types";

interface IItem {
  comicId: string;
  quantity: number;
  price: number;
  item: IComic;
}

interface ICart {
  totalPrice: number;
  items: IItem[];
}

interface ICartStore {
  cart: ICart;
  addItem: (item: IComic) => void;
  removeItem: (comicId: string) => void;
  decrQuantity: (comicId: string) => void;
}

const useCartStore = create<ICartStore>((set) => ({
  cart: { totalPrice: 0, items: [] },
  addItem: (newItem: IComic) => {
    set((state) => {
      const itemIndex = state.cart.items.findIndex(
        (item) => item.comicId === newItem._id,
      );
      if (itemIndex < 0) {
        state.cart.items.push();
        return { ...state };
      }
      return { ...state };
    });
  },
  removeItem: () => {},
  decrQuantity: () => {},
}));

export default useCartStore;
