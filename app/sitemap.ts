import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.optisentry.com";
  const now = new Date().toISOString().split("T")[0];
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/imprint`, lastModified: now, changeFrequency: "yearly", priority: 0.3 }
  ];
}
