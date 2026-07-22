import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Tentang Kami",
    description:
      "Posisi, visi, misi, dan nilai H.U.M.A.N yang menjadi fondasi BinaHub sebagai mitra transformasi manusia dan organisasi di Indonesia.",
    ogDescription:
      "Posisi, visi, misi, dan nilai H.U.M.A.N yang menjadi fondasi BinaHub sebagai mitra transformasi manusia dan organisasi.",
  },
  en: {
    title: "About Us",
    description:
      "Our positioning, vision, mission, and H.U.M.A.N values that form the foundation of BinaHub as a human and organizational transformation partner in Indonesia.",
    ogDescription:
      "Our positioning, vision, mission, and H.U.M.A.N values that form the foundation of BinaHub as a transformation partner.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: `/${locale}/about` },
    openGraph: {
      title: `${copy.title} | BinaHub`,
      description: copy.ogDescription,
      url: `/${locale}/about`,
    },
  };
}

export default function AboutLocaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
