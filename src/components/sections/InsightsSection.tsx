"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import BlogCard from "./BlogCard";

interface InsightsSectionProps {
    posts?: any[];
    lang?: "tr" | "en";
}

export default function InsightsSection({ posts: sanityPosts = [], lang }: InsightsSectionProps) {
    const pathname = usePathname() || "";
    const isEn = lang ? lang === "en" : pathname.startsWith("/en");

    const displayPosts = (sanityPosts || []).slice(0, 3);

    return (
        <section className="w-full py-16 md:py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="flex flex-col gap-8 md:gap-12">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                                {isEn ? "News" : "Haberler"}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                                {isEn
                                    ? "Latest news on AI, enterprise growth, and digital expansion."
                                    : "Yapay zeka, kurumsal büyüme ve dijital genişleme üzerine son haberler ve duyurular."
                                }
                            </p>
                        </div>
                        <div>
                            <Link
                                href={isEn ? "/en/news" : "/news"}
                                className="px-8 py-3 rounded-full bg-white border-2 border-[#0a246b] text-[#0a246b] font-semibold transition-transform inline-flex items-center gap-2 group hover:shadow-md hover:-translate-y-1"
                            >
                                {isEn ? "View All News" : "Tüm Haberler"}
                                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
                        {displayPosts.map((post: any) => (
                            <BlogCard key={post._id || post.slug} post={post} lang={isEn ? "en" : "tr"} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
