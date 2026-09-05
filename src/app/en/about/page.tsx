import type { Metadata } from 'next';
import AboutDetail from '@/components/sections/AboutDetail';

export const metadata: Metadata = {
  title: 'About Us | ThumbsAd - AI Growth Partner',
  description: 'ThumbsAd is an AI Growth & Transformation Partner that accelerates organizations’ digital transformation by combining artificial intelligence, growth strategy, and technology applications.',
};

export default function AboutPageEn() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pt-16 md:pt-20 pb-12">
      <AboutDetail lang="en" />
    </main>
  );
}


