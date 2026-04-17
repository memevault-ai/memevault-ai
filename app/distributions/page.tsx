import { SectionHeader } from "@/components/layout/section-header";
import { DistributionPanel } from "@/components/distributions/distribution-panel";
import { DistributionHistory } from "@/components/distributions/distribution-history";
import { NextCycleCountdown } from "@/components/distributions/next-cycle-countdown";

export default function DistributionsPage() {
  return (
    <div className="space-y-6 pb-10">
      <SectionHeader
        eyebrow="Distributions"
        title="Reserve and distribution cycles"
        description="Simulated payout logic based on treasury performance, reserve rules and timed distribution windows."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <NextCycleCountdown />
        <DistributionPanel />
      </div>
      <DistributionHistory />
    </div>
  );
}
