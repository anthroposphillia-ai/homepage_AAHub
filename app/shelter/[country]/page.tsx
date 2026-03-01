"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Shelter {
    id: string;
    name: string;
    location: string;
    contact_info: string;
    website_url?: string;
    capacity?: number;
}

export default function ShelterCountryPage() {
    const { country } = useParams();
    const [shelters, setShelters] = useState<Shelter[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // 국가 코드 -> 한글 이름 매핑 (예시)
    const countryNames: { [key: string]: string } = {
        kr: "대한민국",
        jp: "일본",
        us: "미국",
        ro: "루마니아",
        th: "태국",
        in: "인도",
        br: "브라질",
        mx: "멕시코",
        tr: "튀르키예"
    };

    useEffect(() => {
        async function fetchShelters() {
            // Supabase에서 해당 국가의 쉘터 목록을 가져옵니다.
            const { data, error } = await supabase
                .from('shelters')
                .select('*')
                .eq('country_code', (country as string).toUpperCase());

            if (error) {
                console.error('Error:', error);
            } else {
                setShelters(data || []);
            }
            setIsLoading(false);
        }
        if (country) fetchShelters();
    }, [country]);

    return (
        <main className="bg-background-dark min-h-screen pt-24 text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-12">
                <Link href="/" className="text-sm text-white/40 hover:text-white mb-8 inline-block transition-colors">← 메인으로 돌아가기</Link>

                <header className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter uppercase">
                        SHELTERS IN <span className="text-primary italic">{countryNames[country as string] || country}</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
                        {countryNames[country as string] || country}의 유기동물 보호소들입니다.
                        각 보호소는 아이들에게 따뜻한 안식처를 제공하고 새로운 가족을 찾아주기 위해 노력하고 있습니다.
                    </p>
                </header>

                {isLoading ? (
                    <div className="py-20 text-center text-white/10 italic">데이터를 불러오는 중...</div>
                ) : shelters.length === 0 ? (
                    <div className="py-40 text-center border-2 border-dashed border-white/5 rounded-3xl">
                        <p className="text-white/20 text-xl">등록된 보호소가 없습니다.</p>
                        <p className="text-white/10 mt-2 text-sm italic">글로벌 통합을 준비 중입니다.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {shelters.map((shelter, index) => (
                            <motion.div
                                key={shelter.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary text-2xl font-bold">
                                        {shelter.name[0]}
                                    </div>
                                    <span className="text-[10px] text-white/20 font-mono italic">#{shelter.id.slice(0, 8)}</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{shelter.name}</h3>
                                <div className="space-y-3 text-sm text-white/40 mb-8">
                                    <p className="flex items-center gap-2">📍 {shelter.location}</p>
                                    <p className="flex items-center gap-2">📞 {shelter.contact_info}</p>
                                    {shelter.capacity && <p className="flex items-center gap-2">🛏️ 수용 가능: {shelter.capacity}마리</p>}
                                </div>

                                <div className="flex gap-4">
                                    {shelter.website_url && (
                                        <a
                                            href={shelter.website_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl text-center text-xs font-bold transition-all border border-white/10"
                                        >
                                            홈페이지
                                        </a>
                                    )}
                                    <button className="flex-1 bg-primary hover:bg-primary-dark py-3 rounded-xl text-xs font-bold transition-all shadow-lg shadow-primary/10">
                                        문의하기
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <section className="mt-32 p-12 bg-primary/5 rounded-[40px] border border-primary/10 text-center">
                    <h2 className="text-3xl font-bold mb-4">보호소 파트너십 <span className="text-primary italic">문의</span></h2>
                    <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
                        AAHub와 함께 유기동물 구조 및 입양 활성화에 힘쓸 전 세계의 보호소를 찾습니다.
                        우리는 투명한 데이터와 기술로 전 세계 모든 생명을 연결합니다.
                    </p>
                    <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5">
                        PARTNER WITH US →
                    </button>
                </section>
            </div>

            <Footer />
        </main>
    );
}
