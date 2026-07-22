import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Layanan & Ekosistem",
    description:
      "Delapan layanan BinaHub yang saling terhubung — dari diagnosa, desain, hingga dampak — untuk transformasi manusia dan organisasi yang benar-benar berkelanjutan.",
    ogDescription:
      "Delapan layanan BinaHub yang saling terhubung untuk transformasi yang benar-benar berdampak.",
  },
  en: {
    title: "Services & Ecosystem",
    description:
      "Eight interconnected BinaHub services — from diagnosis, design, to impact — for truly sustainable human and organizational transformation.",
    ogDescription:
      "Eight interconnected BinaHub services for transformation that truly creates impact.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/ecosystem` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/ecosystem`,
    },
  };
}

export default function EcosystemLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
