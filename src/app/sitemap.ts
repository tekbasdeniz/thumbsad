import type { MetadataRoute } from "next";
import { allEducations } from "@/data/educations";
import { client } from "@/sanity/lib/client";
import { getAllPostPathsQuery } from "@/sanity/lib/queries";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 3600;

type PostPath = { slug?: string; publishedAt?: string; _createdAt?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/about", "/capabilities", "/insights", "/educations", "/contact"];
  const paths = [...staticPaths, ...allEducations.map((education) => `/educations/${education.slug}`)];
  const entries: MetadataRoute.Sitemap = paths.flatMap((path) => {
    const tr = `${SITE_URL}${path}`;
    const en = `${SITE_URL}/en${path}`;
    const alternates = { languages: { "tr-TR": tr, "en-US": en } };
    return [{ url: tr, alternates }, { url: en, alternates }];
  });
  try {
    const posts = await client.fetch<PostPath[]>(getAllPostPathsQuery);
    for (const post of posts || []) {
      if (!post.slug) continue;
      const date = new Date(post.publishedAt || post._createdAt || "");
      if (Number.isNaN(date.getTime())) continue;
      const y = date.getUTCFullYear();
      const m = String(date.getUTCMonth() + 1).padStart(2, "0");
      const d = String(date.getUTCDate()).padStart(2, "0");
      const path = `/insights/${y}/${m}/${d}/${encodeURIComponent(post.slug)}`;
      const tr = `${SITE_URL}${path}`;
      const en = `${SITE_URL}/en${path}`;
      const alternates = { languages: { "tr-TR": tr, "en-US": en } };
      entries.push({ url: tr, lastModified: date, alternates }, { url: en, lastModified: date, alternates });
    }
  } catch (error) {
    console.error("Could not fetch Sanity posts for sitemap:", error);
  }
  return entries;
}
