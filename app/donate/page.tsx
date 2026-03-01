"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const donationPrograms = [
    { id: 'medical', title: "긴급 의료 지원", description: "부상당하거나 질병이 있는 아이들의 수술 및 치료비를 지원합니다.", icon: "🏥" },
    { id: 'food', title: "사료 및 물품 지원", description: "보호소 아이들이 배불리 먹고 따뜻하게 지낼 수 있도록 돕습니다.", icon: "🍖" },
    { id: 'shelter', title: "환경 개선 사업", description: "노후된 보호소 시설을 수리하여 더 나은 환경을 제공합니다.", icon: "🏠" },
];

export default function DonatePage() {
    const [amount, setAmount] = useState("");
    const [type, setType] = useState<"once" | "regular">("regular");
    const [selectedProgram, setSelectedProgram] = useState("medical");

    const handleDonate = () => {
        alert(`${amount}원 ${type === 'regular' ? '정기' : '일시'} 후원 결제 창을 엽니다. (Toss Payments Sandbox 연동 예정)`);
    };

    return (
        <main className="bg-background-dark min-h-screen pt-24 text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">생명을 살리는 <span className="text-primary italic">후원</span></h1>
                        <p className="text-white/60 text-lg">당신의 후원금은 유기동물의 구조와 치료, 새로운 가족을 만날 때까지의 전 과정에 사용됩니다.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* 왼쪽: 후원 프로그램 선택 */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold mb-8">후원 프로그램 선택</h2>
                            {donationPrograms.map((program) => (
                                <div
                                    key={program.id}
                                    onClick={() => setSelectedProgram(program.id)}
                                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${selectedProgram === program.id ? 'border-primary bg-primary/5' : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-2xl">{program.icon}</span>
                                        <h3 className="font-bold">{program.title}</h3>
                                    </div>
                                    <p className="text-sm text-white/40 leading-relaxed">{program.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* 오른쪽: 결제 폼 */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 h-fit sticky top-32">
                            <div className="flex gap-2 mb-8 p-1 bg-black/20 rounded-xl border border-white/5">
                                <button
                                    onClick={() => setType("regular")}
                                    className={`flex-1 py-3 rounded-lg text-xs font-bold transition-all ${type === 'regular' ? 'bg-primary text-white' : 'text-white/40 hover:text-white'}`}
                                >
                                    정기후원
                                </button>
                                <button
                                    onClick={() => setType("once")}
                                    className={`flex-1 py-3 rounded-lg text-xs font-bold transition-all ${type === 'once' ? 'bg-primary text-white' : 'text-white/40 hover:text-white'}`}
                                >
                                    일시후원
                                </button>
                            </div>

                            <div className="mb-8">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold block mb-4">직접 입력 (원)</label>
                                <input
                                    type="number"
                                    placeholder="금액을 입력해주세요"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-2xl font-bold outline-none focus:border-primary transition-colors text-white"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-10">
                                {["10000", "30000", "50000"].map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setAmount(v)}
                                        className="py-3 rounded-xl bg-white/5 border border-white/10 text-xs hover:bg-white/10 transition-colors"
                                    >
                                        +{parseInt(v).toLocaleString()}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleDonate}
                                disabled={!amount}
                                className="w-full bg-primary hover:bg-primary-dark disabled:bg-white/10 disabled:text-white/20 py-5 rounded-2xl text-xl font-bold transition-all hover:-translate-y-1 shadow-xl shadow-primary/20"
                            >
                                후원하기
                            </button>

                            <p className="text-[10px] text-center text-white/20 mt-6 leading-relaxed">
                                모든 후원금은 기부금 제24조 1항에 의거하여 <br /> 법정 기부금 영수증 발급이 가능합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
