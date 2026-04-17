import { NextResponse } from "next/server";
import positions from "@/data/treasury.positions.json";
import closed from "@/data/treasury.closed.json";
import { getPnlSummary } from "@/lib/treasury/pnl-engine";

export async function GET() {
  return NextResponse.json({
    positions,
    closed,
    summary: getPnlSummary(positions, closed),
  });
}
