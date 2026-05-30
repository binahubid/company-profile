import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinaLab",
  description:
    "Experiential Workshops — belajar melalui pengalaman nyata untuk membangun wawasan, kapabilitas, dan kolaborasi tim.",
  alternates: { canonical: "/lab" },
  openGraph: {
    title: "BinaLab | BinaHub",
    description:
      "Experiential Workshops untuk membangun wawasan dan kapabilitas melalui pengalaman nyata.",
    url: "/lab",
  },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
