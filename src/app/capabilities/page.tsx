import type { Metadata } from 'next';
import Capabilities from "@/components/sections/Capabilities";

export const metadata: Metadata = {
  title: 'Uzmanlıklarımız | ThumbsAd - AI Growth Partner',
  description: 'Yapay zeka destekli dijital ve hibrit yetenekler tasarlıyor ve uyguluyoruz.',
};

export default function CapabilitiesPageTr() {
  return (
    <main className="pt-16 md:pt-20">
      <Capabilities lang="tr" isHome={false} />
    </main>
  );
}
