import Link from 'next/link';

export default function BackButton() {
    return (
        <Link href="/news" className="text-blue-500 hover:underline">
            Назад
        </Link>
    );
}