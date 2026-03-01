"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Animal {
    id: string;
    name: string;
    breed: string;
    age: string;
    gender: string;
    status: 'CRITICAL' | 'WATCH' | 'SAFE';
    intake_date: string;
    photo_url: string;
}

const statusStyles = {
    CRITICAL: "bg-primary text-white",
    WATCH: "bg-yellow-500 text-black",
    SAFE: "bg-green-600 text-white",
};

export default function AdoptPage() {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [filter, setFilter] = useState<'ALL' | 'CRITICAL' | 'WATCH' | 'SAFE'>('ALL');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAnimals() {
            let query = supabase.from('animals').select('*');

            if (filter !== 'ALL') {
                query = query.eq('status', filter);
            }

            const { data, error } = await query.order('created_at', { ascending: false });

            if (error) {
                console.error('Error:', error);
            } else {
                setAnimals(data || []);
            }
            setIsLoading(false);
        }
        fetchAnimals();
    }, [filter]);

    return (
        <main className="bg-background-dark min-h-screen pt-24 text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">가족을 <span className="text-primary italic">기다립니다</span></h1>
                        <p className="text-white/60">현재 보호소에서 새로운 삶을 꿈꾸는 모든 아이들입니다.</p>
                    </div>

                    <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
                        {['ALL', 'CRITICAL', 'WATCH', 'SAFE'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f as any)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filter === f ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-white/5 text-white/40'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="py-40 text-center text-white/10">불러오는 중...</div>
                ) : animals.length === 0 ? (
                    <div className="py-40 text-center text-white/20 border-2 border-dashed border-white/5 rounded-3xl">
                        해당하는 동물이 없습니다.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {animals.map((animal, index) => (
                            <Link key={animal.id} href={`/adopt/${animal.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all cursor-pointer h-full"
                                >
                                    <div className="aspect-[4/5] relative overflow-hidden">
                                        <img
                                            src={animal.photo_url || "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400"}
                                            alt={animal.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold ${statusStyles[animal.status]}`}>
                                                {animal.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold mb-1">{animal.name}</h3>
                                        <p className="text-sm text-white/40 mb-4">{animal.breed} · {animal.age}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <span className="text-[10px] text-white/20 font-mono italic">#{animal.id.slice(0, 8)}</span>
                                            <button className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">DETAILS →</button>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
