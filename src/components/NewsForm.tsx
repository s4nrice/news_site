'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('https://cs14.pikabu.ru/post_img/2023/11/17/11/1700245121199190947.jpg');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        await fetch('/api/news', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content, image, date: new Date() }),
        });

        setTitle('');
        setContent('');
        router.refresh();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col gap-4 border-blue-300 rounded-xl p-4 bg-blue-100">
            <h2 className="text-lg font-semibold">Добавить новость</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Заголовок"
                className="border rounded p-2"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Содержание"
                className="flex-1 border rounded p-2"
                required
            />
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="URL изображения"
                className="border rounded p-2"
                required
            />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
                Добавить
            </button>
        </form>
    );
}