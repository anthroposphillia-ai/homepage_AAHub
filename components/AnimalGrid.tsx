"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

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

export default function AnimalGrid() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function fetchAnimals() {
      const { data, error } = await supabase
        .from('animals')
        .select('*')
        .order('status', { ascending: true }); // CRITICAL 먼저 오도록

      if (error) {
        console.error('Error fetching animals:', error);
      } else {
        setAnimals(data || []);
      }
      setIsLoading(false);
    }

    fetchAnimals();
  }, []);

  if (isLoading) {
    return (
      <div className="py-24 text-center text-white/20 italic">
        <p>{t('adopt.loading')}</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              dangerouslySetInnerHTML={{ __html: t('adopt.title') }}
            />
            <p className="text-white/60">{t('adopt.subtitle')}</p>
          </div>
          <button className="hidden md:block text-primary font-bold hover:underline transition-all">
            {t('common.more')} →
          </button>
        </div>

        {animals.length === 0 ? (
          <div className="text-center py-20 text-white/20 border border-dashed border-white/5 rounded-3xl">
            {t('adopt.empty')}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animals.map((animal, index) => (
              <Link key={animal.id} href={`/adopt/${animal.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-[#1a1a12] rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all cursor-pointer h-full"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={animal.photo_url || "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400"}
                      alt={animal.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded text-[10px] font-bold ${statusStyles[animal.status]}`}>
                        {t(`adopt.status.${animal.status.toLowerCase()}`)}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{animal.name}</h3>
                    <p className="text-xs text-white/40 mb-3">{animal.breed} · {animal.age} · {animal.gender}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/30 tracking-tighter uppercase">Intake: {animal.intake_date}</span>
                      <button className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                        ADOPT →
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              </Link>
            ))}
          </div>
        )}

        <button className="w-full mt-10 md:hidden bg-white/5 py-4 rounded-xl text-sm font-bold border border-white/10">
          {t('common.more')} →
        </button>
      </div>
    </section >
  );
}
```
