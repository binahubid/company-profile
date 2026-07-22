import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Ekosistem BinaHub",
    description: "Peta interaktif delapan layanan BinaHub yang saling terhubung untuk transformasi manusia dan organisasi.",
    ogDescription: "Peta interaktif delapan layanan BinaHub yang saling terhubung.",
  },
  en: {
    title: "BinaHub Ecosystem",
    description: "Interactive map of eight interconnected BinaHub services for human and organizational transformation.",
    ogDescription: "Interactive map of eight interconnected BinaHub services.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/binahub` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/binahub`,
    },
  };
}

export default function BinaHubLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
