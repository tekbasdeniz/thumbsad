"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

interface SolutionItem {
    title: string;
    desc: string;
}

interface SolutionsProps {
    isHome?: boolean;
}

const Solutions = ({ isHome = false }: SolutionsProps) => {
    const pathname = usePathname() || "";
    const isEn = pathname.startsWith("/en");

    // İngilizce Liste
    const solutionItemsEn: SolutionItem[] = [
        {
            title: "AI Custom Projects",
            desc: "Tailor-made AI initiatives designed around your KPIs—built to improve efficiency and create competitive advantage."
        },
        {
            title: "AI Visual & Video Production",
            desc: "Scalable AI-assisted creative production for enterprise marketing: visuals, video, and social assets."
        },
        {
            title: "AI Social Media & Performance",
            desc: "Data-driven social + performance systems that improve engagement, conversions, and measurable outcomes."
        },
        {
            title: "AI Sales Efficiency Systems",
            desc: "AI/ML solutions that connect HQ and field operations to increase sales productivity and decision quality."
        },
        {
            title: "AI Reporting Systems",
            desc: "Reporting and analytics systems that turn operational data into KPI dashboards, insights, and action."
        },
        {
            title: "VR Experiences",
            desc: "VR experiences that strengthen brand perception and create memorable hybrid interactions."
        },
        {
            title: "Event VR Projects",
            desc: "Interactive VR projects for fairs, congresses, and events—designed to stand out and engage audiences."
        },
        {
            title: "Gamification",
            desc: "Gamified enterprise experiences that increase engagement, participation, and KPI-aligned performance."
        }
    ];

    // Türkçe Liste
    const solutionItemsTr = [
        {
            title: "Yapay Zeka Özel Projeler",
            desc: "KPI’larınıza göre kurgulanan özel AI projeleri—verimlilik ve rekabet avantajı için tasarlanır."
        },
        {
            title: "AI Görsel ve Video Üretimi",
            desc: "Kurumsal pazarlama için ölçeklenebilir AI kreatif üretimi: marka tutarlılığıyla görsel, video ve sosyal içerikler."
        },
        {
            title: "AI Sosyal Medya ve Performans",
            desc: "Etkileşim, dönüşüm ve ölçülebilir iş çıktıları için veri odaklı sosyal + performans sistemleri."
        },
        {
            title: "AI Satış Verimliliği Sistemleri",
            desc: "Genel müdürlük ve saha operasyonlarını bağlayan AI/ML çözümleriyle satış verimliliğini artırın."
        },
        {
            title: "AI Raporlama Sistemleri",
            desc: "Operasyonel veriyi KPI dashboard’larına, içgörüye ve aksiyona dönüştüren raporlama ve analitik sistemleri."
        },
        {
            title: "VR Deneyimleri",
            desc: "Marka algısını güçlendiren, unutulmaz hibrit etkileşimler üreten VR deneyimleri."
        },
        {
            title: "VR Etkinlik Projeleri",
            desc: "Fuar, kongre ve etkinlikler için fark yaratan, etkileşimli VR projeleri."
        },
        {
            title: "Oyunlaştırma",
            desc: "Etkileşim, katılım ve KPI uyumlu performans için kurumsal oyunlaştırma deneyimleri."
        }
    ];

    // Aktif liste seçimi
    const currentItems: SolutionItem[] = isEn ? solutionItemsEn : solutionItemsTr;
    const displayItems: SolutionItem[] = isHome ? currentItems.slice(0, 4) : currentItems;

    return (
        <section className="w-full py-24 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col gap-16">
                    {/* Üst Kısım: Başlık ve Açıklama */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                                {isEn ? "Solutions" : "Çözümler"}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light mx-auto max-w-2xl">
                                {isEn
                                    ? "We design and implement advanced AI-powered digital and hybrid solutions."
                                    : "Yapay zeka destekli dijital ve hibrit çözümler tasarlıyor ve uyguluyoruz."
                                }
                            </p>
                        </div>
                    </div>

                    {/* Kartlar Grid Alanı */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayItems.map((item, index) => (
                            <div
                                key={index}
                                className="group p-6 md:p-8 bg-white rounded-3xl border border-gray-100 
                                           flex flex-col items-center justify-start text-center
                                           transition-all duration-500 ease-in-out
                                           hover:bg-white hover:shadow-[0_20px_50px_rgba(10,36,107,0.15)] 
                                           hover:-translate-y-2 hover:border-[#0a246b]/20
                                           cursor-default h-full min-h-[240px]"
                            >
                                {/* Başlık Çerçevesi (Ortalanmış) */}
                                <div className="w-full flex justify-center mb-5">
                                    <h3 className="w-full font-bold text-[15px] md:text-lg text-[#0a246b] bg-[#f8fbff] border border-[#dbe6f7] rounded-2xl py-3.5 px-4 text-center group-hover:bg-[#0a246b] group-hover:text-white group-hover:border-[#0a246b] transition-all duration-500 shadow-sm flex items-center justify-center min-h-[72px] leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Açıklama Metni */}
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed group-hover:text-gray-600 transition-colors duration-300 flex-grow text-center">
                                    {item.desc}
                                </p>

                                {/* Kartın altına ince bir çizgi veya dekoratif unsur */}
                                <div className="mt-8 w-0 group-hover:w-full h-[3px] bg-[#0a246b]/20 transition-all duration-500 rounded-full" />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Link for Home Page */}
                    {isHome && (
                        <div className="flex justify-center mt-8">
                            <Link
                                href={isEn ? "/en/solutions" : "/solutions"}
                                className="px-8 py-4 rounded-full bg-[#0a246b] text-white font-semibold transition-transform inline-flex items-center gap-3 text-lg hover:shadow-lg hover:-translate-y-1 group"
                            >
                                {isEn ? "All Solutions" : "Tüm Çözümler"}
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

export default Solutions;