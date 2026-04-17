import history from "@/data/distribution.history.json";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TBody, TD, TH, THead, TR } from "@/components/ui/table";
import { formatUsd } from "@/lib/formatting";

export function DistributionHistory() {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Distribution history</h3>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <THead><TR><TH>Cycle</TH><TH>Reserve</TH><TH>Distributed</TH><TH>Yield</TH><TH>Recipients</TH></TR></THead>
          <TBody>
            {history.map((row) => (
              <TR key={row.cycle}><TD>{row.cycle}</TD><TD>{formatUsd(row.reserveUsd)}</TD><TD>{formatUsd(row.distributedUsd)}</TD><TD>{row.yieldPct}%</TD><TD>{row.recipients}</TD></TR>
            ))}
          </TBody>
        </Table>
      </CardContent>
    </Card>
  );
}
