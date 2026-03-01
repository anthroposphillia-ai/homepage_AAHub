"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "blur-nav py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    AA<span className="text-primary">Hub</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/adopt" className="hover:text-primary transition-colors text-sm">입양하기</Link>
                    <Link href="/shelter" className="hover:text-primary transition-colors text-sm">쉘터 찾기</Link>
                    <Link href="/channel" className="hover:text-primary transition-colors text-sm">영상 채널</Link>
                    <Link href="/donate" className="bg-primary hover:bg-primary-dark px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
                        후원하기
                    </Link>
                </div>

                {/* 모바일 햄버거 메뉴 생략 (MVP) */}
            </div>
        </nav>
    );
}
