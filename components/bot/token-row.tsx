import { Badge } from "@/components/ui/badge";
import { TD, TR } from "@/components/ui/table";
import { formatPct, formatUsd } from "@/lib/formatting";
import { RiskMeter } from "./risk-meter";

export function TokenRow({ token }: { token: any }) {
  const variant = token.classification === "prime" ? "success" : token.classification === "watch" ? "accent" : "warning";
  return (
    <TR>
      <TD>
        <div className="font-medium">{token.symbol}</div>
        <div className="text-xs text-muted">{token.name}</div>
      </TD>
      <TD>{formatUsd(token.price)}</TD>
      <TD className={token.change1h >= 0 ? "text-success" : "text-danger"}>{formatPct(token.change1h)}</TD>
      <TD className={token.change4h >= 0 ? "text-success" : "text-danger"}>{formatPct(token.change4h)}</TD>
      <TD>{token.score}</TD>
      <TD><Badge variant={variant}>{token.classification}</Badge></TD>
      <TD className="min-w-28"><RiskMeter risk={token.risk} /></TD>
    </TR>
  );
}
