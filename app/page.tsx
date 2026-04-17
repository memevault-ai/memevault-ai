import { HeroSection } from "@/components/hero/hero-section";
import { SectionHeader } from "@/components/layout/section-header";
import { TreasuryOverview } from "@/components/treasury/treasury-overview";
import { DistributionPanel } from "@/components/distributions/distribution-panel";
import { LiveScannerTable } from "@/components/bot/live-scanner-table";
import { ScannerStatusBar } from "@/components/bot/scanner-status-bar";
import { DocsAccordion } from "@/components/docs/docs-accordion";
import { LiveLog } from "@/components/feed/live-log";

export default function HomePage() {
  return (
    <div className="space-y-8 pb-10">
      <HeroSection />

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Protocol View"
          title="Scanner, treasury rotation and distributions in one terminal"
          description="Presented as a product demo, live simulation, architecture-ready scanner and treasury rotation prototype."
        />
        <ScannerStatusBar compact />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <LiveScannerTable compact />
        <TreasuryOverview compact />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <DistributionPanel compact />
        <LiveLog compact />
      </section>

      <section>
        <DocsAccordion />
      </section>
    </div>
  );
}
