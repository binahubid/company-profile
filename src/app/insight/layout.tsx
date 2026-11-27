import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnosis Individu, Tim dan Organisasi",
  description:
    "Pilih Self Diagnostic Individu atau diagnosis tim dan organisasi untuk mengenali prioritas pengembangan bersama BinaHub.",
  alternates: { canonical: "/insight" },
  openGraph: {
    title: "Diagnosis Individu, Tim dan Organisasi | BinaHub",
    description:
      "Temukan jalur diagnosis yang tepat untuk kebutuhan pengembangan diri atau tim Anda.",
    url: "/insight",
    locale: "id_ID",
  },
};

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return children;
}
