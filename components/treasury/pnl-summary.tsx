import positions from "@/data/treasury.positions.json";
import closed from "@/data/treasury.closed.json";
import { getPnlSummary } from "@/lib/treasury/pnl-engine";
import { formatUsd } from "@/lib/formatting";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function PnlSummary() {
  const summary = getPnlSummary(positions, closed);
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">PnL summary</h3>
        <p className="text-sm text-muted">Realized and unrealized treasury performance.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border p-4"><div className="text-sm text-muted">Realized</div><div className="mt-1 text-xl font-semibold">{formatUsd(summary.realizedUsd)}</div></div>
          <div className="rounded-2xl border border-border p-4"><div className="text-sm text-muted">Unrealized</div><div className="mt-1 text-xl font-semibold">{formatUsd(summary.unrealizedUsd)}</div></div>
        </div>
        <div className="rounded-2xl border border-border p-4">
          <div className="text-sm text-muted">Best closed trade</div>
          <div className="mt-2 text-lg font-semibold">{summary.bestTrade.symbol}</div>
          <div className="text-sm text-success">{summary.bestTrade.pnlPct}% · {formatUsd(summary.bestTrade.realizedUsd)}</div>
        </div>
      </CardContent>
    </Card>
  );
}
