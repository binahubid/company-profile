import type { ReactNode } from "react";
import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_DESCRIPTION_EN, SITE_KEYWORDS, SITE_KEYWORDS_EN } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  const title = `${SITE_NAME} | ${SITE_TAGLINE}`;
  const description = isEn ? SITE_DESCRIPTION_EN : SITE_DESCRIPTION;
  const keywords = isEn ? SITE_KEYWORDS_EN : SITE_KEYWORDS;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        id: "/id",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "id_ID",
      url: `/${locale}`,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return children;
}
