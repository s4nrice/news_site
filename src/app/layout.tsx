import './globals.css';
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
    title: 'Новостной сайт',
    description: 'Простой новостной сайт',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body className="min-h-screen bg-gray-800">
            <Link href="/">
                <Header />
            </Link>
            <div className="mt-4">
                {children}
            </div>
        </body>
        </html>
    );
}