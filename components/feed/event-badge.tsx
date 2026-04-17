import { Badge } from "@/components/ui/badge";

export function EventBadge({ type }: { type: "scanner" | "treasury" | "distribution" }) {
  const variant = type === "scanner" ? "accent" : type === "treasury" ? "success" : "warning";
  return <Badge variant={variant}>{type}</Badge>;
}
