import { unstable_noStore as noStore } from 'next/cache';
import prisma from '@/lib/prisma';
import NewsForm from '@/components/NewsForm';
import NewsList from '@/components/NewsList';

const NewsPage = async () => {
    noStore();

    const news = await prisma.news.findMany({
        orderBy: { date: 'desc' },
    });

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
                <NewsForm />
            </div>
            <div className="md:col-span-2">
                <NewsList news={news} />
            </div>
        </div>
    );
}

export default NewsPage;