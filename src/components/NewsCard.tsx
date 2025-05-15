import Link from 'next/link';
import { News } from '@/lib/types';

type Props = {
  news: News;
};

export default function NewsCard({ news }: Props) {
  return (
    <Link href={`/news/${news.id}`} className="block border rounded-lg p-4 hover:bg-gray-100">
      <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-md mb-2" />
      <h2 className="text-lg font-semibold">{news.title}</h2>
      <p className="text-sm text-gray-500">{new Date(news.date).toLocaleDateString()}</p>
    </Link>
  );
}