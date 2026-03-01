"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "10만+", label: "매년 유기되는 동물 수", sub: "(대한민국 기준)" },
    { value: "10일", label: "일시보호 최소 기간", sub: "이후 폐기 위기" },
    { value: "32%", label: "안락사 비율", sub: "비좁은 보호소 현실" },
    { value: "26%", label: "입양 성공 비율", sub: "남겨진 74%의 아이들" }
];

export default function StatsBar() {
    return (
        <section className="bg-black py-20 border-y border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-lg font-medium text-white mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-white/40 uppercase tracking-tighter">
                                {stat.sub}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
