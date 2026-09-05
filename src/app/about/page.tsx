import type { Metadata } from 'next';
import AboutDetail from '@/components/sections/AboutDetail';

export const metadata: Metadata = {
  title: 'Hakkımızda | ThumbsAd - AI Growth Partner',
  description: 'ThumbsAd, yapay zeka, büyüme stratejisi ve teknoloji uygulamalarını bir araya getirerek kuruluşların dijital dönüşümünü hızlandıran bir Yapay Zeka Büyüme ve Dönüşüm Ortağıdır.',
};

export default function AboutPageTr() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 pt-16 md:pt-20 pb-12">
      <AboutDetail lang="tr" />
    </main>
  );
}


