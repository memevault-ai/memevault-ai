import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function NextCycleCountdown() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Next cycle countdown</h3>
        <p className="text-sm text-muted">Simulated reserve distribution window.</p>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-semibold">05:42:18</div>
        <div className="mt-2 text-sm text-muted">Projected cycle trigger every 12 hours.</div>
      </CardContent>
    </Card>
  );
}
