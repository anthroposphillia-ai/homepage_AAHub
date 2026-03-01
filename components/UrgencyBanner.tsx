"use client";
import { useLanguage } from "@/lib/LanguageContext";

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

    const { t } = useLanguage();

    return (
        <div className="bg-primary text-white py-4 overflow-hidden relative">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 font-bold">
                <div className="flex items-center gap-4">
                    <span className="bg-white text-primary px-3 py-1 rounded text-xs animate-pulse">
                        {t('urgency.alert')}
                    </span>
                    <p className="text-sm md:text-base tracking-tight uppercase">
                        {t('urgency.title')}
                    </p>
                </div>
                <div className="flex items-center gap-6 tabular-nums">
                    <span className="text-white/60 text-xs uppercase tracking-widest">{t('urgency.timerPrefix')}</span>
                    <span className="text-2xl md:text-3xl font-playfair italic">04:12:35:12</span>
                </div>
            </div>
        </div>
    );
}
