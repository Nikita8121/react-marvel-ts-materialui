import { ICart } from "../services/apiService/cartApiService/cart.api.service.types";

const setCartToStorage = (cart: ICart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCartFromStorage = (): ICart | null => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart") || "") as ICart;
    if (cart.items && cart.totalPrice) {
      return cart;
    }
    return null;
  } catch (e) {
    return null;
  }
};

export { setCartToStorage, getCartFromStorage };
