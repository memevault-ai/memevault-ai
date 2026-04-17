import feed from "@/data/system.feed.json";

export function getFeedEvents(limit?: number) {
  return typeof limit === "number" ? feed.slice(0, limit) : feed;
}
