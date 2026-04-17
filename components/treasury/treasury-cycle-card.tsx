import { Card, CardContent } from "@/components/ui/card";

export function TreasuryCycleCard({ title, value, detail }: { title: string; value: string; detail: string }) {
  return (
    <Card>
      <CardContent>
        <div className="text-sm text-muted">{title}</div>
        <div className="mt-2 text-2xl font-semibold">{value}</div>
        <div className="mt-1 text-xs text-muted">{detail}</div>
      </CardContent>
    </Card>
  );
}
