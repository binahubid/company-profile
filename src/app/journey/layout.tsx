import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perjalanan Kami",
  description: "Akar pengalaman, momentum, dan evolusi BinaHub dari BDN menuju ekosistem transformasi masa depan.",
  alternates: { canonical: "/journey" },
  openGraph: {
    title: "Perjalanan Kami | BinaHub",
    description: "Akar pengalaman dan evolusi BinaHub dari BDN menuju ekosistem transformasi masa depan.",
    url: "/journey",
  },
};

export default function JourneyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
