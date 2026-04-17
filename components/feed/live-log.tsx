import feed from "@/data/system.feed.json";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LogRow } from "./log-row";

export function LiveLog({ compact = false, limit }: { compact?: boolean; limit?: number }) {
  const items = typeof limit === "number" ? feed.slice(0, limit) : compact ? feed.slice(0, 4) : feed;
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Live log</h3>
        <p className="text-sm text-muted">Scanner detections, treasury actions and distribution events.</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((event, index) => <LogRow key={`${event.timestamp}-${index}`} event={event} />)}
      </CardContent>
    </Card>
  );
}
