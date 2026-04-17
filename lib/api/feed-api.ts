export async function fetchFeed() {
  const res = await fetch("/api/feed");
  return res.json();
}
