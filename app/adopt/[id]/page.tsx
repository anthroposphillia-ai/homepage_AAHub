"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
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
    story_text: string;
}

export default function AnimalDetailPage() {
    const { id } = useParams();
    const [animal, setAnimal] = useState<Animal | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAnimal() {
            const { data, error } = await supabase
                .from('animals')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error:', error);
            } else {
                setAnimal(data);
            }
            setIsLoading(false);
        }
        if (id) fetchAnimal();
    }, [id]);

    if (isLoading) {
        return <div className="min-h-screen bg-background-dark flex items-center justify-center text-white/20">Loading...</div>;
    }

    if (!animal) {
        return (
            <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center text-white">
                <h1 className="text-2xl mb-4">동물을 찾을 수 없습니다.</h1>
                <Link href="/adopt" className="text-primary underline">목록으로 돌아가기</Link>
            </div>
        );
    }

    return (
        <main className="bg-background-dark min-h-screen pt-24 text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <Link href="/adopt" className="inline-flex items-center text-sm text-white/40 hover:text-white mb-8 transition-colors">
                    ← BACK TO LIST
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* 이미지 섹션 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="sticky top-24"
                    >
                        <div className="aspect-square rounded-[32px] overflow-hidden border border-white/5 shadow-2xl">
                            <img
                                src={animal.photo_url || "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800"}
                                alt={animal.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5">
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Breed</p>
                                <p className="font-bold">{animal.breed}</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5">
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Age</p>
                                <p className="font-bold">{animal.age}</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl text-center border border-white/5">
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Gender</p>
                                <p className="font-bold">{animal.gender}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 콘텐츠 섹션 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col h-full"
                    >
                        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-6 w-fit ${animal.status === 'CRITICAL' ? 'bg-primary text-white' :
                                animal.status === 'WATCH' ? 'bg-yellow-500 text-black' : 'bg-green-600'
                            }`}>
                            {animal.status} STATE
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">{animal.name}</h1>
                        <p className="text-white/40 text-lg mb-10 italic">In shelter since {animal.intake_date}</p>

                        <div className="prose prose-invert max-w-none mb-12">
                            <h3 className="text-xl font-bold text-primary mb-4">Story</h3>
                            <p className="text-white/70 leading-relaxed whitespace-pre-wrap text-lg">
                                {animal.story_text || "이 아이의 사연이 아직 등록되지 않았습니다. 하지만 당신을 기다리는 마음만은 진실합니다."}
                            </p>
                        </div>

                        <div className="mt-auto pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-primary hover:bg-primary-dark py-5 rounded-2xl text-xl font-bold transition-all hover:-translate-y-1 shadow-xl shadow-primary/20">
                                입양 문의하기
                            </button>
                            <Link href="/donate" className="flex-1 bg-white/5 hover:bg-white/10 py-5 rounded-2xl text-xl font-bold transition-all border border-white/10 text-center hover:-translate-y-1">
                                이 아이 후원하기
                            </Link>
                        </div>

                        <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="text-sm text-white/60 leading-relaxed">
                                <span className="text-primary font-bold">주의:</span> 입양은 한 생명을 책임지는 중요한 결정입니다.
                                신중하게 고민하신 후 문의 부탁드립니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
