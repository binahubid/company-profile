import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const ROUTES: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ecosystem", priority: 0.9, changeFrequency: "monthly" },
  { path: "/insight", priority: 0.9, changeFrequency: "monthly" },
  { path: "/perspektif", priority: 0.8, changeFrequency: "weekly" },
  { path: "/perspektif/transformation-signals-2026", priority: 0.6, changeFrequency: "yearly" },
  { path: "/journey", priority: 0.7, changeFrequency: "monthly" },
  { path: "/from-bdn-to-binahub", priority: 0.6, changeFrequency: "yearly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/academy", priority: 0.7, changeFrequency: "monthly" },
  { path: "/coach", priority: 0.7, changeFrequency: "monthly" },
  { path: "/lab", priority: 0.7, changeFrequency: "monthly" },
  { path: "/play", priority: 0.7, changeFrequency: "monthly" },
  { path: "/impact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/works", priority: 0.7, changeFrequency: "monthly" },
  { path: "/binahub", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
