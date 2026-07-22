import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Perjalanan Kami",
    description: "Akar pengalaman, momentum, dan evolusi BinaHub dari BDN menuju ekosistem transformasi masa depan.",
    ogDescription: "Akar pengalaman dan evolusi BinaHub dari BDN menuju ekosistem transformasi masa depan.",
  },
  en: {
    title: "Our Journey",
    description: "The roots of experience, momentum, and BinaHub's evolution from BDN towards a future transformation ecosystem.",
    ogDescription: "The roots of experience and BinaHub's evolution from BDN towards a future transformation ecosystem.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/journey` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/journey`,
    },
  };
}

export default function JourneyLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
