import type { MetadataRoute } from "next";

const BASE_URL = "https://www.nexo-skills.com";

const courses = [
  "qa", "a11y", "web", "iso", "audit",
  "tutorat-francais", "tutorat-anglais", "tutorat-math",
  "anglais-vacances-ete",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const langs = ["fr", "en"];

  const staticPages = langs.flatMap((lang) => [
    {
      url: `${BASE_URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/${lang}/pack-anglais-ete`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/${lang}/success`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ]);

  const coursePages = langs.flatMap((lang) =>
    courses.map((course) => ({
      url: `${BASE_URL}/${lang}/formations/${course}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  return [...staticPages, ...coursePages];
}
