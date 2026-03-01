"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const useOfFunds = [
    { category: "의료비 지원", percentage: 45, color: "bg-primary", amount: "₩45,200,000" },
    { category: "쉘터 운영 및 시설 개선", percentage: 30, color: "bg-blue-500", amount: "₩30,120,000" },
    { category: "사료 및 물품 지원", percentage: 15, color: "bg-green-500", amount: "₩15,060,000" },
    { category: "캠페인 및 홍보", percentage: 10, color: "bg-yellow-500", amount: "₩10,040,000" },
];

const recentActivities = [
    { id: 1, date: "2024-02-28", description: "강릉 보호소 중성화 수술 20마리 지원", amount: "- ₩2,000,000" },
    { id: 2, date: "2024-02-25", description: "유튜브 채널 2월 클릭베이트 수익 기부", amount: "+ ₩5,400,000" },
    { id: 3, date: "2024-02-20", description: "노견 '보리' 수술 및 입원비 결제", amount: "- ₩1,200,000" },
    { id: 4, date: "2024-02-15", description: "경기 북부 유기동물 보호소 사료 500kg 전달", amount: "- ₩3,500,000" },
];

export default function ReportPage() {
    return (
        <main className="bg-background-dark min-h-screen pt-24 text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">투명성 <span className="text-primary italic">리포트</span></h1>
                    <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
                        나의 클릭과 후원이 어디에 쓰였는지 매 순간 투명하게 공개합니다.
                        AAHub는 신뢰를 바탕으로 생명을 살립니다.
                    </p>
                </motion.div>

                {/* 요약 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <p className="text-white/40 text-sm mb-2 uppercase font-bold tracking-widest">Total Collected</p>
                        <h2 className="text-4xl font-bold text-primary">₩100,420,000</h2>
                        <p className="text-xs text-white/20 mt-4">2024.01.01 ~ 현재 기준</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <p className="text-white/40 text-sm mb-2 uppercase font-bold tracking-widest">Lives Saved</p>
                        <h2 className="text-4xl font-bold">1,248</h2>
                        <p className="text-xs text-white/20 mt-4">입양 및 치료 지원 대상 포함</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                        <p className="text-white/40 text-sm mb-2 uppercase font-bold tracking-widest">Transparency Score</p>
                        <h2 className="text-4xl font-bold text-green-500">100%</h2>
                        <p className="text-xs text-white/20 mt-4">외부 회계 감사 및 영수증 증빙 완료</p>
                    </div>
                </div>

                {/* 자금 집행 차트 (커스텀 시각화) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h3 className="text-2xl font-bold mb-8">후원금 <span className="text-primary">사용 내역</span></h3>
                        <div className="space-y-6">
                            {useOfFunds.map((item, index) => (
                                <motion.div
                                    key={item.category}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-medium">{item.category}</span>
                                        <span className="text-xs text-white/40">{item.amount} ({item.percentage}%)</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.percentage}%` }}
                                            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                            className={`h-full ${item.color}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {/* 원형 차트 형태의 시각적 요소 */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded-full border-2 border-white/5 group hover:border-primary/20 transition-colors">
                            <div className="absolute inset-4 rounded-full border border-primary/10 animate-pulse" />
                            <div className="text-center z-10">
                                <p className="text-xs text-white/40 mb-1">Impact Factor</p>
                                <h4 className="text-5xl font-bold italic tracking-tighter">x4.5</h4>
                                <p className="text-[10px] text-white/20 mt-2">1원당 사회적 가치 창출액</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 최근 활동 로그 */}
                <div className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden mb-20">
                    <div className="p-8 border-b border-white/5">
                        <h3 className="text-xl font-bold">Transaction <span className="text-primary">Log</span></h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[10px] uppercase font-bold tracking-widest text-white/30 bg-white/[0.02]">
                                    <th className="px-8 py-4">Date</th>
                                    <th className="px-8 py-4">Description</th>
                                    <th className="px-8 py-4 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {recentActivities.map((log) => (
                                    <tr key={log.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="px-8 py-6 text-sm text-white/40 group-hover:text-white transition-colors">{log.date}</td>
                                        <td className="px-8 py-6 text-sm group-hover:text-primary transition-colors">{log.description}</td>
                                        <td className={`px-8 py-6 text-sm text-right font-mono ${log.amount.startsWith('+') ? 'text-green-500' : 'text-primary'}`}>
                                            {log.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 text-center bg-white/[0.01]">
                        <button className="text-xs font-bold text-white/30 hover:text-white transition-colors">SEE FULL TRANSACTION HISTORY →</button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
