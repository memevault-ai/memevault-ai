import { useScannerStore } from "@/store/scanner-store";
import { useTreasuryStore } from "@/store/treasury-store";
import { useAppStore } from "@/store/app-store";
import { getScannedTokens } from "@/lib/scanner/scanner-engine";
import { getFeedEvents } from "@/lib/feed/event-generator";
import positions from "@/data/treasury.positions.json";
import closed from "@/data/treasury.closed.json";
import history from "@/data/distribution.history.json";

export function seedMockStores() {
  useScannerStore.setState({ tokens: getScannedTokens() });
  useTreasuryStore.setState({ positions, closed, history });
  useAppStore.setState({ feed: getFeedEvents() });
}
