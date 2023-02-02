import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { IComic } from "../shared/services/apiService/comicApiService/comic.api.service.types";
import { setCartToStorage } from "../shared/utils/cartUtils";
import { ICart } from "../shared/services/apiService/cartApiService/cart.api.service.types";

interface ICartStore {
  cart: ICart;
  isCartOpen: boolean;
  toggleCart: () => void;
  addItem: (item: IComic) => void;
  removeItem: (comicId: string) => void;
  initCart: (cart: ICart) => void;
  clearCart: () => void;
}

const useCartStore = create<ICartStore>((set) => ({
  cart: { totalPrice: 0, items: [] },
  isCartOpen: false,
  toggleCart: () => {
    set((state) => {
      return { isCartOpen: !state.isCartOpen };
    });
  },
  addItem: (newItem: IComic) => {
    set((state) => {
      const updatedCart = { ...state.cart };
      const itemIndex = state.cart.items.findIndex(
        (item) => item.comicId === newItem._id,
      );
      if (itemIndex < 0) {
        const item = {
          comicId: newItem._id,
          quantity: 1,
          price: newItem.price,
          item: newItem,
        };
        updatedCart.items.push(item);
      } else {
        const item = updatedCart.items[itemIndex];
        item.quantity += 1;
      }
      updatedCart.totalPrice += newItem.price;
      setCartToStorage(updatedCart);
      return { cart: updatedCart };
    });
  },
  initCart: (cart: ICart) => {
    set(() => {
      return { cart };
    });
  },
  removeItem: (comicId: string) => {
    set((state) => {
      const updatedCart = { ...state.cart };
      const itemIndex = state.cart.items.findIndex(
        (item) => item.comicId === comicId,
      );
      const item = updatedCart.items[itemIndex];
      if (item.quantity === 1) {
        updatedCart.items.splice(itemIndex, 1);
      } else {
        item.quantity -= 1;
      }
      updatedCart.totalPrice -= item.price;
      return { cart: updatedCart };
    });
  },
  clearCart: () => {
    set(() => {
      return { cart: { totalPrice: 0, items: [] } };
    });
  },
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useCartStore);
}

export default useCartStore;
