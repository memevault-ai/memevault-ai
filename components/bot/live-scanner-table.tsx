"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TBody, TD, TH, THead, TR } from "@/components/ui/table";
import { useScanner } from "@/hooks/use-scanner";
import { TokenRow } from "./token-row";

export function LiveScannerTable({ compact = false }: { compact?: boolean }) {
  const tokens = useScanner();
  const rows = compact ? tokens.slice(0, 4) : tokens;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Live scanner table</h3>
            <p className="text-sm text-muted">Multi-timeframe scoring, classification and risk display.</p>
          </div>
          <div className="rounded-full bg-success/10 px-3 py-1 text-xs text-success">streaming mock data</div>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <THead>
            <TR>
              <TH>Token</TH><TH>Price</TH><TH>1H</TH><TH>4H</TH><TH>Score</TH><TH>Class</TH><TH>Risk</TH>
            </TR>
          </THead>
          <TBody>
            {rows.length ? rows.map((token) => <TokenRow key={token.symbol} token={token} />) : (
              <TR><TD colSpan={7} className="py-8 text-center text-muted">No tokens loaded.</TD></TR>
            )}
          </TBody>
        </Table>
      </CardContent>
    </Card>
  );
}
