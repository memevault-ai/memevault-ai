import { create } from "zustand";

type WalletStore = {
  connected: boolean;
  address: string | null;
};

export const useWalletStore = create<WalletStore>(() => ({ connected: false, address: null }));
