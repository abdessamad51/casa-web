import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://casa-web.ma";
const locales = ["fr", "en", "ar"];

const staticPages = [
  "",
  "/services",
  "/portfolio",
  "/pricing",
  "/about",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

const portfolioSlugs = [
  "fashion-ma-ecommerce",
  "deliverydz-app",
  "dr-alami-dental",
  "prestig-immo-landing",
];

const blogSlugs = [
  "5-raisons-site-vitrine-perd-clients",
  "vps-vs-hebergement-partage-maroc",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages for all locales
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${page}`])
          ),
        },
      });
    }

    // Portfolio case studies
    for (const slug of portfolioSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}/portfolio/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    // Blog posts
    for (const slug of blogSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
