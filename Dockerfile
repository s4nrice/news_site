# Этап build
FROM node:24 AS builder

WORKDIR /app

# Установка зависимостей
COPY package.json package-lock.json ./
RUN npm ci

# Копируем остальной код
COPY . .

RUN npx prisma generate

# Сборка приложения
RUN npm run build

# Этап production
FROM node:24-alpine AS runner

WORKDIR /app

# Устанавливаем только продакшн-зависимости
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Копируем собранное приложение из builder-стейджа
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma

# Запуск
CMD ["sh", "-c", "npm run prisma:deploy && npm run start"]
