import history from "@/data/distribution.history.json";
import { getDistributionSummary } from "@/lib/treasury/distribution-engine";
import { formatUsd } from "@/lib/formatting";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DistributionPanel({ compact = false }: { compact?: boolean }) {
  const summary = getDistributionSummary(history);
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Distribution panel</h3>
        <p className="text-sm text-muted">Reserve-backed, cycle-based payout simulation.</p>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border p-4"><div className="text-sm text-muted">Total distributed</div><div className="mt-2 text-2xl font-semibold">{formatUsd(summary.totalDistributed)}</div></div>
        <div className="rounded-2xl border border-border p-4"><div className="text-sm text-muted">Average yield</div><div className="mt-2 text-2xl font-semibold">{summary.avgYield}%</div></div>
        <div className="rounded-2xl border border-border p-4"><div className="text-sm text-muted">Next projection</div><div className="mt-2 text-2xl font-semibold">{formatUsd(summary.nextProjectedUsd)}</div></div>
        {!compact && <div className="md:col-span-3 text-sm text-muted">Distributions are modeled as reserve releases sourced from realized treasury gains, weighted wallet eligibility and cycle timing rules.</div>}
      </CardContent>
    </Card>
  );
}
