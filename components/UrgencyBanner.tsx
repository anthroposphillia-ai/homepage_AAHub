"use client";

import { useEffect, useState } from "react";

export default function UrgencyBanner() {
    const [timeLeft, setTimeLeft] = useState("23:59:59");

    // 실제 프로젝트에서는 데이터베이스(Supabase)에서 가져온 타임스탬프로 계산
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const hours = 23 - now.getHours();
            const minutes = 59 - now.getMinutes();
            const seconds = 59 - now.getSeconds();
            setTimeLeft(
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
            );
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-primary text-white py-4 overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between font-medium">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <span className="bg-white text-primary px-2 py-0.5 rounded text-sm font-bold animate-pulse">
                        URGENT
                    </span>
                    <p className="text-sm md:text-base">
                        이번 주 폐기 위기 동물 <span className="font-bold underline">12마리</span> — 입양자가 나타나지 않으면 처분됩니다.
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-xs uppercase tracking-widest opacity-80">남은 시간</span>
                    <span className="text-2xl font-mono font-bold tracking-tighter">
                        {timeLeft}
                    </span>
                </div>
            </div>
        </div>
    );
}
