import TransformationSignalsPageContent from "./_components/transformation-signals-page-content";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, hasLocale } from "@/i18n/config";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const localeHeader = headerList.get("x-binahub-locale");
  const locale = hasLocale(localeHeader) ? localeHeader : defaultLocale;
  const isEnglish = locale === "en";

  return {
    title: "Transformation Signals 2026 | BinaHub Perspective",
    description: isEnglish
      ? "Ten signals shaping Indonesia's 2026 world of work and what they mean for people, organizational, and AI transformation strategy."
      : "Sepuluh sinyal perubahan dunia kerja Indonesia 2026 dan implikasinya bagi strategi transformasi manusia, organisasi, dan AI.",
    alternates: {
      canonical: isEnglish ? "/en/perspektif/transformation-signals-2026" : "/perspektif/transformation-signals-2026",
    },
    openGraph: {
      title: isEnglish
        ? "Transformation Signals 2026 | BinaHub Perspective"
        : "Transformation Signals 2026 | BinaHub Perspektif",
      description: isEnglish
        ? "A strategic briefing for leaders on economic pressure, workforce shifts, and transformation gaps."
        : "Briefing strategis tentang tekanan ekonomi, pergeseran tenaga kerja, dan gap transformasi untuk para pemimpin.",
      url: isEnglish ? "/en/perspektif/transformation-signals-2026" : "/perspektif/transformation-signals-2026",
    },
  };
}

export default function TransformationSignalsPage() {
  return <TransformationSignalsPageContent />;
}
