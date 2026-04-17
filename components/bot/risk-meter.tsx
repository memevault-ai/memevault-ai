import { Progress } from "@/components/ui/progress";

export function RiskMeter({ risk }: { risk: number }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-muted">
        <span>Risk</span>
        <span>{risk}/100</span>
      </div>
      <Progress value={risk} />
    </div>
  );
}
