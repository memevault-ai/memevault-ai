import { mergeSources } from "@/lib/scanner/merge-sources";
import { scoreToken } from "@/lib/scanner/score-token";
import { classifyToken } from "@/lib/scanner/classify-token";

export function getScannedTokens() {
  return mergeSources()
    .map((token) => {
      const score = scoreToken(token);
      return { ...token, score, classification: classifyToken(score, token.risk) };
    })
    .sort((a, b) => b.score - a.score);
}
