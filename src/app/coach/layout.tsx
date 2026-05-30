import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BinaCoach",
  description:
    "Executive & Performance Coaching untuk membimbing individu berpikir jernih, bertindak sadar, dan tumbuh dengan kepemilikan penuh.",
  alternates: { canonical: "/coach" },
  openGraph: {
    title: "BinaCoach | BinaHub",
    description:
      "Executive & Performance Coaching untuk pertumbuhan yang sadar dan berkepemilikan.",
    url: "/coach",
  },
};

export default function CoachLayout({ children }: { children: React.ReactNode }) {
  return children;
}
