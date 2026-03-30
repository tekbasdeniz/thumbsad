"use client";

import { usePathname } from "next/navigation";

const Hero = () => {
    const pathname = usePathname() || "";
    const isEn = pathname.startsWith("/en");

    return (
        <section className="w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-white px-6 pt-32 md:pt-0">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">

                <h1 className="text-[32px] leading-[1.2] md:text-7xl font-bold tracking-normal md:tracking-tighter text-black md:leading-tight px-2">
                    AI Growth Partner
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light">
                    {isEn
                        ? "Designing and executing AI-powered growth projects, digital systems, and scalable marketing structures."
                        : "Yapay zeka destekli büyüme projeleri, dijital sistemler ve ölçeklenebilir pazarlama yapıları tasarlar ve uygular."
                    }
                </p>

                <div className="flex flex-col gap-4 mt-8 w-full max-w-md mx-auto">
                    <a
                        href="https://calendar.app.google/hjAXB9fuz4cwxXfe7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-5 rounded-full bg-[#0a246b] text-white font-semibold hover:bg-[#0a246b]/90 hover:shadow-lg transition-all flex items-center justify-center gap-3 text-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {isEn ? "Request AI Growth Analysis" : "AI Büyüme Analizi Talep Et"}
                    </a>

                    <p className="text-xs text-gray-400 mt-2">
                        {isEn
                            ? "*Book your slot directly on our calendar. You’ll receive an instant confirmation with the meeting link."
                            : "*Doğrudan takvimimizden randevu alın. Toplantı bağlantısını içeren anında bir onay alacaksınız."
                        }
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;