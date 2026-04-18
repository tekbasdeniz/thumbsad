"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost, BlogPostContent } from "@/content/posts";

interface BlogCardProps {
    post: BlogPost;
    isEn: boolean;
}

export default function BlogCard({ post, isEn }: BlogCardProps) {
    const content: BlogPostContent = isEn ? post.en : post.tr;
    const href = isEn ? `/en/insights/${post.slug}` : `/insights/${post.slug}`;

    return (
        <Link 
            href={href} 
            className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(10,36,107,0.15)] transition-all duration-300 hover:-translate-y-2 h-full"
        >
            <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gray-100">
                <Image 
                    src={post.image} 
                    alt={content.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-[#0a246b] uppercase tracking-wider mb-4">
                    <span>{content.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-gray-500 font-medium">{content.readingTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0a246b] transition-colors leading-tight">
                    {content.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                    {content.description}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-sm text-gray-400 font-medium">{content.date}</span>
                    <span className="text-[#0a246b] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                        {isEn ? "Read more" : "Devamını oku"} 
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
