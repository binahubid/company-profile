import type { Metadata } from "next";
import { LEGAL_DOCUMENTS, type LegalDocument } from "@/data/legal-content";
import type { Locale } from "@/i18n/config";
import { LegalContentView } from "./legal-content-view";

export function legalMetadata(id: LegalDocument["id"], locale: Locale): Metadata {
  const document = LEGAL_DOCUMENTS[id];
  const title = locale === "en" ? document.titleEn : document.titleId;
  const description = locale === "en" ? document.summaryEn : document.summaryId;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/${id}/`,
      languages: { id: `/id/${id}/`, en: `/en/${id}/` },
    },
    openGraph: { title, description, url: `/${locale}/${id}/`, type: "website" },
    twitter: { title, description, card: "summary" },
  };
}

export function LegalPage({ id, locale }: { id: LegalDocument["id"]; locale: Locale }) {
  const document = LEGAL_DOCUMENTS[id];
  const isEnglish = locale === "en";
  const content = isEnglish ? document.contentEn : document.contentId;
  // The document's title is already the page's primary heading.
  const body = content.replace(/^# [^\n]+\n+/, "");
  const isIndonesian = !isEnglish || content === document.contentId;

  return (
    <article className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16" lang={locale}>
      <h1 className="mb-6 text-3xl font-bold text-[#0B2C6B] sm:text-4xl">
        {isEnglish ? document.titleEn : document.titleId}
      </h1>
      {isEnglish && isIndonesian && (
        <p className="mb-6 text-sm text-[#52617A]">The official document is published in Indonesian.</p>
      )}
      <div lang={isIndonesian ? "id" : "en"}>
        <LegalContentView content={body} />
      </div>
    </article>
  );
}
