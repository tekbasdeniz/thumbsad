import type { Metadata } from 'next';
import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";

export const metadata: Metadata = {
  title: 'Experiences | ThumbsAd - AI Growth Partner',
  description: 'Selected sectors, metrics, and industry partnerships reflecting ThumbsAd’s enterprise capabilities.',
};

export default function ExperiencesPageEn() {
  return (
    <main className="w-full min-h-screen bg-gray-50 pt-16 md:pt-20 pb-12">
      <ExperiencesMarquee lang="en" hideHeader={false} hideButton={true} />
    </main>
  );
}
