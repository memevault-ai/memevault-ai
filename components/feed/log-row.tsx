import { EventBadge } from "./event-badge";

export function LogRow({ event }: { event: any }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-border p-4">
      <div className="space-y-2">
        <EventBadge type={event.type} />
        <p className="text-sm">{event.message}</p>
      </div>
      <div className="text-xs text-muted">{new Date(event.timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</div>
    </div>
  );
}
