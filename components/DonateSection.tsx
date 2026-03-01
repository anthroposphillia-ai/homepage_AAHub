"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Stethoscope, Home, Gavel, Store, Video, Globe } from "lucide-react";

const supportCards = [
    { id: "A-1", tab: "field", icon: <Home size={24} />, title: "보호소 사료 & 생활비", desc: "하루 100원 = 사료 한 끼", min: "월 3,000원", color: "bg-blue-500" },
    { id: "A-2", tab: "field", icon: <Stethoscope size={24} />, title: "긴급 의료비 펀드", desc: "치료비 없으면 안락사가 선택됩니다", min: "월 10,000원", color: "bg-red-500" },
    { id: "A-3", tab: "field", icon: <Heart size={24} />, title: "임시보호 가정 지원", desc: "비용 걱정 없이 임보를 선택할 수 있도록", min: "월 5,000원", color: "bg-pink-500" },
    { id: "B-1", tab: "structural", icon: <Gavel size={24} />, title: "반려동물 등록제 강화", desc: "버려져도 추적할 수 있는 시스템 구축", min: "월 5,000원", color: "bg-purple-500" },
    { id: "B-2", tab: "structural", icon: <Store size={24} />, title: "번식장 & 펫숍 규제", desc: "생산을 줄여야 유기가 줍니다", min: "월 5,000원", color: "bg-emerald-500" },
    { id: "B-3", tab: "structural", icon: <Video size={24} />, title: "전국 쉘터 촬영 지원", desc: "영상이 있어야 사람들이 압니다", min: "월 5,000원", color: "bg-indigo-500" },
    { id: "B-4", tab: "structural", icon: <Globe size={24} />, title: "해외 파트너 쉘터 연대", desc: "이 문제는 국경이 없습니다", min: "월 5,000원", color: "bg-orange-500" },
];

export default function DonateSection() {
    const [activeTab, setActiveTab] = useState("field");

    return (
        <section id="donate" className="py-24 bg-black border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">
                        <span className="text-primary not-italic">Support</span> Program
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed font-light">
                        어떤 변화를 만들고 싶으신가요? <br />
                        당신의 후원은 선택한 목적에 따라 투명하게 집행됩니다.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 p-1 rounded-2xl flex">
                        <button
                            onClick={() => setActiveTab("field")}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "field" ? "bg-white text-black" : "text-white/40 hover:text-white"}`}
                        >
                            현장 지원
                        </button>
                        <button
                            onClick={() => setActiveTab("structural")}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === "structural" ? "bg-white text-black" : "text-white/40 hover:text-white"}`}
                        >
                            구조적 변화
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {supportCards.filter(card => card.tab === activeTab).map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#111109] border border-white/5 p-8 rounded-3xl hover:border-primary/30 transition-all group flex flex-col"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${card.color}/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                            <p className="text-sm text-white/40 mb-8 flex-grow leading-relaxed">{card.desc}</p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-sm font-bold text-white/80">{card.min}</span>
                                <button className="text-xs font-bold bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                                    후원하기
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Note */}
                <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                    <p className="text-sm text-white/40">
                        결제는 <span className="text-white font-bold">토스페이먼츠</span>를 통해 안전하게 처리됩니다.
                        후원 내역은 <strong>/report</strong> 페이지에서 실시간으로 확인하실 수 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
