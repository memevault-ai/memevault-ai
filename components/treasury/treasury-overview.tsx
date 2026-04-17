import { getRotationOverview } from "@/lib/treasury/rotation-engine";
import { formatPct } from "@/lib/formatting";
import { TreasuryCycleCard } from "./treasury-cycle-card";
import { ReserveCard } from "./reserve-card";

export function TreasuryOverview({ compact = false }: { compact?: boolean }) {
  const overview = getRotationOverview();
  return (
    <div className={`grid gap-4 ${compact ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-4"}`}>
      <TreasuryCycleCard title="Total allocation" value={`${overview.totalAllocation}%`} detail="Deployed across active and watch positions" />
      <TreasuryCycleCard title="Weighted confidence" value={`${overview.weightedConfidence}/100`} detail="Composite conviction across treasury picks" />
      <TreasuryCycleCard title="Active positions" value={`${overview.activeCount}`} detail={`Rotation bias ${formatPct(12.4)}`} />
      {!compact ? <ReserveCard /> : <TreasuryCycleCard title="Reserve readiness" value="High" detail="Distribution engine funded for next cycle" />}
    </div>
  );
}
