"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const countries = [
    { id: "KR", name: "South Korea", name_ko: "대한민국", name_jp: "韓国", emoji: "🇰🇷", stats: "매년 10만 마리 유기", stats_en: "100k abandoned annually", stats_jp: "年間10万匹遺棄", color: "bg-blue-900" },
    { id: "JP", name: "Japan", name_ko: "일본", name_jp: "日本", emoji: "🇯🇵", stats: "연간 2만 마리 안락사", stats_en: "20k euthanized annually", stats_jp: "年間2万匹殺処分", color: "bg-red-900" },
    { id: "RO", name: "Romania", name_ko: "루마니아", name_jp: "ルーマニア", emoji: "🇷🇴", stats: "거리 유기견 60만 마리 예상", stats_en: "Estimated 600k street dogs", stats_jp: "野犬60万匹と推定", color: "bg-yellow-900" },
    { id: "US", name: "USA", name_ko: "미국", name_jp: "米国", emoji: "🇺🇸", stats: "매년 650만 마리 쉘터 입소", stats_en: "6.5M enter shelters annually", stats_jp: "年間650万匹がシェルターへ", color: "bg-slate-800" },
    { id: "IN", name: "India", name_ko: "인도", name_jp: "インド", emoji: "🇮🇳", stats: "3,500만 마리의 방치 동물", stats_en: "35M neglected animals", stats_jp: "3500万匹の放置動物", color: "bg-orange-900" },
    { id: "BR", name: "Brazil", name_ko: "브라질", name_jp: "ブラジル", emoji: "🇧🇷", stats: "3,000만 마리 이상의 유기 동물", stats_en: "Over 30M abandoned animals", stats_jp: "3000万匹以上の遺棄動物", color: "bg-green-900" },
];

export default function ShelterIndexPage() {
    const { language } = useLanguage();

    // 지역화(i18n) 텍스트 반환 헬퍼 (없으면 기본값)
    const getLocalized = (item: Record<string, any>, key: string) => {
        if (language === 'ko') return item[`${key}_ko`] || item[key];
        if (language === 'jp') return item[`${key}_jp`] || item[key];
        return item[`${key}_en`] || item[key];
    };

    return (
        <main className="bg-background-dark min-h-screen pt-24 text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <header className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
                    >
                        GLOBAL <span className="text-primary italic">SHELTERS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        {language === 'ko' ? "우리의 지원은 국경을 뛰어넘습니다. 전 세계의 보호소 네트워크를 통해 더 많은 생명을 구합니다." :
                            language === 'jp' ? "私たちの支援は国境を越えます。世界中のシェルターネットワークを通じて、より多くの命を救います。" :
                                "Our support transcends borders. We save more lives through our global network of animal shelters."}
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countries.map((country, index) => (
                        <Link key={country.id} href={`/shelter/${country.id.toLowerCase()}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative p-10 rounded-3xl ${country.color}/20 border border-white/5 hover:border-white/30 transition-all cursor-pointer overflow-hidden h-full flex flex-col justify-between`}
                            >
                                <div className="relative z-10">
                                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                                        {country.emoji}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">{getLocalized(country, 'name')}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed font-medium">
                                        {getLocalized(country, 'stats')}
                                    </p>
                                </div>

                                <div className="mt-10 flex items-center justify-between z-10">
                                    <span className="text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-primary transition-colors">
                                        {language === 'ko' ? "보호소 보기" : language === 'jp' ? "シェルターを見る" : "View Shelters"}
                                    </span>
                                    <span className="text-primary text-xl opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                        &rarr;
                                    </span>
                                </div>

                                <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${country.color} blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
