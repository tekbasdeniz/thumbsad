"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface BlogCardProps {
    post: any;
    isEn?: boolean;
    lang?: "tr" | "en";
}

/**
 * Safely extracts slug string regardless of whether post.slug is string or Sanity slug object ({ current: "..." })
 */
function getSlugString(slugProp: any): string {
    if (!slugProp) return "";
    let str = "";
    if (typeof slugProp === "string") str = slugProp;
    else if (typeof slugProp === "object" && typeof slugProp.current === "string") {
        str = slugProp.current;
    } else {
        str = String(slugProp);
    }
    return str.trim();
}

function getDateParts(publishedAt?: string, createdAt?: string) {
    let d: Date;
    if (publishedAt) {
        d = new Date(publishedAt);
    } else if (createdAt) {
        d = new Date(createdAt);
    } else {
        d = new Date();
    }
    if (isNaN(d.getTime())) {
        d = new Date();
    }
    const year = String(d.getUTCFullYear());
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return { year, month, day };
}

export default function BlogCard({ post, isEn, lang }: BlogCardProps) {
    if (!post) return null;

    // Active language determination
    const isEnglish = lang ? lang === "en" : Boolean(isEn);

    // Dynamic slug & href construction (/news or /en/news)
    const slug = getSlugString(post?.slug);
    const { year, month, day } = getDateParts(post?.publishedAt, post?._createdAt);
    const href = isEnglish 
        ? `/en/news/${year}/${month}/${day}/${slug}` 
        : `/news/${year}/${month}/${day}/${slug}`;

    // Language-aware fields (title, excerpt, category)
    const title = post?.title || (isEnglish ? post?.en?.title : post?.tr?.title) || (isEnglish ? "Untitled" : "Başlıksız");
    const excerpt = isEnglish 
        ? (post?.excerpt_en || post?.excerpt || post?.en?.description || "")
        : (post?.excerpt_tr || post?.excerpt || post?.tr?.description || "");
    const category = isEnglish
        ? (post?.category_en || post?.category || "News")
        : (post?.category_tr || post?.category || "Haberler");
    
    // Image resolution
    let imageUrl = "/placeholder.jpg";
    if (post?.mainImage?.asset) {
        try {
            imageUrl = urlFor(post.mainImage).url();
        } catch {
            imageUrl = "/placeholder.jpg";
        }
    } else if (typeof post?.image === "string") {
        imageUrl = post.image;
    }

    // Reading time
    const rawReadingTime = post?.readingTime || (isEnglish ? post?.en?.readingTime : post?.tr?.readingTime);
    const readingTime = rawReadingTime 
        ? typeof rawReadingTime === "number" 
            ? `${rawReadingTime} ${isEnglish ? "min" : "dk"}` 
            : String(rawReadingTime)
        : null;

    // Date formatting
    let formattedDate = "";
    if (post?.publishedAt) {
        try {
            const dateObj = new Date(post.publishedAt);
            if (!isNaN(dateObj.getTime())) {
                formattedDate = dateObj.toLocaleDateString(isEnglish ? "en-US" : "tr-TR", {
                    day: "numeric",
                    month: "short",
                    year: "numeric"
                });
            }
        } catch {
            formattedDate = "";
        }
    } else if (post?.tr?.date || post?.en?.date) {
        formattedDate = isEnglish ? post?.en?.date || "" : post?.tr?.date || "";
    }

    // Combine date & reading time
    const metaParts = [];
    if (formattedDate) metaParts.push(formattedDate);
    if (readingTime) metaParts.push(readingTime);
    const metaString = metaParts.join(" • ");

    return (
        <Link 
            href={href} 
            className="group flex flex-col md:flex-row gap-6 items-center p-4 md:p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 w-full"
        >
            {/* Sol tarafta kapak görseli */}
            <div className="relative md:w-1/3 w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Sağ tarafta dikey olarak hizalanmış içerik alanı: başlık, yayınlanma tarihi/süresi, dilli özet */}
            <div className="md:w-2/3 w-full flex flex-col justify-center">
                {/* 1. Başlık (h3) */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#0a246b] transition-colors leading-tight">
                    {title}
                </h3>

                {/* 2. Yayınlanma tarihi / süresi */}
                {metaString && (
                    <span className="text-xs md:text-sm text-gray-400 font-medium my-2 block">
                        {metaString}
                    </span>
                )}

                {/* 3. Dilli kısa özet metni (excerpt_tr / excerpt_en) */}
                {excerpt && (
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2">
                        {excerpt}
                    </p>
                )}
            </div>
        </Link>
    );
}

