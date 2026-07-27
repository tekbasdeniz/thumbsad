import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { getLocalizedPostsQuery } from '@/sanity/lib/queries';
import BlogCard from '@/components/sections/BlogCard';

export const metadata: Metadata = {
    title: 'Haberler | ThumbsAd',
    description: 'Yapay zeka, kurumsal büyüme ve dijital pazarlama alanındaki son haberler, trendler ve gelişmeler.',
};

export const revalidate = 60;

export default async function NewsPageTr() {
    let posts: any[] = [];
    try {
        const fetched = await client.fetch(getLocalizedPostsQuery, { lang: 'tr' });
        posts = Array.isArray(fetched) ? fetched : [];
    } catch (error) {
        console.error('Sanity fetch error in NewsPageTr:', error);
        posts = [];
    }

    return (
        <main className="w-full bg-white">
            <section className="w-full pt-32 pb-16 px-6 md:px-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                        Haberler
                    </h1>
                    <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
                        Yapay zekanın geleceği nasıl şekillendirdiğine dair son haberler, güncellemeler ve ölçeklenebilir büyüme için duyurular.
                    </p>
                </div>
            </section>

            <section className="w-full py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {posts && posts.length > 0 ? (
                        <div className="max-w-4xl mx-auto flex flex-col gap-6">
                            {posts.map((post: any, index: number) => (
                                <BlogCard key={post?._id || post?.slug || index} post={post} lang="tr" />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-gray-500">
                            Henüz yayınlanmış bir haber bulunamadı.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

