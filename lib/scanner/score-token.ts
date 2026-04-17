import type { Token } from "@/lib/types";

export function scoreToken(token: Token) {
  const momentum = token.change5m * 0.15 + token.change1h * 0.25 + token.change4h * 0.35;
  const activity = ((token.buys24h - token.sells24h) / Math.max(token.buys24h + token.sells24h, 1)) * 100;
  const liquidity = Math.min(token.volume24h / 10000, 20);
  const stability = token.holderStability * 0.35;
  const penalty = token.risk * 0.4;
  return Math.max(0, Math.round(momentum + activity + liquidity + stability - penalty));
}
