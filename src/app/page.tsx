import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";
import TruOptSection from "@/components/sections/TruOptSection";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import InsightsSection from "@/components/sections/InsightsSection";
import { client } from "@/sanity/lib/client";
import { getLocalizedPostsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function HomePageTr() {
  const posts = await client.fetch(getLocalizedPostsQuery, { lang: 'tr' });
  const latestPosts = (posts || []).slice(0, 3);

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
      <InsightsSection posts={latestPosts} lang="tr" />

      {/* TruOpt Section */}
      <TruOptSection />
    </div>
  );
}
