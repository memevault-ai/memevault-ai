export async function fetchDistributions() {
  const res = await fetch("/api/distributions");
  return res.json();
}
