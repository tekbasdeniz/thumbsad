import { Metadata } from 'next';
import { posts } from '@/content/posts';
import BlogCard from '@/components/sections/BlogCard';

export const metadata: Metadata = {
    title: 'İçgörüler | ThumbsAd',
    description: 'Yapay zeka, kurumsal büyüme ve dijital pazarlama alanındaki son içgörüler, trendler ve stratejik analizler.',
};

export default function InsightsPageTr() {
    return (
        <main className="w-full bg-white">
            <section className="w-full pt-32 pb-16 px-6 md:px-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                        İçgörüler
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
                        Yapay zekanın geleceği nasıl şekillendirdiğine dair stratejik perspektifler, teknik analizler ve ölçeklenebilir büyüme için uygulayabileceğiniz taktikler.
                    </p>
                </div>
            </section>

            <section className="w-full py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} isEn={false} />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
