"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function StorySection() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-background-dark border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-center"
                        dangerouslySetInnerHTML={{ __html: t('story.title') }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light text-center">
                            {t('story.content')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
