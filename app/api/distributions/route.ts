import { NextResponse } from "next/server";
import history from "@/data/distribution.history.json";
import { getDistributionSummary } from "@/lib/treasury/distribution-engine";

export async function GET() {
  return NextResponse.json({
    history,
    summary: getDistributionSummary(history),
  });
}
