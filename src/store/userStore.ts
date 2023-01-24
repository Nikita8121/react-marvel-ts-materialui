import { create } from "zustand";

interface IUser {
  isLoggedIn: boolean;
}

const useUserStore = create<IUser>((set) => ({
  isLoggedIn: false,
  setIsloggedIn: (value: boolean) =>
    set((state) => ({ ...state, isLoggedIn: value })),
}));

export default useUserStore;
