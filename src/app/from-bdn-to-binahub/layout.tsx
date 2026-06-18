import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dari BDN ke BinaHub",
  description: "Jembatan dari legacy 16 tahun Bina Daya Nugraha menuju ekosistem transformasi BinaHub.",
  alternates: { canonical: "/from-bdn-to-binahub" },
  openGraph: {
    title: "Dari BDN ke BinaHub | BinaHub",
    description: "Jembatan dari legacy Bina Daya Nugraha menuju ekosistem transformasi BinaHub.",
    url: "/from-bdn-to-binahub",
  },
};

export default function FromBdnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
