export async function fetchTreasury() {
  const res = await fetch("/api/treasury");
  return res.json();
}
