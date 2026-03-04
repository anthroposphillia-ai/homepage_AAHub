"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const campaigns = [
    {
        id: "urg-001",
        title: "루마니아 불법 번식장 구조 150마리",
        title_en: "150 Dogs Rescued from Romanian Puppy Mill",
        title_jp: "ルーマニアの違法繁殖場から150匹救出",
        tag: "CRITICAL",
        raised: 12500000,
        goal: 30000000,
        d_day: 5,
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&q=80&w=800",
        country: "RO"
    },
    {
        id: "urg-002",
        title: "후쿠시마 지진 피해 동물 긴급 구호",
        title_en: "Emergency Relief for Fukushima Animal Victims",
        title_jp: "福島地震被害動物の緊急救援",
        tag: "URGENT",
        raised: 8500000,
        goal: 10000000,
        d_day: 2,
        image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=800",
        country: "JP"
    },
    {
        id: "urg-003",
        title: "제주도 화재 쉼터 복구 캠페인",
        title_en: "Jeju Island Fire Shelter Recovery",
        title_jp: "済州島火災シェルター復旧キャンペーン",
        tag: "REBUILD",
        raised: 28000000,
        goal: 50000000,
        d_day: 14,
        image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
        country: "KR"
    }
];

export default function CampaignsPage() {
    const { language } = useLanguage();

    // 지역화(i18n) 텍스트 반환 헬퍼
    const getLocalized = (item: Record<string, any>, key: string) => {
        if (language === 'ko') return item[`${key}_ko`] || item[key];
        if (language === 'jp') return item[`${key}_jp`] || item[key];
        return item[`${key}_en`] || item[key];
    };

    return (
        <main className="bg-background-dark min-h-screen pt-24 text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-500 font-bold tracking-widest text-sm">EMERGENCY DASHBOARD</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
                    >
                        GLOBAL <span className="text-primary italic">CAMPAIGNS</span>
                    </motion.h1>
                    <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
                        {language === 'ko' ? "지금 당장 우리의 도움이 필요한 전 세계의 긴급 상황들입니다. 당신의 후원이 기적을 만듭니다." :
                            language === 'jp' ? "今すぐ私たちの助けが必要な世界中の緊急事態です。あなたの支援が奇跡を起こします。" :
                                "These are the most urgent situations globally needing our immediate help. Your support creates miracles."}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {campaigns.map((camp, index) => {
                        const percent = Math.round((camp.raised / camp.goal) * 100);
                        return (
                            <motion.div
                                key={camp.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1a1a12] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all group flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={camp.image}
                                        alt={getLocalized(camp, 'title')}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded tracking-widest">
                                        {camp.tag}
                                    </div>
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-xs font-bold font-mono">
                                        D-{camp.d_day}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="text-xs text-white/40 mb-2 font-bold tracking-widest">{camp.country}</div>
                                        <h3 className="text-2xl font-bold leading-snug mb-6 line-clamp-2">
                                            {getLocalized(camp, 'title')}
                                        </h3>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-primary font-bold text-xl">{percent}%</span>
                                            <span className="text-xs text-white/40">{camp.raised.toLocaleString()} / {camp.goal.toLocaleString()}</span>
                                        </div>
                                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-8">
                                            <div
                                                className="bg-primary h-full rounded-full transition-all duration-1000"
                                                style={{ width: `${percent}%` }}
                                            />
                                        </div>

                                        <Link href="/donate">
                                            <button className="w-full bg-white/5 hover:bg-primary py-4 rounded-xl text-sm font-bold transition-all border border-white/10 hover:border-primary shadow-lg hover:shadow-primary/20">
                                                {language === 'ko' ? "후원하기" : language === 'jp' ? "寄付する" : "Donate Now"}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </main>
    );
}
