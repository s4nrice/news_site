import prisma from '@/lib/prisma';
import BackButton from '@/components/BackButton';
import type { NextPage } from 'next';

type Props = {
    params: Promise<{ id: string }>;
};

const NewsDetailPage: NextPage<Props> = async ({ params }) => {
    const { id } = await params;
    const news = await prisma.news.findUnique({
        where: { id: parseInt(id) },
    });

    if (!news) {
        return <div>Новость не найдена</div>;
    }

    return (
        <div className="max-w-3xl mx-auto">
            <BackButton />
            <img src={news.image} alt={news.title} className="w-full h-64 object-cover rounded-md my-4" />
            <h1 className="text-2xl font-bold">{news.title}</h1>
            <p className="text-gray-500 my-2">{new Date(news.date).toLocaleDateString()}</p>
            <p className="text-gray-700">{news.content}</p>
        </div>
    );
};

export default NewsDetailPage;