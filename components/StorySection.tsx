"use client";

import { motion } from "framer-motion";

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
                            <div className="w-full md:w-1/2 relative">
                                <div className="aspect-[4/3] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src={story.image}
                                        alt={story.label}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-2 text-sm font-bold skew-x-[-12deg]">
                                    {story.label}
                                </div>
                            </div>

                            {/* 텍스트 영역 */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <span className="text-primary font-bold tracking-widest uppercase mb-4 opacity-80">
                                    {story.stage}
                                </span>
                                <p className="text-2xl md:text-4xl leading-snug font-light text-white/90">
                                    "{story.text}"
                                </p>
                                <div className="mt-8 flex items-center space-x-2 text-white/40">
                                    <div className="w-8 h-[1px] bg-white/40" />
                                    <span className="text-sm">어느 보호소의 이름 없는 동물로부터</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
