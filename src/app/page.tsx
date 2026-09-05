import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";
import TruOptSection from "@/components/sections/TruOptSection";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import InsightsSection from "@/components/sections/InsightsSection";
import { client } from "@/sanity/lib/client";
import { getLocalizedPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function HomePageTr() {
  let posts: any[] = [];
  try {
    const fetched = await client.fetch(getLocalizedPostsQuery, { lang: 'tr' });
    posts = Array.isArray(fetched) ? fetched : [];
  } catch (error) {
    console.error("Sanity fetch error in HomePageTr:", error);
    posts = [];
  }
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <About lang="tr" />

      {/* Experiences Preview (Logo Marquee between About and Capabilities) */}
      <ExperiencesMarquee lang="tr" />

      {/* Capabilities Preview */}
      <Capabilities lang="tr" isHome={true} />

      {/* Insights Section */}
      <InsightsSection posts={latestPosts} lang="tr" />

      {/* TruOpt Section */}
      <TruOptSection />
    </div>
  );
}
