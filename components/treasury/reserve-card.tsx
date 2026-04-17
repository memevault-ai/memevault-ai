import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ReserveCard() {
  return (
    <Card>
      <CardContent className="flex items-center gap-3">
        <div className="rounded-2xl bg-success/10 p-3 text-success"><Shield className="h-5 w-5" /></div>
        <div>
          <div className="text-sm text-muted">Reserve policy</div>
          <div className="font-semibold">24% of realized gains locked to reserve</div>
        </div>
      </CardContent>
    </Card>
  );
}
