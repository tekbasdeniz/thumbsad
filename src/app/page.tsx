
import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";
import TruOptSection from "@/components/sections/TruOptSection";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import InsightsSection from "@/components/sections/InsightsSection";

export default function HomePageTr() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <About />

      {/* Solutions Preview */}
      <Solutions isHome={true} />

      {/* Insights Section */}
      <InsightsSection />

      {/* Experiences Preview */}
      <ExperiencesMarquee />

      {/* TruOpt Section */}
      <TruOptSection />
    </div>
  );
}
