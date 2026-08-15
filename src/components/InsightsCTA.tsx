"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface InsightsCTAProps {
  lang?: "tr" | "en";
}

export default function InsightsCTA({ lang }: InsightsCTAProps) {
  const pathname = usePathname() || "";
  const isEn = lang ? lang === "en" : pathname.startsWith("/en");

  const targetLink = isEn
    ? "/en/insights#topluluga-katil"
    : "/insights#topluluga-katil";

  return (
    <section className="w-full my-12">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a246b] via-[#0d2e85] to-[#0a246b] p-8 md:p-12 text-white shadow-xl shadow-blue-950/20 border border-blue-800/40">
        {/* Subtle decorative glow circles */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-snug">
              {isEn
                ? "Don't miss AI, Marketing, and Growth content."
                : "AI, Marketing ve Growth içeriklerini kaçırmayın."}
            </h3>
            <p className="text-blue-100/90 text-sm md:text-base font-light">
              {isEn
                ? "Join the ThumbsAd Insights community for free."
                : "ThumbsAd Insights topluluğuna ücretsiz katılın."}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href={targetLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0a246b] font-bold text-sm md:text-base shadow-lg hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <span>{isEn ? "Join the Community" : "Topluluğa Katıl"}</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
