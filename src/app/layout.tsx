import './globals.css';

export const metadata = {
    title: 'Новостной сайт',
    description: 'Простой новостной сайт',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body className="min-h-screen bg-dark-bg p-4">{children}</body>
        {/*<body className="min-h-screen bg-black-50 p-4">{children}</body>*/}
        </html>
    );
}