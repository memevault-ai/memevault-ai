"use client";

import positions from "@/data/treasury.positions.json";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const colors = ["#00d4ff", "#23c16b", "#f59e0b", "#8b5cf6", "#ef4444"];

export function TreasuryAllocationChart() {
  return (
    <Card>
      <CardHeader><h3 className="text-lg font-semibold">Treasury allocation</h3></CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={positions} dataKey="allocation" nameKey="symbol" innerRadius={70} outerRadius={110}>
              {positions.map((_, index) => <Cell key={index} fill={colors[index % colors.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
