import type { Metadata } from 'next';
import ExperiencesMarquee from "@/components/sections/ExperiencesMarquee";

export const metadata: Metadata = {
  title: 'Deneyimler | ThumbsAd - AI Growth Partner',
  description: 'ThumbsAd’in yetkinliklerini ve etki alanını yansıtan seçili sektörler, istatistikler ve marka ortaklıkları.',
};

export default function ExperiencesPageTr() {
  return (
    <main className="w-full min-h-screen bg-gray-50 pt-16 md:pt-20 pb-12">
      <ExperiencesMarquee lang="tr" hideHeader={false} hideButton={true} />
    </main>
  );
}
