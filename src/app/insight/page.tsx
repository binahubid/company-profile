"use client";

import { LandingStep } from "./_steps/landing-step";
import { useLocale } from "@/i18n/use-locale";

const APP_ORIGIN = (process.env.NEXT_PUBLIC_BINAHUB_APP_URL || "https://app.binahub.id").replace(/\/$/, "");

export default function InsightLandingPage() {
  const locale = useLocale();

  const startAssessment = () => {
    window.location.assign(`${APP_ORIGIN}${locale === "en" ? "/en/insight" : "/insight"}`);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F7FA] text-[#4A4C54] selection:bg-[#0B2C6B] selection:text-white">
      <LandingStep onStart={startAssessment} />
    </main>
  );
}
