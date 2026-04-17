import { create } from "zustand";
import type { FeedEvent } from "@/lib/types";

type AppStore = {
  feed: FeedEvent[];
};

export const useAppStore = create<AppStore>(() => ({ feed: [] }));
