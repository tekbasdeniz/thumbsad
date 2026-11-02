import { localizedMetadata } from "@/lib/seo";
import type { Metadata } from 'next';
import Capabilities from "@/components/sections/Capabilities";


export const metadata = localizedMetadata("capabilities", "tr", "Uzmanlıklarımız | ThumbsAd - AI Growth Partner", "Yapay zeka destekli dijital ve hibrit yetenekler tasarlıyor ve uyguluyoruz.");

export default function CapabilitiesPageTr() {
  return (
    <main className="pt-16 md:pt-20">
      <Capabilities lang="tr" isHome={false} />
    </main>
  );
}
