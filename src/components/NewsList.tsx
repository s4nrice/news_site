import NewsCard from './NewsCard';
import { News } from '@/lib/types';

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    return (
        <div className="flex flex-col gap-4">
            {news.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}
        </div>
    );
}