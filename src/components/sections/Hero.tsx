"use client";

import { usePathname } from "next/navigation";

const Hero = () => {
    const pathname = usePathname() || "";
    const isEn = pathname.startsWith("/en");

    return (
        <section className="w-full flex items-center justify-center bg-white px-6 pt-32 pb-16 md:pt-40 md:pb-24 min-h-[60vh] md:min-h-[70vh]">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-normal md:tracking-tighter text-black md:leading-tight px-2">
                    {isEn
                        ? "AI Growth Systems for Enterprise Scale"
                        : "Kurumsal Ölçek İçin Yapay Zeka Tabanlı Büyüme Sistemleri"
                    }
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light">
                    {isEn
                        ? "We build AI-powered systems that improve performance, increase efficiency, and scale growth."
                        : "Performansı artıran, verimliliği yükselten ve büyümeyi ölçekleyen yapay zeka sistemleri kuruyoruz."
                    }
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full">
                    <a
                        href="https://calendar.app.google/hjAXB9fuz4cwxXfe7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0a246b] text-white font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3 text-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {isEn ? "Build Your AI Growth System" : "Büyüme Sistemini Kur"}
                    </a>

                    <a
                        href="mailto:info@thumbsad.com"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-[#0a246b] text-[#0a246b] font-semibold transition-transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3 text-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        {isEn ? "Request AI Audit" : "AI Denetimi Talep Et"}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;