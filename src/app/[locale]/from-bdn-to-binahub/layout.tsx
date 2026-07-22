import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Dari BDN ke BinaHub",
    description: "Jembatan dari legacy 16 tahun Bina Daya Nugraha menuju ekosistem transformasi BinaHub.",
    ogDescription: "Jembatan dari legacy Bina Daya Nugraha menuju ekosistem transformasi BinaHub.",
  },
  en: {
    title: "From BDN to BinaHub",
    description: "A bridge from Bina Daya Nugraha's 16-year legacy towards the BinaHub transformation ecosystem.",
    ogDescription: "A bridge from Bina Daya Nugraha's legacy towards the BinaHub transformation ecosystem.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/from-bdn-to-binahub` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/from-bdn-to-binahub`,
    },
  };
}

export default function FromBdnLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
