import { create } from "zustand";

interface IUserStore {
  isLoggedIn: boolean;
  setIsloggedIn: (value: boolean) => void;
}

const useUserStore = create<IUserStore>((set) => ({
  isLoggedIn: false,
  setIsloggedIn: (value: boolean) =>
    set((state) => ({ ...state, isLoggedIn: value })),
}));

export default useUserStore;
