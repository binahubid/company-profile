import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinaWorks",
  description:
    "Execution & Performance Acceleration — mengubah pembelajaran menjadi tindakan dan strategi menjadi hasil nyata.",
  alternates: { canonical: "/works" },
  openGraph: {
    title: "BinaWorks | BinaHub",
    description:
      "Execution & Performance Acceleration — dari pembelajaran menjadi hasil nyata.",
    url: "/works",
  },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
