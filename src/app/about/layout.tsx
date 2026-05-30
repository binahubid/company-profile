import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Posisi, visi, misi, dan nilai H.U.M.A.N yang menjadi fondasi BinaHub sebagai mitra transformasi manusia dan organisasi di Indonesia.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tentang Kami | BinaHub",
    description:
      "Posisi, visi, misi, dan nilai H.U.M.A.N yang menjadi fondasi BinaHub sebagai mitra transformasi manusia dan organisasi.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
