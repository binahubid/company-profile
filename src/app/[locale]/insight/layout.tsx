import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Diagnosis Individu, Tim dan Organisasi",
    description:
      "Pilih Self Diagnostic Individu atau diagnosis tim dan organisasi untuk mengenali prioritas pengembangan bersama BinaHub.",
    ogDescription:
      "Temukan jalur diagnosis yang tepat untuk kebutuhan pengembangan diri atau tim Anda.",
  },
  en: {
    title: "Individual, Team and Organization Diagnostics",
    description:
      "Choose the Individual Self Diagnostic or team and organization diagnosis to identify development priorities with BinaHub.",
    ogDescription:
      "Find the right diagnostic for your own development or your team’s needs.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/insight` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/insight`,
    },
  };
}

export default function InsightLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
