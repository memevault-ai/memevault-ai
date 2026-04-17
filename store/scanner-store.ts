import { create } from "zustand";

type ScannerToken = {
  symbol: string;
  name: string;
  chain: string;
  score: number;
  classification: string;
  price: number;
  change1h: number;
  change4h: number;
  holderStability: number;
  risk: number;
};

type ScannerStore = {
  tokens: ScannerToken[];
};

export const useScannerStore = create<ScannerStore>(() => ({ tokens: [] }));
