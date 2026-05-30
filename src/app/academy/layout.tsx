import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinaAcademy",
  description:
    "Structured Learning Programs — perjalanan pembelajaran terstruktur untuk pertumbuhan individu dan organisasi yang berkelanjutan.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "BinaAcademy | BinaHub",
    description:
      "Perjalanan pembelajaran terstruktur untuk pertumbuhan yang berkelanjutan.",
    url: "/academy",
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
