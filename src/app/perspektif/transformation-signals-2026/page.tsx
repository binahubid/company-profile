import TransformationSignalsPageContent from "./_components/transformation-signals-page-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transformation Signals 2026 | BinaHub Perspektif",
  description: "Sepuluh sinyal perubahan dunia kerja Indonesia 2026 dan implikasinya bagi strategi transformasi manusia, organisasi, dan AI.",
  alternates: {
    canonical: "/perspektif/transformation-signals-2026",
  },
  openGraph: {
    title: "Transformation Signals 2026 | BinaHub Perspektif",
    description: "Briefing strategis tentang tekanan ekonomi, pergeseran tenaga kerja, dan gap transformasi untuk para pemimpin.",
    url: "/perspektif/transformation-signals-2026",
  },
};

export default function TransformationSignalsPage() {
  return <TransformationSignalsPageContent />;
}
