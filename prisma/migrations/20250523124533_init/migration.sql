-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://cs14.pikabu.ru/post_img/2023/11/17/11/1700245121199190947.jpg',

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
