"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

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

                <div className="hidden md:flex items-center gap-10">
                    <Link href="/adopt" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.adopt')}</Link>
                    <Link href="/shelter" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.shelters')}</Link>
                    <Link href="/report" className="text-sm font-medium hover:text-primary transition-colors">{t('nav.report')}</Link>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10 text-[10px] font-bold">
                        {(['ko', 'en', 'jp'] as const).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                className={`px-2 py-1 rounded transition-colors ${language === lang ? 'bg-primary text-white' : 'text-white/40 hover:text-white'}`}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <Link href="/donate" className="bg-primary hover:bg-primary-dark px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
                        {t('nav.donate')}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
