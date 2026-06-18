import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

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
  { path: "/binahub", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.flatMap((route) =>
    locales.map((locale) => {
      const localizedPath = route.path === "/" ? `/${locale}` : `/${locale}${route.path}`;

      return {
        url: `${SITE_URL}${localizedPath}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      };
    }),
  );
}
