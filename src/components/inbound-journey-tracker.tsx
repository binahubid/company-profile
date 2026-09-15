"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { recordInboundJourneyEvent } from "@/lib/inbound-journey";

function eventForPath(pathname: string) {
  if (/(^|\/)pricing$/.test(pathname)) return "catalog_view" as const;
  if (/(^|\/)contact$/.test(pathname)) return "inquiry_started" as const;
  return "landing_view" as const;
}

/** Records anonymous first/last touch. It deliberately does not collect form
 * values, trigger messages, or prevent navigation if the tracker is offline. */
export function InboundJourneyTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    void recordInboundJourneyEvent(eventForPath(pathname || "/")).catch(() => undefined);
  }, [pathname, search]);

  return null;
}
