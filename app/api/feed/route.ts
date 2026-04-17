import { NextResponse } from "next/server";
import feed from "@/data/system.feed.json";

export async function GET() {
  return NextResponse.json({ feed, total: feed.length });
}
