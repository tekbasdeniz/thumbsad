"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const companies = [
  { id: 1, name: "Biblos Alaçatı", src: "/images/biblos-alacati.png" },
  { id: 2, name: "Evidea", src: "/images/evidea.png" },
  { id: 3, name: "Maxi-Cosi", src: "/images/maxi-cosi.png" },
  { id: 4, name: "MTC Game", src: "/images/mtc-game.jpeg" },
  { id: 5, name: "Nobelyum", src: "/images/nobelyum.webp" },
  { id: 6, name: "The Ritz-Carlton", src: "/images/The_Ritz-Carlton_logo.svg" },
  { id: 7, name: "Tchibo", src: "/images/tchibo.png" },
  { id: 8, name: "W Hotels", src: "/images/w-hotels.png" },
  { id: 9, name: "Eczacıbaşı", src: "/images/eczacıbaşı images.jpeg" },
  { id: 10, name: "TM Marketing", src: "/images/tm-marketing.jpeg" },
  { id: 11, name: "Sabancı Üniversitesi", src: "/images/Sabancı_Üniversitesi_logo.svg" },
  { id: 12, name: "Bahçeşehir Üniversitesi", src: "/images/bau-logo-black.svg" },
  { id: 13, name: "Bilgi Üniversitesi", src: "/images/bilgi-universitesi-logo-.png" },
  { id: 14, name: "Biruni Üniversitesi", src: "/images/biruni-universitesi-logo.svg" },
  { id: 15, name: "Nobel Ilac", src: "/images/nobel-ilac.png" },
  { id: 16, name: "Sisecam", src: "/images/Şişecam_logo.svg" },
  { id: 17, name: "Kariyernet", src: "/images/karıyernet.png" },
  { id: 18, name: "Yeni Bir Lider", src: "/images/yeni-bir-lider.png" },
  { id: 19, name: "Tech Istanbul", src: "/images/tech-istanbul_logo-.png" },
  { id: 20, name: "BTM", src: "/images/btm-logo.png", forceMonochrome: true },
  { id: 21, name: "GKTR", src: "/images/gktr-logo-light.svg", forceMonochrome: true },
  { id: 22, name: "Marriott Bonvoy", src: "/images/Marriott_Bonvoy_logo.svg", forceMonochrome: true },
  { id: 23, name: "Boğaziçi Üniversitesi", src: "/images/bogazici-universitesi-logo-.png" },
  { id: 24, name: "Yeditepe Üniversitesi", src: "/images/yeditepe-universitesi-logo.svg" },
  { id: 25, name: "Yıldız Teknik Üniversitesi", src: "/images/yıldız-teknik-universitesi-logo.svg" },
];

const marqueeItems = [...companies, ...companies];

export interface StatItem {
    value: string;
    labelTr: string;
    labelEn: string;
}

export interface IndustryItem {
    id: string;
    titleTr: string;
    titleEn: string;
    icon: React.ReactNode;
}

