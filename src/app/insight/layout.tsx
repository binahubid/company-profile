import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinaInsight Diagnostic",
  description: "Akses formulir diagnostik performa BinaInsight di app.binahub.id.",
  alternates: { canonical: "/insight" },
  openGraph: {
    title: "BinaInsight Diagnostic | BinaHub",
    description: "Mulai diagnostik performa organisasi melalui aplikasi BinaHub.",
    url: "/insight",
  },
};

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return children;
}
