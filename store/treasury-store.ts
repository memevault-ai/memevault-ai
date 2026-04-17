import { create } from "zustand";
import type { ClosedTrade, DistributionCycle, TreasuryPosition } from "@/lib/types";

type TreasuryStore = {
  positions: TreasuryPosition[];
  closed: ClosedTrade[];
  history: DistributionCycle[];
};

export const useTreasuryStore = create<TreasuryStore>(() => ({ positions: [], closed: [], history: [] }));
