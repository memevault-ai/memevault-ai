import { useScannerStore } from "@/store/scanner-store";
export const useScanner = () => useScannerStore((state) => state.tokens);
