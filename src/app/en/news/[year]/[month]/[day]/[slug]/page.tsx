import { Metadata } from 'next';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { getLocalizedPostBySlugQuery, getAllPostPathsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import SanityContent from '@/components/SanityContent';

export const revalidate = 60;
export const dynamicParams = true;

interface PageProps {
    params: Promise<{
        year: string;
        month: string;
        day: string;
        slug: string;
    }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    try {
        const posts = await client.fetch(getAllPostPathsQuery);
        if (!Array.isArray(posts)) return [];

        return posts
            .map((post: any) => {
                if (!post) return null;

                const rawDate = post?.publishedAt || post?._createdAt;
                const d = rawDate ? new Date(rawDate) : new Date();
                
                if (isNaN(d.getTime())) return null;

                const year = String(d.getUTCFullYear());
                const month = String(d.getUTCMonth() + 1).padStart(2, '0');
                const day = String(d.getUTCDate()).padStart(2, '0');
                const rawSlug = typeof post?.slug === 'string' ? post.slug : post?.slug?.current || '';
                const slug = typeof rawSlug === 'string' ? rawSlug.trim() : '';

                if (!slug || !year || !month || !day) return null;

                return { year, month, day, slug };
            })
            .filter((item): item is { year: string; month: string; day: string; slug: string } => 
                Boolean(item && item.slug && item.year && item.month && item.day)
            );
    } catch (error) {
        console.error('Error generating static params for news (EN):', error);
        return [];
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const { slug } = await params;
        if (!slug) return { title: 'News Not Found | ThumbsAd' };

        const post = await client.fetch(getLocalizedPostBySlugQuery, { lang: 'en', slug: slug });
        if (!post) {
            return { title: 'News Not Found | ThumbsAd' };
        }
        return {
            title: `${post?.title || 'News'} | ThumbsAd News`,
            description: post?.excerpt_en || post?.excerpt || undefined,
        };
    } catch (error) {
        console.error('Error generating metadata for news detail (EN):', error);
        return { title: 'News | ThumbsAd' };
    }
}

export default async function Page({ params }: PageProps) {
    const { year, month, day, slug } = await params;
    
    let post: any = null;
    try {
        if (slug) {
            post = await client.fetch(getLocalizedPostBySlugQuery, { lang: 'en', slug: slug });
        }
    } catch (error) {
        console.error('Sanity fetch error on news detail page (EN):', error);
        post = null;
    }

    if (!post) {
        return (
            <main className="w-full bg-white py-32 px-6 text-center">
                <div className="max-w-xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-8 text-red-700">
                    <h2 className="text-xl font-bold mb-2">Data not found (EN)</h2>
                    <p className="text-sm">Route: <code className="font-mono bg-red-100 px-2 py-1 rounded">/en/news/{year}/{month}/{day}/{slug}</code></p>
                </div>
            </main>
        );
    }

    // 5 Core Fields (Localized): category_en, title, excerpt_en, author, publishedAt
    const categoryName = post?.category_en || post?.category || post?.categories?.[0]?.title || 'News';
    const title = post?.title || 'Untitled';
    const excerpt = post?.excerpt_en || post?.excerpt || '';
    const authorName = post?.author || 'ThumbsAd';
    
    let formattedDate = `${year}-${month}-${day}`;
    if (post?.publishedAt) {
        try {
            const dateObj = new Date(post.publishedAt);
            if (!isNaN(dateObj.getTime())) {
                formattedDate = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
            }
        } catch {
            formattedDate = `${year}-${month}-${day}`;
        }
    }

    let imageUrl: string | null = null;
    if (post?.mainImage?.asset) {
        try {
            imageUrl = urlFor(post.mainImage).url();
        } catch {
            imageUrl = null;
        }
    }

    return (
        <main className="w-full bg-white">
            <article className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
                {/* 1. English Category name at top (category_en - plain text) */}
                <span className="text-xs md:text-sm font-semibold text-[#0a246b] uppercase tracking-wider block">
                    {categoryName}
                </span>

                {/* 2. Large Title (h1) */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mt-3 mb-4">
                    {title}
                </h1>

                {/* 3. English Excerpt (excerpt_en) */}
                {excerpt ? (
                    <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-6">
                        {excerpt}
                    </p>
                ) : null}

                {/* 4. Author name on left, Date on right */}
                <div className="flex justify-between items-center border-y border-gray-200 py-3 my-6 text-sm text-gray-600 font-medium">
                    <span>{authorName}</span>
                    <span>{formattedDate}</span>
                </div>

                {/* 5. Cover Image */}
                {imageUrl && (
                    <div className="relative w-full aspect-video md:aspect-21/9 rounded-2xl overflow-hidden mb-12 bg-gray-100 shadow-sm">
                        <Image 
                            src={imageUrl} 
                            alt={title} 
                            fill 
                            className="object-cover"
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                    </div>
                )}

                {/* 6. Prose rich text body */}
                <div className="prose dark:prose-invert max-w-none text-gray-800">
                    <SanityContent value={post?.content} />
                </div>
            </article>
        </main>
    );
}

