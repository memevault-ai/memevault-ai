export async function fetchScanner() {
  const res = await fetch("/api/scanner");
  return res.json();
}
