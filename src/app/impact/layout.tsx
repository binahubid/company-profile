import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinaImpact",
  description:
    "Measurement & ROI — mengukur kemajuan untuk memastikan dampak transformasi yang bermakna dan berkelanjutan.",
  alternates: { canonical: "/impact" },
  openGraph: {
    title: "BinaImpact | BinaHub",
    description:
      "Measurement & ROI untuk memastikan dampak transformasi yang bermakna.",
    url: "/impact",
  },
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
