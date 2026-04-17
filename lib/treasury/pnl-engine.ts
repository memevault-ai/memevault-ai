import type { ClosedTrade, TreasuryPosition } from "@/lib/types";

export function getPnlSummary(positions: TreasuryPosition[], closed: ClosedTrade[]) {
  const unrealizedUsd = positions.reduce((acc, item) => acc + ((item.current - item.entry) / item.entry) * item.allocation * 1000, 0);
  const realizedUsd = closed.reduce((acc, item) => acc + item.realizedUsd, 0);
  const bestTrade = closed.reduce((best, current) => current.pnlPct > best.pnlPct ? current : best, closed[0]);
  return {
    realizedUsd: Math.round(realizedUsd),
    unrealizedUsd: Math.round(unrealizedUsd),
    totalUsd: Math.round(realizedUsd + unrealizedUsd),
    bestTrade,
  };
}
