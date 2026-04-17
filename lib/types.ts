export type Token = {
  symbol: string;
  name: string;
  chain: string;
  source: string;
  price: number;
  change5m: number;
  change1h: number;
  change4h: number;
  volume24h: number;
  buys24h: number;
  sells24h: number;
  holders: number;
  holderStability: number;
  risk: number;
};

export type TreasuryPosition = {
  symbol: string;
  entry: number;
  current: number;
  allocation: number;
  confidence: number;
  status: "active" | "watch";
};

export type ClosedTrade = {
  symbol: string;
  entry: number;
  exit: number;
  pnlPct: number;
  realizedUsd: number;
  closedAt: string;
};

export type FeedEvent = {
  type: "scanner" | "treasury" | "distribution";
  level: "info" | "success" | "warning";
  timestamp: string;
  message: string;
};

export type DistributionCycle = {
  cycle: string;
  reserveUsd: number;
  distributedUsd: number;
  yieldPct: number;
  recipients: number;
};
