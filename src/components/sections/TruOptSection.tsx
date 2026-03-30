"use client";

import { usePathname } from "next/navigation";

export default function TruOptSection() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  return (
    <section className="w-full relative py-32 overflow-hidden bg-[#051133] text-white border-y border-white/5">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0a246b]/40 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-lg bg-black/50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white drop-shadow-sm">
          TruOpt<span className="text-blue-400">.ai</span>
        </h2>

        <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl leading-relaxed mb-12 font-light">
          {isEn
            ? "AI-powered operational excellence. Meet intelligent solutions designed to optimize your digital growth."
            : "Yapay zeka destekli operasyonel mükemmellik. Dijital büyümenizi optimize etmek için tasarlanan akıllı çözümlerle tanışın."}
        </p>

        <a
          href="https://truopt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-10 py-5 bg-white text-[#051133] font-bold rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1"
        >
          <span className="relative z-10 flex items-center gap-2 text-lg">
            {isEn ? "Explore TruOpt.ai" : "TruOpt.ai'yi İncele"}
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </span>
        </a>
      </div>
    </section>
  );
}
