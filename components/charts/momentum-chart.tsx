"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const data = [
  { t: "09:00", score: 42 },
  { t: "11:00", score: 48 },
  { t: "13:00", score: 52 },
  { t: "15:00", score: 58 },
  { t: "17:00", score: 63 },
  { t: "19:00", score: 69 },
];

export function MomentumChart() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Momentum chart</h3>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="t" stroke="#8d97ab" />
            <YAxis stroke="#8d97ab" />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#00d4ff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
