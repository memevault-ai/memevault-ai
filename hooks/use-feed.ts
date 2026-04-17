import { useAppStore } from "@/store/app-store";
export const useFeed = () => useAppStore((state) => state.feed);
