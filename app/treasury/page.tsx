import { SectionHeader } from "@/components/layout/section-header";
import { TreasuryOverview } from "@/components/treasury/treasury-overview";
import { TreasuryPicks } from "@/components/treasury/treasury-picks";
import { PnlSummary } from "@/components/treasury/pnl-summary";
import { TreasuryAllocationChart } from "@/components/charts/treasury-allocation-chart";
import { RotationPerformanceChart } from "@/components/charts/rotation-performance-chart";

export default function TreasuryPage() {
  return (
    <div className="space-y-6 pb-10">
      <SectionHeader
        eyebrow="Treasury"
        title="Treasury rotation prototype"
        description="Mock treasury moves into top-ranked candidates and tracks realized PnL, allocation and reserve logic."
      />
      <TreasuryOverview />
      <div className="grid gap-6 lg:grid-cols-2">
        <TreasuryAllocationChart />
        <RotationPerformanceChart />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <TreasuryPicks />
        <PnlSummary />
      </div>
    </div>
  );
}
