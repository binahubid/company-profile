import type { Metadata } from "next";
import { metadata as indonesianMetadata } from "../../pricing/layout";
export { default } from "../../pricing/layout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en" ? {
    title: "Solutions Catalog | BinaHub",
    description: "Explore development solutions, learning objectives, content, outcomes and formats for your organization.",
  } : indonesianMetadata;
}
