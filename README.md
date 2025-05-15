# Новостной сайт

Простой новостной сайт на Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL и Docker.

## Установка

1. Скопируйте `.env.example` в `.env` и настройте `DATABASE_URL`.
2. Установите зависимости:
   ```bash
   npm install
   ```
3. Запустите Docker Compose:
   ```bash
   docker-compose up -d
   ```
4. Выполните миграции Prisma:
   ```bash
   npm run prisma:migrate
   ```
5. Заполните базу данных тестовыми данными:
   ```bash
   npm run prisma:seed
   ```
6. Запустите приложение:
   ```bash
   npm run dev
   ```

## Использование

- Перейдите на `http://localhost:3000/news` для просмотра списка новостей и добавления новых.
- Кликните на новость для просмотра деталей.
- Используйте кнопку "Назад" для возврата к списку.