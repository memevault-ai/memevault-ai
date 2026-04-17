import tokens from "@/data/tokens.flap.json";
import fourmeme from "@/data/tokens.fourmeme.json";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Sources", value: 2 },
  { label: "Tracked tokens", value: tokens.length + fourmeme.length },
  { label: "Prime candidates", value: 3 },
  { label: "Treasury-ready", value: 4 },
];

export function ScannerStatusBar({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`grid gap-4 ${compact ? "md:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-4"}`}>
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent>
            <div className="text-sm text-muted">{stat.label}</div>
            <div className="mt-2 text-2xl font-semibold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
