"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

export interface CapabilityCardItem {
    id: string;
    title: string;
    description: string;
    subServices: string[];
    icon: React.ReactNode;
}

export interface CapabilitiesProps {
    lang?: "tr" | "en";
    isHome?: boolean;
}

export const CAPABILITIES_LIST_TR: CapabilityCardItem[] = [
    {
        id: "growth-consulting",
        title: "AI Growth Danışmanlığı",
        description: "Kurumların yapay zekâ ve büyüme stratejilerini oluşturuyoruz.",
        subServices: [
            "Yapay Zeka Stratejisi",
            "Büyüme Stratejisi",
            "Yapay Zeka Denetimi",
            "Üst Düzey Yönetici Danışmanlığı"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        id: "ai-transformation",
        title: "AI Dönüşümü",
        description: "Kurumsal süreçleri yapay zekâ ile dönüştürüyoruz.",
        subServices: [
            "Yapay Zeka Ajanları",
            "Otomasyon",
            "CRM Entegrasyonu",
            "Yapay Zeka Sistemleri",
            "Veri Çözümleri"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.157.147l-1.39.695a1 1 0 00-.453.94l.27 2.163a2 2 0 00.9 1.488l1.39.927a6 6 0 003.328.995h6.656a6 6 0 003.328-.995l1.39-.927a2 2 0 00.9-1.488l.27-2.163a1 1 0 00-.453-.94l-1.39-.695z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v6m0 0l-2-2m2 2l2-2" />
            </svg>
        )
    },
    {
        id: "growth-operations",
        title: "AI Growth Operasyonları",
        description: "Pazarlama ve büyüme operasyonlarını yönetiyoruz.",
        subServices: [
            "Performans Pazarlaması",
            "Google Reklamları",
            "Meta Reklamları",
            "SEO",
            "Analitik ve Raporlama",
            "Dönüşüm Oranı Optimizasyonu"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        id: "creative-studio",
        title: "AI Kreatif Stüdyo",
        description: "Yapay zekâ destekli kreatif üretim.",
        subServices: [
            "Yapay Zeka Video Üretimi",
            "Yapay Zeka Görsel Tasarım",
            "Yapay Zeka İçerik Üretimi",
            "Sanal Gerçeklik (VR)",
            "Oyunlaştırma"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: "education-innovation",
        title: "Eğitim & İnovasyon",
        description: "Kurumsal gelişim ve inovasyon programları.",
        subServices: [
            "Yönetici Eğitimleri",
            "Atölye Çalışmaları",
            "Üniversite Programları",
            "Konuşmacılık ve Konferanslar",
            "Topluluk ve Ekosistem"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        )
    }
];

export const CAPABILITIES_LIST_EN: CapabilityCardItem[] = [
    {
        id: "growth-consulting",
        title: "AI Growth Consulting",
        description: "We shape enterprise artificial intelligence and scalable growth strategies.",
        subServices: [
            "AI Strategy",
            "Growth Strategy",
            "AI Audit",
            "Executive Advisory"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        id: "ai-transformation",
        title: "AI Transformation",
        description: "We transform enterprise workflows and processes with artificial intelligence.",
        subServices: [
            "AI Agents",
            "Automation",
            "CRM Integration",
            "AI Systems",
            "Data Solutions"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.157.147l-1.39.695a1 1 0 00-.453.94l.27 2.163a2 2 0 00.9 1.488l1.39.927a6 6 0 003.328.995h6.656a6 6 0 003.328-.995l1.39-.927a2 2 0 00.9-1.488l.27-2.163a1 1 0 00-.453-.94l-1.39-.695z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v6m0 0l-2-2m2 2l2-2" />
            </svg>
        )
    },
    {
        id: "growth-operations",
        title: "AI Growth Operations",
        description: "We manage and scale marketing and end-to-end growth operations.",
        subServices: [
            "Performance Marketing",
            "Google Ads",
            "Meta Ads",
            "SEO",
            "Analytics",
            "CRO"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    },
    {
        id: "creative-studio",
        title: "AI Creative Studio",
        description: "AI-powered next-generation creative and multimedia production.",
        subServices: [
            "AI Video",
            "AI Visual",
            "AI Content",
            "VR",
            "Gamification"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: "education-innovation",
        title: "Education & Innovation",
        description: "Comprehensive enterprise enablement, training, and innovation programs.",
        subServices: [
            "Executive Training",
            "Workshops",
            "University Programs",
            "Speaking",
            "Community"
        ],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
        )
    }
];

const Capabilities = ({ lang, isHome = false }: CapabilitiesProps) => {
    const pathname = usePathname() || "";
    const activeLang = lang || (pathname.startsWith("/en") ? "en" : "tr");
    const isEn = activeLang === "en";

    const title = isEn ? "Capabilities" : "Uzmanlıklarımız";
    const subtitle = isEn
        ? "We design and implement advanced AI-powered digital and hybrid capabilities."
        : "Yapay zeka destekli dijital ve hibrit yetenekler tasarlıyor ve uyguluyoruz.";

    const subServicesHeader = isEn ? "Capabilities Include" : "Hizmet Kapsamı";
    const items = isEn ? CAPABILITIES_LIST_EN : CAPABILITIES_LIST_TR;
    const displayItems = isHome ? items.slice(0, 3) : items;

    return (
        <section id="capabilities" className={`w-full ${isHome ? 'py-16 md:py-24 border-t border-gray-100' : 'pt-2 pb-12 md:pt-4 md:pb-16'} bg-white`}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col gap-10 md:gap-16">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                                {title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light mx-auto max-w-2xl">
                                {subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid: 3 cards on homepage, all 5 on detail page */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {displayItems.map((card, index) => (
                            <div
                                key={card.id}
                                className={`group p-7 md:p-8 bg-white rounded-3xl border border-gray-100 
                                           flex flex-col justify-between text-left
                                           transition-all duration-500 ease-in-out
                                           hover:bg-white hover:shadow-[0_20px_50px_rgba(10,36,107,0.12)] 
                                           hover:-translate-y-2 hover:border-[#0a246b]/20
                                           cursor-default h-full min-h-[320px] ${
                                             index === 3 ? "lg:col-start-1" : ""
                                           }`}
                            >
                                <div>
                                    {/* Icon & Title */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#f8fbff] border border-[#dbe6f7] text-[#0a246b] flex items-center justify-center group-hover:bg-[#0a246b] group-hover:text-white transition-all duration-300 shadow-xs flex-shrink-0">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#0a246b] transition-colors">
                                            {card.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mb-6">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Sub-services (Capabilities Include) */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="block text-xs font-bold uppercase tracking-wider text-[#0a246b] mb-3">
                                        {subServicesHeader}
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {card.subServices.map((sub, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 text-gray-700 text-xs sm:text-sm font-medium border border-slate-100 group-hover:bg-[#f0f5ff] group-hover:text-[#0a246b] group-hover:border-[#dbe6f7] transition-all duration-300"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#0a246b]"></span>
                                                {sub}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Link for Home Page */}
                    {isHome && (
                        <div className="flex justify-center mt-8">
                            <Link
                                href={isEn ? "/en/capabilities" : "/capabilities"}
                                className="px-8 py-4 rounded-full bg-[#0a246b] text-white font-semibold transition-transform inline-flex items-center gap-3 text-lg hover:shadow-lg hover:-translate-y-1 group"
                            >
                                {isEn ? "All Capabilities" : "Tüm Uzmanlıklarımız"}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
