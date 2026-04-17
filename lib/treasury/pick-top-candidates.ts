import { getScannedTokens } from "@/lib/scanner/scanner-engine";

export function pickTopCandidates(limit = 4) {
  return getScannedTokens().slice(0, limit);
}
