import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { HOME_LANGUAGE_ALTERNATES } from "@/lib/site";

export { default } from "../page";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: HOME_LANGUAGE_ALTERNATES[locale],
      languages: HOME_LANGUAGE_ALTERNATES,
    },
  };
}
