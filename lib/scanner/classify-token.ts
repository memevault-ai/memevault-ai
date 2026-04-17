export function classifyToken(score: number, risk: number) {
  if (score >= 55 && risk <= 35) return "prime";
  if (score >= 40) return "watch";
  return "speculative";
}
