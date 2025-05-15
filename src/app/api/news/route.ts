import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    const { title, content, image, date } = await request.json();

    await prisma.news.create({
        data: {
            title,
            content,
            image,
            date: new Date(date),
        },
    });

    return NextResponse.json({ message: 'News created' });
}