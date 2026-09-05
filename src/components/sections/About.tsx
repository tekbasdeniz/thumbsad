"use client";

import Link from 'next/link';
import { usePathname } from "next/navigation";

const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#0a246b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

interface AboutProps {
    lang?: "tr" | "en";
}

const About = ({ lang }: AboutProps = {}) => {
    const pathname = usePathname() || "";
    const activeLang = lang || (pathname.startsWith("/en") ? "en" : "tr");
    const isEn = activeLang === "en";

    const pillars = isEn
        ? [
            "AI-first Approach",
            "Strategy + Execution",
            "Agile Delivery",
            "Measurable Growth",
            "Enterprise Mindset",
            "Innovation"
        ]
        : [
            "Yapay Zeka Öncelikli Yaklaşım",
            "Strateji + Uygulama",
            "Çevik Teslimat",
            "Ölçülebilir Büyüme",
            "Kurumsal Vizyon ve Yaklaşım",
            "İnovasyon"
        ];

    return (
        <section id="about" className="w-full py-16 md:py-24 bg-slate-50 border-t border-gray-100 text-gray-900">
            <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">
                
                {/* 2 Kolon Grid - Esnek Yükseklik Eşitleme (items-stretch) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
                    
                    {/* Sol Kolon: From Strategy to Execution */}
                    <div className="lg:col-span-6 flex flex-col text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            {isEn ? "From Strategy to Execution" : "Stratejiden Uygulamaya"}
                        </h2>
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-base sm:text-lg md:text-lg font-normal text-gray-700 leading-relaxed text-center max-w-[460px] mx-auto">
                                {isEn
                                    ? "Artificial intelligence is not just technology. It translates into real business results only through the right strategy, precise execution, and accurate measurement. At ThumbsAd, we provide end-to-end support to institutions throughout this transformation journey."
                                    : "Yapay zekâ yalnızca teknoloji değildir. Doğru strateji, doğru uygulama ve doğru ölçüm ile iş sonuçlarına dönüşür. ThumbsAd olarak kurumlara bu dönüşüm yolculuğunda uçtan uca destek sağlıyoruz."
                                }
                            </p>
                        </div>
                    </div>

                    {/* Sağ Kolon: Why ThumbsAd (6 Madde Orijinal Liste Yapısı) */}
                    <div className="lg:col-span-6 flex flex-col text-center">
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                            {isEn ? "Why ThumbsAd" : "Neden ThumbsAd"}
                        </h3>
                        <div className="flex-1 flex items-center justify-center w-full">
                            <ul className="flex flex-col justify-between text-left max-w-[460px] w-full h-full py-1 space-y-3.5 pl-4 sm:pl-8">
                                {pillars.map((title, idx) => (
                                    <li key={idx} className="flex items-center space-x-3">
                                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100/80 flex items-center justify-center">
                                            <CheckIcon />
                                        </span>
                                        <span className="text-base sm:text-lg md:text-lg font-normal text-gray-700 leading-snug">
                                            {title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Buton: Yazıların altında ve ortada */}
                <div className="flex justify-center items-center w-full pt-4">
                    <Link
                        href={isEn ? "/en/about" : "/about"}
                        className="inline-flex items-center justify-center text-white bg-[#0a246b] hover:bg-[#123999] px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg text-base sm:text-lg group"
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