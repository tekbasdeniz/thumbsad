import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";
import TruOptSection from "@/components/sections/TruOptSection";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import InsightsSection from "@/components/sections/InsightsSection";
import { client } from "@/sanity/lib/client";
import { getLocalizedPostsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThumbsAd | AI Growth Partner for Advanced Digital Projects",
  description: "A project-oriented structure that brings together growth strategy, artificial intelligence systems, and implementation.",
};

export const revalidate = 60;

export default async function HomePageEn() {
  let posts: any[] = [];
  try {
    const fetched = await client.fetch(getLocalizedPostsQuery, { lang: 'en' });
    posts = Array.isArray(fetched) ? fetched : [];
  } catch (error) {
    console.error("Sanity fetch error in HomePageEn:", error);
    posts = [];
  }
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <About />

      {/* Experiences Preview (Logo Marquee between About and Solutions) */}
      <ExperiencesMarquee />

      {/* Solutions Preview */}
      <Solutions isHome={true} />

      {/* Insights Section */}
      <InsightsSection posts={latestPosts} lang="en" />

      {/* TruOpt Section */}
      <TruOptSection />
    </div>
  );
}
