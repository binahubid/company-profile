"use client";

import { LandingStep } from "./_steps/landing-step";
import { useLocale } from "@/i18n/use-locale";
import { assessmentUrlWithAttribution } from "@/lib/attribution";
import { withInboundJourney } from "@/lib/inbound-journey";

const APP_ORIGIN = (process.env.NEXT_PUBLIC_BINAHUB_APP_URL || "https://app.binahub.id").replace(/\/$/, "");

export default function InsightLandingPage() {
  const locale = useLocale();

  const startAssessment = () => {
    const destination = `${APP_ORIGIN}${locale === "en" ? "/en/insight" : "/insight"}`;
    // Preserve the opaque first/last-touch ID while the visitor crosses from
    // the public site to app.binahub.id. Attribution itself is still passed
    // separately and no contact data appears in this URL.
    window.location.assign(withInboundJourney(assessmentUrlWithAttribution(destination, window.location.href, document.referrer)));
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F7FA] text-[#4A4C54] selection:bg-[#0B2C6B] selection:text-white">
      <LandingStep onStart={startAssessment} />
    </main>
  );
}
