"use client";

import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const data = [
  { day: "Apr 11", pnl: 7 },
  { day: "Apr 12", pnl: 11 },
  { day: "Apr 13", pnl: 18 },
  { day: "Apr 14", pnl: 24 },
  { day: "Apr 15", pnl: 28 },
  { day: "Apr 16", pnl: 33 },
];

export function RotationPerformanceChart() {
  return (
    <Card>
      <CardHeader><h3 className="text-lg font-semibold">Rotation performance</h3></CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="day" stroke="#8d97ab" />
            <YAxis stroke="#8d97ab" />
            <Tooltip />
            <Area type="monotone" dataKey="pnl" stroke="#23c16b" fill="rgba(35,193,107,0.35)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
