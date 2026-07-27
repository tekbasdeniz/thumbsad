import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { getLocalizedPostsQuery } from '@/sanity/lib/queries';
import BlogCard from '@/components/sections/BlogCard';

export const metadata: Metadata = {
    title: 'News | ThumbsAd',
    description: 'The latest news, trends, and strategic updates on AI, enterprise growth, and digital marketing.',
};

export const revalidate = 60;

export default async function NewsPageEn() {
    let posts: any[] = [];
    try {
        const fetched = await client.fetch(getLocalizedPostsQuery, { lang: 'en' });
        posts = Array.isArray(fetched) ? fetched : [];
    } catch (error) {
        console.error('Sanity fetch error in NewsPageEn:', error);
        posts = [];
    }

    return (
        <main className="w-full bg-white">
            <section className="w-full pt-32 pb-16 px-6 md:px-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                        News
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
                        Latest updates and news on how AI is shaping the future, technical analyses, and actionable tactics for scalable growth.
                    </p>
                </div>
            </section>

            <section className="w-full py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {posts && posts.length > 0 ? (
                        <div className="max-w-4xl mx-auto flex flex-col gap-6">
                            {posts.map((post: any, index: number) => (
                                <BlogCard key={post?._id || post?.slug || index} post={post} lang="en" />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-gray-500">
                            No published news found yet.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

