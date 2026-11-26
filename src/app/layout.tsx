import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChatBotLoader } from "../components/chat-bot-loader";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/site";
import { defaultLocale } from "@/i18n/config";
import { LocaleSync } from "@/components/locale-sync";
import { JsonLd } from "@/components/json-ld";
import { WebMcpScript } from "@/components/web-mcp-script";
import { InboundJourneyTracker } from "@/components/inbound-journey-tracker";

const jakartaFont = "/fonts/plus-jakarta-sans-latin.woff2";
const jakartaFontStyle = `
  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url("${jakartaFont}") format("woff2");
    font-style: normal;
    font-weight: 300 700;
    font-display: swap;
  }
  :root { --font-jakarta-sans: "Plus Jakarta Sans"; }
`;

const title = `${SITE_NAME} | ${SITE_TAGLINE}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: { url: "/media/site/mark-48.webp", sizes: "48x48", type: "image/webp" },
    apple: { url: "/media/site/mark-180.png", sizes: "180x180", type: "image/png" },
  },
};

import { LegalModalProvider, LegalModal } from "@/components/legal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} className="scroll-smooth">
      <head>
        <link rel="preload" href={jakartaFont} as="font" type="font/woff2" crossOrigin="anonymous" />
        <style>{jakartaFontStyle}</style>
        <JsonLd />
        <WebMcpScript />
      </head>
      <body
        className={`min-h-screen flex flex-col selection:bg-[#0B2C6B] selection:text-white`}
        style={{ fontFamily: "var(--font-jakarta-sans, system-ui), 'Segoe UI', Arial, sans-serif" }}
      >
        <LegalModalProvider>
          <Suspense fallback={null}>
            <InboundJourneyTracker />
          </Suspense>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <ChatBotLoader />
          <LegalModal />
          <LocaleSync />
        </LegalModalProvider>
      </body>
    </html>
  );
}
