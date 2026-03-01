"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 배경 이미지: 나중에 동영상으로 교체 가능 */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/hero-dog.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            <div className="container relative z-20 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold mb-6 tracking-tight font-serif"
                >
                    이 눈은 아직 <br /> <span className="text-primary italic">거기 있습니다</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
                >
                    일시보호 기간, 오늘도 흐릅니다. <br />
                    당신의 작은 관심이 누군가에게는 유일한 내일이 됩니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Link href="/adopt" className="w-full md:w-auto bg-primary hover:bg-primary-dark px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105">
                        지금 입양하기
                    </Link>
                    <button className="w-full md:w-auto border border-white/30 hover:bg-white/10 px-10 py-4 rounded-full text-lg font-medium transition-all backdrop-blur-sm">
                        후원으로 살리기
                    </button>
                </motion.div>
            </div>

            {/* 스크롤 유도 */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
                >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
