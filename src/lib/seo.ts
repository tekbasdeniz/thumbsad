import type { Metadata } from "next";

export const SITE_URL = "https://www.thumbsad.com";

export function localizedMetadata(path: string, lang: "tr" | "en", title: string, description: string): Metadata {
  const suffix = path ? `/${path.replace(/^\/+|\/+$/g, "")}` : "";
  const tr = `${SITE_URL}${suffix}`;
  const en = `${SITE_URL}/en${suffix}`;
  const canonical = lang === "tr" ? tr : en;
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { "tr-TR": tr, "en-US": en, "x-default": tr },
    },
    openGraph: { title, description, url: canonical, siteName: "ThumbsAd", locale: lang === "tr" ? "tr_TR" : "en_US", type: "website" },
  };
}

export function safeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
