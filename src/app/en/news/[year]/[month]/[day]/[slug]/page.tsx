import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
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
                const rawDate = post.publishedAt || post._createdAt;
                const date = rawDate ? new Date(rawDate) : new Date();
                if (isNaN(date.getTime())) return null;

                const slug = String(post.slug?.current || post.slug || '').trim();
                const year = String(date.getUTCFullYear());
                const month = String(date.getUTCMonth() + 1).padStart(2, '0');
                const day = String(date.getUTCDate()).padStart(2, '0');

                return { year, month, day, slug };
            })
            .filter((p): p is { year: string; month: string; day: string; slug: string } => 
                Boolean(p && p.slug && p.year && p.month && p.day)
            );
    } catch (error) {
        console.error('Error generating static params for news (EN):', error);
        return [];
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const resolvedParams = await params;
        if (!resolvedParams?.slug || !resolvedParams?.year || !resolvedParams?.month || !resolvedParams?.day) {
            return { title: 'News Not Found | ThumbsAd' };
        }

        const post = await client.fetch(getLocalizedPostBySlugQuery, { lang: 'en', slug: resolvedParams.slug });
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
    const resolvedParams = await params;
    const { year, month, day, slug } = resolvedParams || {};

    if (!slug || !year || !month || !day) {
        notFound();
    }

    let post: any = null;
    try {
        post = await client.fetch(getLocalizedPostBySlugQuery, { lang: 'en', slug: slug });
    } catch (error) {
        console.error('Sanity fetch error on news detail page (EN):', error);
        post = null;
    }

    if (!post) {
        notFound();
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
