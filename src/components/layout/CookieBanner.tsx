'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PrimaryCTA, SecondaryCTA } from '@/components/atoms/buttons';
import { Cookie } from 'lucide-react';

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const consent = localStorage.getItem('heyfede_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type: 'all' | 'essential' | 'custom' | 'save') => {
    if (type === 'custom') {
      setShowOptions(true);
      return;
    }

    let finalPreferences = { ...preferences };
    if (type === 'all') {
      finalPreferences = { essential: true, analytics: true, marketing: true };
    } else if (type === 'essential') {
      finalPreferences = { essential: true, analytics: false, marketing: false };
    }

    localStorage.setItem('heyfede_cookie_consent', JSON.stringify(finalPreferences));
    setShow(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 100 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto bg-cream border-2 border-peach rounded-3xl shadow-clay p-6 w-full max-w-4xl flex flex-col gap-6 relative overflow-hidden">
            
            {/* Top Right Bite Mark */}
            <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none" style={{ maskImage: 'url(#bitemark-top-right)' }} />

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-peach rounded-full flex items-center justify-center text-terracotta">
                <Cookie className="w-8 h-8" />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-calistoga text-2xl text-charcoal mb-2">Cookies für dich!</h3>
                <p className="text-sm text-charcoal/80 leading-relaxed max-w-xl">
                  Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
                </p>
              </div>

              {!showOptions && (
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button 
                    onClick={() => handleConsent('essential')}
                    className="text-sm font-bold text-charcoal/60 hover:text-charcoal underline underline-offset-4 px-4 py-2 transition-colors"
                  >
                    Ablehnen
                  </button>
                  <SecondaryCTA onClick={() => handleConsent('custom')} className="py-2 text-sm">
                    Anpassen
                  </SecondaryCTA>
                  <PrimaryCTA onClick={() => handleConsent('all')} className="py-2 text-sm whitespace-nowrap">
                    Akzeptieren
                  </PrimaryCTA>
                </div>
              )}
            </div>

            {/* Options Expansion */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-peach/50 pt-6"
                >
                  <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-6">
                    <label className="flex items-center justify-between p-3 bg-peach/20 rounded-xl cursor-not-allowed opacity-80">
                      <div className="flex flex-col">
                        <span className="font-bold text-charcoal">Essenziell</span>
                        <span className="text-xs text-charcoal/70">Notwendig für die Grundfunktionen der Website.</span>
                      </div>
                      <input type="checkbox" checked={preferences.essential} readOnly className="w-5 h-5 accent-terracotta" />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-peach/20 rounded-xl cursor-pointer hover:bg-peach/40 transition-colors">
                      <div className="flex flex-col">
                        <span className="font-bold text-charcoal">Analyse & Performance</span>
                        <span className="text-xs text-charcoal/70">Helfen uns zu verstehen, wie unsere Website genutzt wird.</span>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={preferences.analytics} 
                        onChange={() => togglePreference('analytics')} 
                        className="w-5 h-5 accent-terracotta cursor-pointer" 
                      />
                    </label>
                    <label className="flex items-center justify-between p-3 bg-peach/20 rounded-xl cursor-pointer hover:bg-peach/40 transition-colors">
                      <div className="flex flex-col">
                        <span className="font-bold text-charcoal">Marketing & Personalisierung</span>
                        <span className="text-xs text-charcoal/70">Für passgenaue Angebote und Inhalte.</span>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={preferences.marketing} 
                        onChange={() => togglePreference('marketing')} 
                        className="w-5 h-5 accent-terracotta cursor-pointer" 
                      />
                    </label>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <SecondaryCTA onClick={() => handleConsent('save')} className="py-2 px-8 text-sm">
                      Auswahl speichern
                    </SecondaryCTA>
                    <PrimaryCTA onClick={() => handleConsent('all')} className="py-2 px-8 text-sm whitespace-nowrap">
                      Alle akzeptieren
                    </PrimaryCTA>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
