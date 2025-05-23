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
        <div className="w-[70%] h-full mx-auto flex flex-row gap-8">
            <div className="w-[45%] h-[50vh] flex flex-col items-center">
                <NewsForm />
            </div>
            <div className="w-[55%]">
                <NewsList news={news} />
            </div>
        </div>
    );
}

export default NewsPage;