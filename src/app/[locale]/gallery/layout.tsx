import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Galeri",
    description: "Dokumentasi kegiatan, ruang belajar, dan perjalanan transformasi BinaHub.",
    ogDescription: "Dokumentasi kegiatan, ruang belajar, dan perjalanan transformasi BinaHub.",
  },
  en: {
    title: "Gallery",
    description: "Documentation of learning activities, collaboration, and BinaHub's transformation journey.",
    ogDescription: "Documentation of learning activities, collaboration, and BinaHub's transformation journey.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/gallery` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/gallery`,
    },
  };
}

export default function GalleryLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
