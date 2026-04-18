import { Metadata } from 'next';
import { posts } from '@/content/posts';
import BlogCard from '@/components/sections/BlogCard';

export const metadata: Metadata = {
    title: 'Insights | ThumbsAd',
    description: 'The latest insights, trends, and strategic perspectives on AI, enterprise growth, and digital marketing.',
};

export default function InsightsPageEn() {
    return (
        <main className="w-full bg-white">
            <section className="w-full pt-32 pb-16 px-6 md:px-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                        Insights
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
                        Strategic perspectives on how AI is shaping the future, technical analyses, and actionable tactics for scalable growth.
                    </p>
                </div>
            </section>

            <section className="w-full py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} isEn={true} />
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
