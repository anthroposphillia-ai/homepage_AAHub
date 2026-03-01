import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "AAHub - Abandoned Animal Hub",
    description: "이 눈은 아직 거기 있습니다. 유기동물의 생존을 위한 허브.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={`${inter.variable} ${playfair.variable} bg-background-dark text-white`}>
                {children}
            </body>
        </html>
    );
}
