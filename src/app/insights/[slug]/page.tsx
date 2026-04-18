import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/content/posts';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
        return { title: 'Yazı Bulunamadı | ThumbsAd' };
    }
    return {
        title: `${post.tr.title} | ThumbsAd Insights`,
        description: post.tr.description,
    };
}

export default async function BlogDetailPageTr({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const { tr: content } = post;

    const renderText = (text: string | string[] | undefined, className?: string) => {
        if (!text) return null;
        if (Array.isArray(text)) {
            return text.map((paragraph, index) => (
                <p key={index} className={className || "mb-4"}>{paragraph}</p>
            ));
        }
        return <p className={className || "mb-4"}>{text}</p>;
    };

    return (
        <main className="w-full bg-white">
            <article className="w-full max-w-4xl mx-auto px-6 py-24 md:py-32">
                {/* Header (Breadcrumb, Meta, Title) */}
                <div className="space-y-6 mb-10">
                    <Link href="/insights" className="text-[#0a246b] font-semibold text-sm hover:underline inline-flex items-center gap-2">
                        &larr; İçgörülere Dön
                    </Link>
                    <div className="flex items-center gap-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        <span className="text-[#0a246b]">{content.category}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{content.readingTime}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>{content.date}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
                        {content.title}
                    </h1>
                </div>

                {/* Cover Image */}
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-16 bg-gray-100 shadow-sm">
                    <Image 
                        src={post.image} 
                        alt={content.title} 
                        fill 
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                </div>

                {/* Content Body */}
                <div className="prose max-w-none text-gray-700">
                    {/* Introduction */}
                    <div className="text-lg md:text-xl font-light text-gray-600 leading-relaxed mb-10">
                        {renderText(content.intro, "mb-6 last:mb-0")}
                    </div>

                    {/* What is... (GEO SEO Target) */}
                    {content.whatIsTitle && (
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 my-12">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-0 mb-4">
                                {content.whatIsTitle}
                            </h2>
                            <div className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                                {renderText(content.whatIs, "mb-4 last:mb-0")}
                            </div>
                        </div>
                    )}

                    {/* Why it matters */}
                    {content.whyItMattersTitle && (
                        <>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">{content.whyItMattersTitle}</h2>
                            {renderText(content.whyItMatters)}
                        </>
                    )}

                    {/* Applications */}
                    {content.applicationsTitle && (
                        <>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">{content.applicationsTitle}</h2>
                            {renderText(content.applicationsIntro)}
                            <ul className="space-y-6 my-8 list-none pl-0">
                                {content.applications.map((app, index) => (
                                    <li key={index} className="flex gap-4 items-start rounded-xl p-6 bg-white border border-gray-100 shadow-sm">
                                        <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-[#0a246b] flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        <div>
                                            {app.title && <h3 className="text-lg md:text-xl font-bold text-gray-900 m-0 mb-2">{app.title}</h3>}
                                            <div className="text-base md:text-lg text-gray-700 m-0">
                                                {renderText(app.content, "mb-2 last:mb-0")}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            {renderText(content.applicationsOutro)}
                        </>
                    )}

                    {/* Conclusion */}
                    {content.conclusionTitle && (
                        <>
                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">{content.conclusionTitle}</h2>
                            {renderText(content.conclusion)}
                        </>
                    )}
                </div>
            </article>
        </main>
    );
}
