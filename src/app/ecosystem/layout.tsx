import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan & Ekosistem",
  description:
    "Delapan layanan BinaHub yang saling terhubung — dari diagnosa, desain, hingga dampak — untuk transformasi manusia dan organisasi yang benar-benar berkelanjutan.",
  alternates: { canonical: "/ecosystem" },
  openGraph: {
    title: "Layanan & Ekosistem | BinaHub",
    description:
      "Delapan layanan BinaHub yang saling terhubung untuk transformasi yang benar-benar berdampak.",
    url: "/ecosystem",
  },
};

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
