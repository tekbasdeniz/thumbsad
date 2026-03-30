"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const companies = [
  { id: 1, name: "Biblos Alaçatı", src: "/images/biblos-alacati.png" },
  { id: 2, name: "Evidea", src: "/images/evidea.png" },
  { id: 3, name: "Maxi-Cosi", src: "/images/maxi-cosi.png" },
  { id: 4, name: "MTC Game", src: "/images/mtc-game.jpeg" },
  { id: 5, name: "Nobelyum", src: "/images/nobelyum.webp" },
  { id: 6, name: "Ritz-Carlton", src: "/images/ritz-carlton.png" },
  { id: 7, name: "Tchibo", src: "/images/tchibo.png" },
  { id: 8, name: "W Hotels", src: "/images/w-hotels.png" },
  { id: 9, name: "Eczacıbaşı", src: "/images/eczacıbaşı images.jpeg" },
  { id: 10, name: "TM Marketing", src: "/images/tm-marketing.jpeg" },
  { id: 11, name: "Google", src: "/images/google.png" },
  { id: 12, name: "Facebook", src: "/images/facebook.png" },
  { id: 13, name: "Instagram", src: "/images/instagram.png" },
  { id: 14, name: "TikTok", src: "/images/tiktok.webp" },
];

const marqueeItems = [...companies, ...companies];

export default function ExperiencesMarquee({
  hideHeader = false,
  hideButton = false,
}: {
  hideHeader?: boolean;
  hideButton?: boolean;
} = {}) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-24 border-y border-gray-100 flex flex-col items-center gap-12">
      {!hideHeader && (
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
            {isEn ? "Experiences" : "Deneyimler"}
          </h2>
        </div>
      )}

      <div className="relative w-full max-w-7xl mx-auto flex items-center group overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {marqueeItems.map((company, i) => (
            <div
              key={`${company.id}-${i}`}
              className="flex-shrink-0 mx-4 md:mx-6 flex items-center justify-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm w-40 h-24 md:w-48 md:h-32 transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 cursor-pointer hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={company.src}
                  alt={`${company.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {!hideButton && (
        <div className="pt-4">
          <a
            href={isEn ? "/en/experiences" : "/experiences"}
            className="px-8 py-4 rounded-full bg-[#0a246b] text-white font-medium hover:bg-[#0a246b]/90 transition-all inline-flex items-center gap-2"
          >
            {isEn ? "View All Experiences" : "Tüm Deneyimler"}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
}
