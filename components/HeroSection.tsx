"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* 배경 이미지 */}
            <motion.div
                animate={{ scale: [1, 1.05] }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/aahub_hero_dog_eye_1772345317072.png"
                    alt="Abandoned Dog Eyes"
                    className="w-full h-full object-cover grayscale-[0.3]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1
                        className="text-6xl md:text-8xl font-bold font-serif leading-tight mb-8 tracking-tighter"
                        dangerouslySetInnerHTML={{ __html: t('hero.title') }}
                    />
                    <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light">
                        {t('hero.subtitle')}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/adopt" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-soft text-lg font-bold transition-all shadow-2xl shadow-primary/20">
                            {t('hero.cta')}
                        </Link>
                        <Link href="/report" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-soft text-lg font-bold transition-all border border-white/10">
                            {t('common.more')}
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 font-bold">Scroll to discover</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"
                />
            </div>
        </section>
    );
}
