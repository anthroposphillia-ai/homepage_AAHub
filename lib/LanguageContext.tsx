"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ko' | 'en' | 'jp';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    ko: {
        "nav.adopt": "입양하기",
        "nav.shelters": "쉘터 찾기",
        "nav.report": "투명성 리포트",
        "nav.donate": "후원하기",
        "hero.title": "이 눈은 아직 <br/>거기 있습니다",
        "hero.subtitle": "AAHub는 SNS 수익을 통해 전 세계 유기동물의 생존을 돕는 글로벌 허브입니다.",
        "hero.cta": "가족 찾기",
        "urgency.title": "내일이면 늦을지도 모르는 생명들",
        "urgency.timerPrefix": "남은 시간",
        "urgency.alert": "CRITICAL",
        "story.title": "누군가에게는 <span class='text-primary'>쓰레기</span>였지만,",
        "story.content": "차가운 빗물 속에서 떨고 있던 나를 발견한 건 피디님의 카메라였습니다. 버려진 것이 나의 잘못은 아니었지만, 세상은 나를 '처리 대상'으로 분류했습니다. 하지만 이제는 기다립니다. 나를 '가족'이라 불러줄 당신을.",
        "stats.animals": "구조된 생명",
        "stats.shelters": "협력 보호소",
        "stats.impact": "사회적 가치",
        "common.more": "더 보기",
        "world.title": "World <span class='text-primary not-italic'>Shelters</span>",
        "world.subtitle": "유기동물 문제는 국경이 없습니다. 전 세계에서 가장 도움이 절실한 곳의 쉘터들과 협력합니다.",
        "world.viewAll": "보호소 보기 →",
        "adopt.title": "입양을 기다리는 <span class='text-primary'>아이들</span>",
        "adopt.subtitle": "당신의 클릭 한 번이 이들의 세상을 바꿀 수 있습니다.",
        "adopt.status.critical": "긴급",
        "adopt.status.watch": "주의",
        "adopt.status.safe": "안정",
        "adopt.loading": "아이들을 불러오는 중...",
        "adopt.empty": "입양 대기 중인 동물이 없습니다.",
    },
    en: {
        "nav.adopt": "ADOPT",
        "nav.shelters": "SHELTERS",
        "nav.report": "REPORT",
        "nav.donate": "DONATE",
        "hero.title": "Those eyes are <br/>still there",
        "hero.subtitle": "AAHub is a global hub helping abandoned animals through SNS revenue.",
        "hero.cta": "Find Family",
        "urgency.title": "Lives that might be too late tomorrow",
        "urgency.timerPrefix": "Time Left",
        "urgency.alert": "CRITICAL",
        "story.title": "I was <span class='text-primary'>trash</span> to someone,",
        "story.content": "It was the PD's camera that found me trembling in the cold rain. Being abandoned wasn't my fault, but the world classified me as 'disposable'. But now I wait. For you, who will call me 'family'.",
        "stats.animals": "Lives Saved",
        "stats.shelters": "Partner Shelters",
        "stats.impact": "Social Impact",
        "common.more": "View More",
        "world.title": "World <span class='text-primary not-italic'>Shelters</span>",
        "world.subtitle": "Animal issues have no borders. We partner with shelters where help is most needed.",
        "world.viewAll": "View Shelters →",
        "adopt.title": "Waiting for <span class='text-primary'>Adoption</span>",
        "adopt.subtitle": "Your single click can change their entire world.",
        "adopt.status.critical": "CRITICAL",
        "adopt.status.watch": "WATCH",
        "adopt.status.safe": "SAFE",
        "adopt.loading": "Loading animals...",
        "adopt.empty": "No animals waiting for adoption.",
    },
    jp: {
        "nav.adopt": "保護犬・猫",
        "nav.shelters": "シェルター",
        "nav.report": "透明性レポート",
        "nav.donate": "寄付する",
        "hero.title": "その瞳은まだ <br/>そこにあります",
        "hero.subtitle": "AAHubはSNS収益を通じて世界中の保護動物を支援するグローバルハブです。",
        "hero.cta": "家族を探す",
        "urgency.title": "明日では遅すぎるかもしれない命",
        "urgency.timerPrefix": "残り時間",
        "urgency.alert": "緊急",
        "story.title": "誰かにとっては<span class='text-primary'>ゴミ</span>だったが、",
        "story.content": "冷たい雨の中で震えていた僕を見つけたのは、プロデューサーのカメラでした。捨てられたのは僕のせいではありませんでしたが、世界は僕を「処分対象」に分類しました。でも、今は待っています。僕を「家族」と呼んでくれるあなたを。",
        "stats.animals": "救われた命",
        "stats.shelters": "協力シェルター",
        "stats.impact": "社会的価値",
        "common.more": "詳細を見る",
        "world.title": "World <span class='text-primary not-italic'>Shelters</span>",
        "world.subtitle": "動物の問題に国境はありません。世界で最も助けを必要としている場所のシェルターと協力しています。",
        "world.viewAll": "シェルターを見る →",
        "adopt.title": "里親を待つ<span class='text-primary'>子たち</span>",
        "adopt.subtitle": "あなたのワンクリックが、彼らの世界を変えることができます。",
        "adopt.status.critical": "緊急",
        "adopt.status.watch": "注意",
        "adopt.status.safe": "安定",
        "adopt.loading": "データを読み込んでいます...",
        "adopt.empty": "里親募集中の動物がいません。",
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('ko');

    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as Language;
        if (savedLang && ['ko', 'en', 'jp'].includes(savedLang)) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
