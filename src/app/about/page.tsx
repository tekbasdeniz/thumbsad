import { localizedMetadata } from "@/lib/seo";
import type { Metadata } from 'next';
import AboutDetail from '@/components/sections/AboutDetail';


export const metadata = localizedMetadata("about", "tr", "Hakkımızda | ThumbsAd - AI Growth Partner", "ThumbsAd, yapay zeka, büyüme stratejisi ve teknoloji uygulamalarını bir araya getiren bir AI Growth Partner'dır.");

export default function AboutPageTr() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pt-16 md:pt-20 pb-12">
      <AboutDetail lang="tr" />
    </main>
  );
}


