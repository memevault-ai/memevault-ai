"use client";

import { useEffect } from "react";
import { seedMockStores } from "@/lib/mock/seed";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    seedMockStores();
  }, []);

  return <>{children}</>;
}
