import prisma from '@/lib/prisma';
import type { NextPage } from 'next';
import Link from "next/link";

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
            <Link href="/news" className="text-blue-100 hover:underline rounded-md p-2 bg-blue-900">
                Назад
            </Link>
            <img src={news.image} alt={news.title} className="w-full h-80 object-cover rounded-md my-4" />
            <h1 className="text-gray-100 text-2xl font-bold">{news.title}</h1>
            <p className="text-gray-400 my-2">{new Date(news.date).toLocaleDateString()}</p>
            <p className="text-gray-300 whitespace-pre-wrap">{news.content}</p>
        </div>
    );
};

export default NewsDetailPage;