import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perspektif",
  description:
    "Cara pandang BinaHub tentang manusia, teknologi, dan masa depan dunia kerja Indonesia — gagasan dan wawasan untuk para pemimpin transformasi.",
  alternates: { canonical: "/perspektif" },
  openGraph: {
    title: "Perspektif | BinaHub",
    description:
      "Gagasan dan wawasan BinaHub tentang manusia, teknologi, dan masa depan dunia kerja.",
    url: "/perspektif",
  },
};

export default function PerspektifLayout({ children }: { children: React.ReactNode }) {
  return children;
}
