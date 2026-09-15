import { appApiUrl } from "@/lib/public-api";
import { readPageAttribution } from "@/lib/attribution";

const STORAGE_KEY = "binahub.inboundJourney.v1";
const JOURNEY_TTL_MS = 1000 * 60 * 60 * 24 * 30;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

type StoredJourney = { id: string; expiresAt: number };
type JourneyEvent = "landing_view" | "catalog_view" | "catalog_module_selected" | "assessment_started" | "inquiry_started";

export function readInboundJourneyId(search = typeof window === "undefined" ? "" : window.location.search) {
  if (typeof window === "undefined") return undefined;
  const incoming = new URLSearchParams(search).get("bh_journey")?.trim();
  if (incoming && UUID.test(incoming)) {
    storeInboundJourneyId(incoming);
    return incoming;
  }
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null") as StoredJourney | null;
    if (stored && UUID.test(stored.id) && stored.expiresAt > Date.now()) return stored.id;
    window.localStorage.removeItem(STORAGE_KEY);
  } catch { /* Storage is optional; tracking will still work without it. */ }
  return undefined;
}

export function storeInboundJourneyId(id: string) {
  if (typeof window === "undefined" || !UUID.test(id)) return;
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ id, expiresAt: Date.now() + JOURNEY_TTL_MS } satisfies StoredJourney)); }
  catch { /* Private-mode storage failure must never affect the public journey. */ }
}

export function withInboundJourney(destination: string) {
  const id = readInboundJourneyId();
  if (!id) return destination;
  const url = new URL(destination, window.location.origin);
  url.searchParams.set("bh_journey", id);
  return url.toString();
}

export async function recordInboundJourneyEvent(eventType: JourneyEvent, moduleCodes: string[] = []) {
  if (typeof window === "undefined") return undefined;
  const response = await fetch(appApiUrl("/api/acquisition/journey"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "omit",
    keepalive: true,
    body: JSON.stringify({
      journeyId: readInboundJourneyId(),
      eventType,
      routePath: window.location.pathname,
      attribution: readPageAttribution(window.location.href, document.referrer),
      moduleCodes,
    }),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload?.success || typeof payload.journeyId !== "string") return undefined;
  storeInboundJourneyId(payload.journeyId);
  return payload.journeyId as string;
}
