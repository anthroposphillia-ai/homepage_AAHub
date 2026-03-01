"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const stories = [
    {
        stage: "① 버려진 날",
        text: "처음엔 주인이 금방 올 줄 알았다. 익숙한 차 소리가 들릴 때마다 문 앞으로 달려갔다.",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800", // 예시 이미지
        label: "버려진 기억"
    },
    {
        stage: "② 기다리는 시간",
        text: "문이 열릴 때마다 고개를 들었다. 하지만 누구도 내 이름을 부르지 않았다. 계절이 바뀌고 있었다.",
        image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
        label: "차가운 철장"
    },
    {
        stage: "③ 지금",
        text: "이제는 그냥 살고 싶다. 내일도 눈을 뜰 수 있기를, 누군가 따뜻한 손길을 내밀어 주기를.",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
        label: "마지막 희망"
    }
];

export default function StorySection() {
    return (
        <section className="py-24 bg-background-dark border-t border-white/5">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    그들의 <span className="text-primary italic">이야기</span>
                </h2>

                <div className="space-y-32">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
                        >
                            {/* 이미지 영역 */}
                            <div className="max-w-4xl mx-auto space-y-12">
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
                                    dangerouslySetInnerHTML={{ __html: t('story.title') }}
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-8"
                                >
                                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
                                        {t('story.content')}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
        </section>
                );
}
                ```
