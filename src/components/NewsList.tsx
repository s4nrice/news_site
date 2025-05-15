import NewsCard from './NewsCard';
import { News } from '@/lib/types';

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    return (
        <div className="grid grid-cols-1 gap-4">
            {news.map((item) => (
                <NewsCard key={item.id} news={item} />
            ))}
        </div>
    );
}