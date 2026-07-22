import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Perspektif",
    description: "Cara pandang BinaHub tentang manusia, teknologi, dan masa depan dunia kerja Indonesia - gagasan dan wawasan untuk para pemimpin transformasi.",
    ogDescription: "Gagasan dan wawasan BinaHub tentang manusia, teknologi, dan masa depan dunia kerja.",
  },
  en: {
    title: "Perspective",
    description: "BinaHub's perspective on humans, technology, and the future of Indonesia's workplace - ideas and insights for transformation leaders.",
    ogDescription: "BinaHub's ideas and insights on humans, technology, and the future of the workplace.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/perspektif` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/perspektif`,
    },
  };
}

export default function PerspektifLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
