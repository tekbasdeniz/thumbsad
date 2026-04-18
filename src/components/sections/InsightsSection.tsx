"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { posts } from "@/content/posts";
import BlogCard from "./BlogCard";

export default function InsightsSection() {
    const pathname = usePathname() || "";
    const isEn = pathname.startsWith("/en");

    const latestPosts = posts.slice(0, 3);

    return (
        <section className="w-full py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="flex flex-col gap-12">
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
                                {isEn ? "Insights" : "İçgörüler"}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
                                {isEn
                                    ? "Latest thoughts on AI, enterprise growth, and digital expansion."
                                    : "Yapay zeka, kurumsal büyüme ve dijital genişleme üzerine son düşünceler."
                                }
                            </p>
                        </div>
                        <div>
                            <Link
                                href={isEn ? "/en/insights" : "/insights"}
                                className="px-8 py-3 rounded-full bg-white border-2 border-[#0a246b] text-[#0a246b] font-semibold transition-transform inline-flex items-center gap-2 group hover:shadow-md hover:-translate-y-1"
                            >
                                {isEn ? "View All Posts" : "Tüm Yazılar"}
                                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} isEn={isEn} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
