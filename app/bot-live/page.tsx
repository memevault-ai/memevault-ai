import { LiveScannerTable } from "@/components/bot/live-scanner-table";
import { ScannerFilters } from "@/components/bot/scanner-filters";
import { ScannerStatusBar } from "@/components/bot/scanner-status-bar";
import { MomentumChart } from "@/components/charts/momentum-chart";
import { LiveLog } from "@/components/feed/live-log";
import { SectionHeader } from "@/components/layout/section-header";

export default function BotLivePage() {
  return (
    <div className="space-y-6 pb-10">
      <SectionHeader
        eyebrow="Bot Live"
        title="Live simulation of the scanner engine"
        description="Momentum, holder stability, risk classification and event generation over realistic mock streams."
      />
      <ScannerStatusBar />
      <ScannerFilters />
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <LiveScannerTable />
        <div className="space-y-6">
          <MomentumChart />
          <LiveLog limit={7} />
        </div>
      </div>
    </div>
  );
}
