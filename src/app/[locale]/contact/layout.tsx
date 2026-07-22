import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Hubungi Kami",
    description: "Terhubung dengan tim BinaHub untuk mendiskusikan kebutuhan transformasi SDM dan organisasi Anda.",
    ogDescription: "Terhubung dengan tim BinaHub untuk mendiskusikan kebutuhan transformasi Anda.",
  },
  en: {
    title: "Contact Us",
    description: "Connect with the BinaHub team to discuss your human resources and organizational transformation needs.",
    ogDescription: "Connect with the BinaHub team to discuss your transformation needs.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/contact` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/contact`,
    },
  };
}

export default function ContactLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
