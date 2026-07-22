import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const COPY = {
  id: {
    title: "Diagnosa Performa",
    description:
      "Mulai perjalanan transformasi Anda dengan diagnosa mandiri BinaInsight, pahami diri dan organisasi untuk bertumbuh lebih cerdas dan terarah.",
    ogDescription:
      "Diagnosa mandiri BinaInsight untuk memahami diri dan organisasi sebelum memulai transformasi.",
  },
  en: {
    title: "Performance Diagnostic",
    description:
      "Start your transformation journey with BinaInsight self-diagnostic, understand yourself and your organization to grow smarter and more focused.",
    ogDescription:
      "BinaInsight self-diagnostic to understand yourself and your organization before starting transformation.",
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
