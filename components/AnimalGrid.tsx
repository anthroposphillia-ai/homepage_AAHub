"use client";

import { motion } from "framer-motion";

const animals = [
    { id: 1, name: "초코", breed: "리트리버 믹스", age: "2살", gender: "남", status: "CRITICAL", intakeDate: "2024-01-05", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "루루", breed: "코리안 숏헤어", age: "6개월", gender: "여", status: "CRITICAL", intakeDate: "2024-01-10", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "뭉치", breed: "진도 믹스", age: "4살", gender: "남", status: "WATCH", intakeDate: "2024-02-01", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "나비", breed: "삼색이", age: "1살", gender: "여", status: "SAFE", intakeDate: "2024-02-15", image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=400" },
];

const statusStyles = {
    CRITICAL: "bg-primary text-white",
    WATCH: "bg-yellow-500 text-black",
    SAFE: "bg-green-600 text-white",
};

export default function AnimalGrid() {
    return (
        <section className="py-24 bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">입양을 <span className="text-primary">기다리는 아이들</span></h2>
                        <p className="text-white/60">가장 긴박한 도움이 필요한 아이들부터 보여줍니다.</p>
                    </div>
                    <button className="hidden md:block text-primary font-bold hover:underline">
                        전체 보기 →
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {animals.map((animal, index) => (
                        <motion.div
                            key={animal.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#1a1a12] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all"
                        >
                            <div className="aspect-[3/4] overflow-hidden">
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-2 py-1 rounded text-[10px] font-bold ${statusStyles[animal.status as keyof typeof statusStyles]}`}>
                                        {animal.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-1">{animal.name}</h3>
                                <p className="text-xs text-white/40 mb-3">{animal.breed} · {animal.age} · {animal.gender}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-white/30 tracking-tighter uppercase">Intake: {animal.intakeDate}</span>
                                    <button className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                                        문의하기 →
                                    </button>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <button className="w-full mt-10 md:hidden bg-white/5 py-4 rounded-xl text-sm font-bold">
                    전체 보기 →
                </button>
            </div>
        </section>
    );
}
