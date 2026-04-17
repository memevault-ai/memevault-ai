import positions from "@/data/treasury.positions.json";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatPct } from "@/lib/formatting";

export function TreasuryPicks() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Treasury picks</h3>
        <p className="text-sm text-muted">Live candidates and current allocation status.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {positions.map((position) => {
          const pnl = ((position.current - position.entry) / position.entry) * 100;
          return (
            <div key={position.symbol} className="rounded-2xl border border-border p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold">{position.symbol}</div>
                  <div className="text-sm text-muted">Allocation {position.allocation}% · confidence {position.confidence}</div>
                </div>
                <Badge variant={position.status === "active" ? "success" : "warning"}>{position.status}</Badge>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-muted">P/L since entry</span>
                <span className={pnl >= 0 ? "text-success" : "text-danger"}>{formatPct(pnl)}</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
