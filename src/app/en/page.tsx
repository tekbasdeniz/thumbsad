
import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";
import TruOptSection from "@/components/sections/TruOptSection";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThumbsAd | AI Growth Partner for Advanced Digital Projects",
};

export default function HomePageEn() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <About />

      {/* Solutions Preview */}
      <Solutions />

      {/* Experiences Preview */}
      <ExperiencesMarquee />

      {/* TruOpt Section */}
      <TruOptSection />
    </div>
  );
}
