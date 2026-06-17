"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/store/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Gift, X } from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";

export function BirthdayBanner() {
  const { dbUser } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!dbUser?.birthday) return;

    try {
      const [year, month, day] = dbUser.birthday.split("-");
      const today = new Date();

      const isBirthday =
        parseInt(month, 10) === today.getMonth() + 1 &&
        parseInt(day, 10) === today.getDate();

      // Check if we already showed it today so we don't spam them on every route change
      const storageKey = `heyfede_bday_${year}_${month}_${day}`;
      const hasSeenToday = sessionStorage.getItem(storageKey);

      if (isBirthday && !hasSeenToday) {
        setIsVisible(true);
        sessionStorage.setItem(storageKey, "true");

        // Trigger Confetti!
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = {
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          zIndex: 9999,
        };

        const randomInRange = (min: number, max: number) =>
          Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            }),
          );
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            }),
          );
        }, 250);
      }
    } catch (err) {
      console.error("Fehler beim Prüfen des Geburtstags", err);
    }
  }, [dbUser?.birthday]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-md z-[9999] bg-terracotta text-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(179,72,50,0.4)] flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Gift size={20} className="text-white" />
          </div>

          <div className="flex-1 pt-0.5">
            <h3 className="font-heading text-lg leading-tight mb-1">
              Happy Birthday, {dbUser?.name?.split(" ")[0] || "Fede-Fan"}! 🎉
            </h3>
            <p className="font-body text-sm text-white/90 mb-3">
              Wir wünschen dir einen wundervollen Tag! Komm bald wieder vorbei,
              wir freuen uns auf dich.
            </p>
            <TransitionLink
              href="/menu"
              onClick={() => setIsVisible(false)}
              className="inline-block bg-white text-terracotta font-body font-bold text-xs px-4 py-2 rounded-full hover:bg-beige transition-colors"
            >
              Jetzt was Süßes gönnen
            </TransitionLink>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors shrink-0 -mt-1 -mr-1"
            aria-label="Schließen"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
