"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const countries = [
    { id: "KR", name: "South Korea", name_ko: "대한민국", name_jp: "韓国", emoji: "🇰🇷", stats_ko: "매년 10만 마리 유기", stats_en: "100k abandoned annually", stats_jp: "年間10万匹遺棄", color: "bg-blue-900" },
    { id: "JP", name: "Japan", name_ko: "일본", name_jp: "日本", emoji: "🇯🇵", stats_ko: "연간 2만 마리 안락사", stats_en: "20k euthanized annually", stats_jp: "年間2万匹殺処分", color: "bg-red-900" },
    { id: "RO", name: "Romania", name_ko: "루마니아", name_jp: "ルーマニア", emoji: "🇷🇴", stats_ko: "거리 유기견 60만 마리 예상", stats_en: "Estimated 600k street dogs", stats_jp: "野犬60万匹と推定", color: "bg-yellow-900" },
    { id: "US", name: "USA", name_ko: "미국", name_jp: "米国", emoji: "🇺🇸", stats_ko: "매년 650만 마리 쉘터 입소", stats_en: "6.5M enter shelters annually", stats_jp: "年間650万匹がシェルターへ", color: "bg-slate-800" },
    { id: "IN", name: "India", name_ko: "인도", name_jp: "インド", emoji: "🇮🇳", stats_ko: "3,500만 마리의 방치 동물", stats_en: "35M neglected animals", stats_jp: "3500万匹の放置動物", color: "bg-orange-900" },
    { id: "BR", name: "Brazil", name_ko: "브라질", name_jp: "ブラジル", emoji: "🇧🇷", stats_ko: "3,000만 마리 이상의 유기 동물", stats_en: "Over 30M abandoned animals", stats_jp: "3000万匹以上の遺棄動物", color: "bg-green-900" },
    { id: "MX", name: "Mexico", name_ko: "멕시코", name_jp: "メキシコ", emoji: "🇲🇽", stats_ko: "유효 기간 내 입양률 10% 미만", stats_en: "Adoption rate under 10%", stats_jp: "有効期間内の譲渡率10%未満", color: "bg-emerald-900" },
    { id: "TR", name: "Turkey", name_ko: "튀르키예", name_jp: "トルコ", emoji: "🇹🇷", stats_ko: "길거리 동물 보호 제도 운영 중", stats_en: "Operating street animal protection", stats_jp: "野良動物保護制度を運営中", color: "bg-red-800" },
];

export default function WorldShelters() {
    const { t, language } = useLanguage();
    const [counts, setCounts] = useState<Record<string, number>>({});

    useEffect(() => {
        async function fetchCounts() {
            const { data, error } = await supabase.from('shelters').select('country_code');
            if (!error && data) {
                const map: Record<string, number> = {};
                data.forEach((s) => {
                    if (s.country_code) {
                        map[s.country_code] = (map[s.country_code] || 0) + 1;
                    }
                });
                setCounts(map);
            }
        }
        fetchCounts();
    }, []);

    const getLocalized = (item: any, key: string) => {
        if (language === 'ko') return item[`${key}_ko`] || item[key];
        if (language === 'jp') return item[`${key}_jp`] || item[key];
        return item[`${key}_en`] || item[key];
    };

    const getRegisteredText = (id: string) => {
        const count = counts[id] || 0;
        if (language === 'ko') return count > 0 ? `현재 ${count}개의 협력 쉘터` : `협력 쉘터 모집 중`;
        if (language === 'jp') return count > 0 ? `現在${count}個の協力シェルター` : `協力シェルター募集中`;
        return count > 0 ? `${count} partner shelters` : `Recruiting shelters`;
    };

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2
                        className="text-3xl md:text-5xl font-bold mb-6 italic"
                        dangerouslySetInnerHTML={{ __html: t('world.title') }}
                    />
                    <p className="text-white/60 max-w-2xl mx-auto">
                        {t('world.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {countries.map((country, index) => (
                        <Link key={country.id} href={`/shelter/${country.id.toLowerCase()}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`group relative p-8 rounded-3xl ${country.color}/20 border border-white/5 hover:border-white/20 transition-all cursor-pointer overflow-hidden h-full flex flex-col justify-between`}
                            >
                                <div className="relative z-10 flex-1">
                                    <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 origin-left">
                                        {country.emoji}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{getLocalized(country, 'name')}</h3>

                                    <div className="text-xs text-white/40 leading-relaxed group-hover:text-white/70 transition-colors mb-3">
                                        <span className="block mb-2">{getLocalized(country, 'stats')}</span>
                                        <span className="inline-block px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold text-primary">
                                            {getRegisteredText(country.id)}
                                        </span>
                                    </div>
                                </div>

                                <div className="relative z-10 mt-6 flex items-center text-[10px] font-bold tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                    {t('world.viewAll')}
                                </div>

                                <div className={`absolute -right-10 -bottom-10 w-32 h-32 ${country.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
