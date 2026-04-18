"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

const About = () => {
    const pathname = usePathname() || "";
    const isEn = pathname.startsWith("/en");

    return (
        <section className="w-full py-28 bg-gray-50 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-20 md:gap-32 items-start">
                    
                    {/* What is ThumbsAd */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                            {isEn ? "What is ThumbsAd" : "ThumbsAd Nedir?"}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                            {isEn
                                ? "ThumbsAd is an AI-powered technology partner helping enterprise brands optimize marketing, improve efficiency, and build scalable growth systems."
                                : "ThumbsAd, kurumsal markaların pazarlama performansını optimize eden, verimliliğini artıran ve ölçeklenebilir büyüme sistemleri kuran yapay zeka partneridir."
                            }
                        </p>
                    </div>

                    {/* Why ThumbsAd (List) */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                            {isEn ? "Why ThumbsAd" : "Neden ThumbsAd"}
                        </h2>
                        <ul className="space-y-4">
                            {[
                                { en: "KPI-driven execution", tr: "KPI Odaklı Yürütme" },
                                { en: "AI-powered decision systems", tr: "Yapay Zeka Odaklı Karar Sistemleri" },
                                { en: "Tailor-made solutions", tr: "İhtiyaca Özel Çözümler" },
                                { en: "Measurable results", tr: "Ölçülebilir Sonuçlar" }
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-4 text-lg md:text-xl font-medium text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#0a246b]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    {isEn ? item.en : item.tr}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Buton - Ortalanmış */}
                <div className="pt-24 mt-8 flex justify-center items-center w-full">
                    <Link
                        href={isEn ? "/en/about" : "/about"}
                        className="inline-flex items-center justify-center text-white bg-[#0a246b] px-8 py-4 rounded-full font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg text-lg group"
                    >
                        {isEn ? "Discover more" : "Daha fazlasını keşfedin"} 
                        <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;