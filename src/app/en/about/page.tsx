import { localizedMetadata } from "@/lib/seo";
import type { Metadata } from 'next';
import AboutDetail from '@/components/sections/AboutDetail';


export const metadata = localizedMetadata("about", "en", "About Us | ThumbsAd - AI Growth Partner", "ThumbsAd combines AI, growth strategy and technology implementation to support digital transformation.");

export default function AboutPageEn() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pt-16 md:pt-20 pb-12">
      <AboutDetail lang="en" />
    </main>
  );
}


