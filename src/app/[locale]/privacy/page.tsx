import { LegalPage, legalMetadata } from "@/components/legal/legal-page";
import type { Locale } from "@/i18n/config";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  return legalMetadata("privacy", (await params).locale);
}

export default async function Page({ params }: Props) {
  return <LegalPage id="privacy" locale={(await params).locale} />;
}
