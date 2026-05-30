import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinaPlay",
  description:
    "Gamified Learning & Team Engagement untuk memperkuat koneksi, energi, dan kolaborasi tim melalui pengalaman yang menyenangkan.",
  alternates: { canonical: "/play" },
  openGraph: {
    title: "BinaPlay | BinaHub",
    description:
      "Gamified Learning & Team Engagement untuk memperkuat koneksi dan kolaborasi tim.",
    url: "/play",
  },
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
