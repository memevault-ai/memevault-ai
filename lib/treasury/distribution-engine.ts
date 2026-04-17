import type { DistributionCycle } from "@/lib/types";

export function getDistributionSummary(history: DistributionCycle[]) {
  const totalDistributed = history.reduce((acc, item) => acc + item.distributedUsd, 0);
  const avgYield = history.reduce((acc, item) => acc + item.yieldPct, 0) / history.length;
  return {
    totalDistributed,
    avgYield: Number(avgYield.toFixed(2)),
    nextProjectedUsd: Math.round(history[history.length - 1].distributedUsd * 1.06),
  };
}