export const STATISTICS_DATA: StatItem[] = [
    { value: "110+", labelTr: "Hizmet Verilen Marka", labelEn: "Brands Served" },
    { value: "$30M+", labelTr: "Yönetilen Reklam Yatırımı", labelEn: "Advertising Investment Managed" },
    { value: "2,300+", labelTr: "Eğitilen Profesyonel", labelEn: "Professionals Trained" },
    { value: "8+", labelTr: "Üniversite İş Birliği", labelEn: "University Partnerships" },
    { value: "10+", labelTr: "Ekosistem ve Topluluk", labelEn: "Ecosystem Communities" },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
    {
        id: "healthcare",
        titleTr: "Sağlık",
        titleEn: "Healthcare",
        icon: (
            <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        id: "retail",
        titleTr: "Perakende & E-Ticaret",
        titleEn: "Retail & E-Commerce",
        icon: (
            <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        )
    },
    {
        id: "technology",
        titleTr: "Teknoloji",
        titleEn: "Technology",
        icon: (
            <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: "manufacturing",
        titleTr: "Üretim & Sanayi",
        titleEn: "Manufacturing",
        icon: (
            <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
            </svg>
        )
    },
    {
        id: "finance",
        titleTr: "Finans & Bankacılık",
        titleEn: "Finance & Banking",
        icon: (
            <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
        )
    },
    {
        id: "fmcg",
        titleTr: "Hızlı Tüketim Ürünleri (FMCG)",
        titleEn: "FMCG",
        icon: (
            <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        )
    },
    {
        id: "education",
        titleTr: "Eğitim & Akademi",
        titleEn: "Education & Academia",
        icon: (
            <svg className="w-5 h-5 text-[#0a246b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        )
    }
];

export default function ExperiencesMarquee({
  lang,
  hideHeader = false,
  hideButton = false,
}: {
  lang?: "tr" | "en";
  hideHeader?: boolean;
  hideButton?: boolean;
} = {}) {
  const pathname = usePathname() || "";
  const activeLang = lang || (pathname.startsWith("/en") ? "en" : "tr");
  const isEn = activeLang === "en";

  return (
    <section id="experiences" className={`w-full overflow-hidden bg-gray-50 ${hideButton ? 'pt-2 pb-10 md:pt-4 md:pb-16' : 'py-16 md:py-24 border-y border-gray-100'} flex flex-col items-center gap-10 md:gap-14`}>
      
      {/* SECTION HEADER (IF NOT HIDDEN) */}
      {!hideHeader && (
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            {isEn ? "Experiences" : "Deneyimler"}
          </h2>
        </div>
      )}

      {/* LAYER 1: IMPACT HIGHLIGHTS / KEY METRICS */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {STATISTICS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-xs text-center flex flex-col justify-center items-center hover:border-[#0a246b]/20 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a246b] group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-gray-600 mt-2 leading-snug">
                {isEn ? stat.labelEn : stat.labelTr}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LAYER 2: TRUSTED BRANDS / LOGO CAROUSEL */}
      <div className="w-full flex flex-col items-center gap-6">
        <h3 className="text-sm sm:text-base font-bold uppercase tracking-widest text-gray-400 text-center px-6">
          {isEn ? "Trusted by Industry Leaders" : "Sektör Liderlerinin Güvenilir Ortağı"}
        </h3>

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
                    className={company.forceMonochrome ? "brightness-0 contrast-125" : ""}
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LAYER 3: INDUSTRIES WE SERVE (ONLY ON DETAIL PAGE) */}
      {hideButton && (
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8 text-center">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {isEn ? "Industries We Serve" : "Hizmet Verdiğimiz Sektörler"}
            </h3>
            <p className="text-base sm:text-lg text-gray-500 font-light leading-relaxed">
              {isEn
                ? "Delivering targeted AI and growth solutions across diverse enterprise sectors."
                : "Farklı kurumsal sektörlerde hedefe yönelik yapay zekâ ve büyüme çözümleri sunuyoruz."
              }
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 md:gap-4 max-w-5xl">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white border border-gray-200/80 text-gray-800 font-semibold text-sm sm:text-base shadow-xs hover:bg-[#f8fbff] hover:text-[#0a246b] hover:border-[#0a246b]/30 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  {ind.icon}
                </div>
                <span>{isEn ? ind.titleEn : ind.titleTr}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOTTOM BUTTON */}
      {!hideButton && (
        <div className="pt-4">
          <a
            href={isEn ? "/en/experiences" : "/experiences"}
            className="px-8 py-4 rounded-full bg-[#0a246b] text-white font-semibold transition-transform hover:-translate-y-1 inline-flex items-center gap-2 group text-base sm:text-lg"
          >
            {isEn ? "View All Experiences" : "Tüm Deneyimler"}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      )}
    </section>
  );
}
