"use client";

import React, { useEffect, useState } from 'react';
import { ArrowLeft, Lock, ArrowDown } from 'lucide-react';
import { useAuth } from '@/store/useAuth';
import { useAchievements } from '@/store/useAchievements';
import { ACHIEVEMENTS, type AchievementId } from '@/lib/achievements';
import { doc, getDoc, collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { LoyaltyCoin } from '@/components/loyalty/LoyaltyCoin';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { GiganticTypography } from '@/components/ui/GiganticTypography';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LoyaltyPage() {
  const { user } = useAuth();
  const unlockedIds = useAchievements((s) => s.unlocked) as AchievementId[];
  const [balance, setBalance] = useState<number>(0);
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const coinScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const coinY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const lpRef = doc(db, 'loyalty_points', user.uid);
        const lpSnap = await getDoc(lpRef);
        if (lpSnap.exists()) {
          setBalance(lpSnap.data().balance || 0);
        }

        const histRef = collection(db, 'loyalty_points', user.uid, 'history');
        const q = query(histRef, orderBy('createdAt', 'desc'), limit(10));
        const histSnap = await getDocs(q);
        setHistory(histSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (e) {
        console.error("Failed to fetch loyalty points", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  const allAchievements = Object.values(ACHIEVEMENTS);
  const unlocked = allAchievements.filter(a => unlockedIds.includes(a.id));
  const locked = allAchievements.filter(a => !unlockedIds.includes(a.id));

  return (
    <AuthGuard>
      <div className="min-h-[300vh] bg-transparent text-[#2d1f19] font-nunito relative">
        
        {/* Absolute Back Button */}
        <div className="fixed top-24 left-6 z-50">
          <button onClick={() => window.history.back()} className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <ArrowLeft className="w-6 h-6 text-[#CC624C]" />
          </button>
        </div>

        {/* SECTION 1: The Massive Intro */}
        <section className="min-h-[100vh] flex flex-col justify-center items-center px-6 relative pt-20">
          <GiganticTypography highlightWords={["Treue."]} highlightColor="#CC624C" className="text-center justify-center max-w-[1200px] mx-auto">
            Süße Treue.
          </GiganticTypography>
          
          <motion.div 
            style={{ scale: coinScale, y: coinY }}
            className="mt-20 flex flex-col items-center"
          >
            <div className="mb-8 transform scale-150">
              <LoyaltyCoin />
            </div>
            <div className="text-sm font-black text-[#CC624C] tracking-widest uppercase mb-2">Dein Guthaben</div>
            <div className="font-calistoga text-8xl text-charcoal">{loading ? '...' : balance}</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 flex flex-col items-center opacity-50"
          >
            <div className="text-xs font-bold tracking-widest uppercase mb-2">Scroll für Belohnungen</div>
            <ArrowDown />
          </motion.div>
        </section>

        {/* SECTION 2: Achievements Path */}
        <section className="min-h-[100vh] px-6 relative z-10 py-32">
          <div className="max-w-[800px] mx-auto">
            <GiganticTypography delay={0.2} className="!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center">
              Deine Meilensteine.
            </GiganticTypography>
            
            <div className="space-y-16">
              {/* Unlocked */}
              {unlocked.map((ach, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  key={ach.id} 
                  className="bg-cream/80 backdrop-blur-xl p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center shadow-clay border border-peach/30"
                >
                  <div className="w-24 h-24 bg-terracotta rounded-full flex items-center justify-center text-5xl shrink-0 shadow-clay-lg">
                    {ach.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-calistoga text-3xl text-charcoal mb-2">{ach.title}</div>
                    <div className="text-lg font-bold text-brown/80">{ach.description}</div>
                    {ach.coinReward && ach.coinReward > 0 && (
                      <div className="inline-block bg-[#eedfcc] px-4 py-2 rounded-full text-sm font-black text-terracotta uppercase tracking-wider mt-4">
                        +{ach.coinReward} Coins
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Locked */}
              {locked.map((ach, i) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  key={ach.id} 
                  className="bg-white/40 backdrop-blur-sm p-8 rounded-[40px] flex flex-col md:flex-row gap-8 items-center border border-white/50 grayscale-[0.3]"
                >
                  <div className="w-24 h-24 bg-peach/50 rounded-full flex items-center justify-center text-brown shrink-0">
                    <Lock className="w-8 h-8" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-calistoga text-3xl text-charcoal mb-2 blur-[2px]">Verborgenes Rätsel</div>
                    <div className="text-lg font-bold text-brown/60 blur-[3px] select-none">
                      {ach.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: History */}
        {history.length > 0 && (
          <section className="min-h-[100vh] px-6 relative z-10 py-32 flex flex-col items-center">
            <GiganticTypography className="!text-[clamp(2.5rem,5vw,4rem)] mb-20 text-center">
              Deine Historie.
            </GiganticTypography>
            
            <div className="max-w-[800px] w-full bg-cream/90 backdrop-blur-xl rounded-[40px] shadow-clay overflow-hidden">
              {history.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id} 
                  className={`p-6 md:p-8 flex justify-between items-center ${idx !== history.length - 1 ? 'border-b border-peach/50' : ''}`}
                >
                  <div>
                    <div className="font-calistoga text-xl md:text-2xl text-charcoal">{item.description || 'Punkte gesammelt'}</div>
                    <div className="text-sm font-bold text-brown/70 mt-1">
                      {item.createdAt ? new Date(item.createdAt).toLocaleDateString('de-DE') : ''}
                    </div>
                  </div>
                  <div className={`font-calistoga text-3xl md:text-4xl ${item.amount > 0 ? 'text-[#3a9d52]' : 'text-[#CC624C]'}`}>
                    {item.amount > 0 ? '+' : ''}{item.amount}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </AuthGuard>
  );
}
