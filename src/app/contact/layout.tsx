import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Terhubung dengan tim BinaHub untuk mendiskusikan kebutuhan transformasi SDM dan organisasi Anda.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Hubungi Kami | BinaHub",
    description: "Terhubung dengan tim BinaHub untuk mendiskusikan kebutuhan transformasi Anda.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
