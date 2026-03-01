"use client";

import { motion } from "framer-motion";

const countries = [
    { name: "South Korea", emoji: "🇰🇷", stats: "매년 10만 마리 유기", color: "bg-blue-900" },
    { name: "Japan", emoji: "🇯🇵", stats: "연간 2만 마리 안락사", color: "bg-red-900" },
    { name: "Romania", emoji: "🇷🇴", stats: "거리 유기견 60만 마리 예상", color: "bg-yellow-900" },
    { name: "USA", emoji: "🇺🇸", stats: "매년 650만 마리 쉘터 입소", color: "bg-slate-800" },
    { name: "India", emoji: "🇮🇳", stats: "3,500만 마리의 방치 동물", color: "bg-orange-900" },
    { name: "Brazil", emoji: "🇧🇷", stats: "3,000만 마리 이상의 유기 동물", color: "bg-green-900" },
    { name: "Mexico", emoji: "🇲🇽", stats: "유효 기간 내 입양률 10% 미만", color: "bg-emerald-900" },
    { name: "Turkey", emoji: "🇹🇷", stats: "길거리 동물 보호 제도 운영 중", color: "bg-red-800" },
];

export default function WorldShelters() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">World <span className="text-primary not-italic">Shelters</span></h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        유기동물 문제는 국경이 없습니다. 전 세계에서 가장 도움이 절실한 곳의 쉘터들과 협력합니다.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {countries.map((country, index) => (
                        <motion.div
                            key={country.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`group relative p-8 rounded-3xl ${country.color}/20 border border-white/5 hover:border-white/20 transition-all cursor-pointer overflow-hidden`}
                        >
                            <div className="relative z-10">
                                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 origin-left">
                                    {country.emoji}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                                <p className="text-xs text-white/40 leading-relaxed group-hover:text-white/70 transition-colors">
                                    {country.stats}
                                </p>

                                <div className="mt-6 flex items-center text-[10px] font-bold tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                    View Shelters →
                                </div>
                            </div>

                            {/* Background Glow */}
                            <div className={`absolute -right-10 -bottom-10 w-32 h-32 ${country.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
