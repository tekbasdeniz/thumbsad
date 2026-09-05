import type { Metadata } from 'next';
import Capabilities from "@/components/sections/Capabilities";

export const metadata: Metadata = {
  title: 'Capabilities | ThumbsAd - AI Growth Partner',
  description: 'We design and implement advanced AI-powered digital and hybrid capabilities.',
};

export default function CapabilitiesPageEn() {
  return (
    <main className="pt-16 md:pt-20">
      <Capabilities lang="en" isHome={false} />
    </main>
  );
}
