import { NextResponse } from "next/server";
import scannerData from "@/data/tokens.flap.json";
import { scoreToken } from "@/lib/scanner/score-token";
import { classifyToken } from "@/lib/scanner/classify-token";

export async function GET() {
  const tokens = scannerData.map((token) => {
    const score = scoreToken(token);
    return { ...token, score, classification: classifyToken(score, token.risk) };
  });
  return NextResponse.json({ tokens, updatedAt: new Date().toISOString() });
}
