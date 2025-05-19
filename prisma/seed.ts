import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.news.deleteMany();

    const fakeNews = [
        {
            title: 'Новое открытие в космосе',
            content: 'Ученые обнаружили новую экзопланету в созвездии Лебедя.',
            date: new Date('2025-05-10'),
            image: 'https://cs14.pikabu.ru/post_img/2023/11/17/11/1700245121199190947.jpg',
        },
        {
            title: 'Технологический прорыв',
            content: 'Компания представила новый процессор с рекордной производительностью.',
            date: new Date('2025-05-09'),
            image: 'https://cs14.pikabu.ru/post_img/2023/11/17/11/1700245121199190947.jpg',
        },
        {
            title: 'Экологическая инициатива',
            content: 'Запущена программа по очистке океанов от пластика.',
            date: new Date('2025-05-08'),
            image: 'https://cs14.pikabu.ru/post_img/2023/11/17/11/1700245121199190947.jpg',
        },
    ];

    for (const news of fakeNews) {
        await prisma.news.create({ data: news });
    }

    console.log('В базу данных добавлены 3 тестовые записи');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });