"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PrimaryCTA, SecondaryCTA } from "@/components/atoms/buttons";
import { Cookie } from "lucide-react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Expose to window for debugging
    if (typeof window !== "undefined") {
      (window as any).CC = CookieConsent;
    }

    const initCC = () => {
      // Small extra delay after splash for smooth UX
      setTimeout(() => {
        CookieConsent.run({
          // Prevent crashes in automated browsers/testing where webdriver is true
          hideFromBots: false,

          // We use a custom consent UI, so we disable autoShow for the built-in one
          autoShow: false,

          guiOptions: {
            preferencesModal: {
              layout: "box",
            },
          },

          categories: {
            necessary: { enabled: true, readOnly: true },
            functional: { enabled: false },
            analytics: { enabled: false },
            marketing: { enabled: false },
          },

          onConsent: () => {
            setShow(false);
          },
          onChange: () => {
            setShow(false);
          },

          language: {
            default: "de",
            translations: {
              // @ts-expect-error - We intentionally omit consentModal to disable the built-in UI
              de: {
                // consentModal is explicitly omitted so vanilla-cookieconsent doesn't generate it
                preferencesModal: {
                  title: "Cookie-Einstellungen",
                  acceptAllBtn: "Alle akzeptieren",
                  acceptNecessaryBtn: "Alle ablehnen",
                  savePreferencesBtn: "Auswahl speichern",
                  closeIconLabel: "Schließen",
                  sections: [
                    {
                      title: "Deine Cookie-Einstellungen",
                      description:
                        "Hier kannst du genau festlegen, welche Cookies wir setzen dürfen. Technisch notwendige Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.",
                    },
                    {
                      title: "Technisch Notwendige Cookies",
                      description:
                        "Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie die Anmeldung, den Warenkorb und die Seitennavigation.",
                      linkedCategory: "necessary",
                      cookieTable: {
                        headers: {
                          name: "Cookie",
                          domain: "Anbieter",
                          description: "Zweck",
                          expiration: "Laufzeit",
                        },
                        body: [
                          {
                            name: "cc_cookie",
                            domain: "hey-fede.de",
                            description: "Speichert deine Cookie-Einstellungen",
                            expiration: "6 Monate",
                          },
                          {
                            name: "__session",
                            domain: "Firebase Auth",
                            description: "Login-Session-Verwaltung",
                            expiration: "Sitzung",
                          },
                        ],
                      },
                    },
                    {
                      title: "Funktionale Cookies",
                      description:
                        "Diese Cookies ermöglichen erweiterte Funktionen wie das Speichern deiner Spracheinstellungen, Theme-Präferenzen und Gamification-Fortschritte (z.B. Achievements).",
                      linkedCategory: "functional",
                      cookieTable: {
                        headers: {
                          name: "Cookie",
                          domain: "Anbieter",
                          description: "Zweck",
                          expiration: "Laufzeit",
                        },
                        body: [
                          {
                            name: "hf_ach_*",
                            domain: "hey-fede.de",
                            description: "Achievement-Gamification-Fortschritt",
                            expiration: "Dauerhaft",
                          },
                        ],
                      },
                    },
                    {
                      title: "Statistik & Analyse",
                      description:
                        "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen. Alle Daten werden anonymisiert erfasst.",
                      linkedCategory: "analytics",
                    },
                    {
                      title: "Marketing & Social Media",
                      description:
                        "Diese Cookies werden genutzt, um dir personalisierte Inhalte und Werbung anzuzeigen. Sie können auch von Drittanbietern gesetzt werden, deren Dienste wir auf unserer Website eingebunden haben.",
                      linkedCategory: "marketing",
                    },
                    {
                      title: "Weitere Informationen",
                      description:
                        'Bei Fragen zu unseren Cookies kontaktiere uns unter <a href="mailto:datenschutz@hey-fede.de" class="cc-link">datenschutz@hey-fede.de</a> oder lies unsere vollständige <a href="/legal#datenschutz" class="cc-link">Datenschutzerklärung</a>.',
                    },
                  ],
                },
              },
            },
          },
        }).catch((e) =>
          console.error("CookieConsent Run Error Stack:", e.stack),
        );

        if (!CookieConsent.validCookie("cc_cookie")) {
          setShow(true);
        }
      }, 500); // 500ms grace period after splash exits
    };

    // Wait for splash screen to finish before showing cookie banner
    const onSplashDone = () => {
      window.removeEventListener("splash:done", onSplashDone);
      clearTimeout(fallback);
      initCC();
    };

    window.addEventListener("splash:done", onSplashDone);

    // Hard fallback: if splash:done never fires (edge case), init after 4s
    const fallback = setTimeout(() => {
      window.removeEventListener("splash:done", onSplashDone);
      initCC();
    }, 4000);

    return () => {
      window.removeEventListener("splash:done", onSplashDone);
      clearTimeout(fallback);
    };
  }, []);

  const handleConsent = (type: "all" | "essential" | "custom") => {
    if (type === "custom") {
      CookieConsent.showPreferences();
      return;
    }

    if (type === "all") {
      CookieConsent.acceptCategory("all");
    } else if (type === "essential") {
      CookieConsent.acceptCategory([]);
    }

    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 100 }
          }
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto bg-cream/95 backdrop-blur-md border border-peach rounded-[1.25rem] md:rounded-3xl shadow-clay-lg p-4 md:p-8 w-full max-w-4xl flex flex-col gap-3 md:gap-6 relative overflow-hidden">
            {/* Top Right Bite Mark */}
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-80"
              style={{ maskImage: "url(#bitemark-top-right)" }}
            />

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-center">
              {/* Desktop Icon */}
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-peach/40 rounded-full items-center justify-center text-terracotta border border-peach/60 shadow-inner">
                <Cookie className="w-8 h-8" />
              </div>

              <div className="flex-grow text-center md:text-left w-full">
                <h3 className="font-heading text-lg md:text-2xl text-charcoal mb-1 md:mb-2 flex items-center justify-center md:justify-start gap-2">
                  <Cookie className="w-5 h-5 md:hidden text-terracotta" />
                  Cookies für dich!
                </h3>
                <p className="text-[11px] md:text-sm text-charcoal/80 leading-relaxed max-w-xl mx-auto md:mx-0">
                  Wir verwenden Cookies, um dir das beste Erlebnis auf unserer
                  Website zu bieten. Manche sind essenziell, andere helfen uns,
                  unseren Service zu verbessern. Bist du einverstanden?
                </p>
              </div>

              {/* Buttons Layout */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 w-full md:w-auto mt-1 md:mt-0 flex-shrink-0 items-stretch md:items-center">
                <PrimaryCTA
                  onClick={() => handleConsent("all")}
                  className="py-2.5 md:py-2.5 text-sm md:text-base whitespace-nowrap order-1 md:order-3 !text-white shadow-clay-cta hover:shadow-lg w-full md:w-auto"
                >
                  Alle akzeptieren
                </PrimaryCTA>
                <SecondaryCTA
                  onClick={() => handleConsent("custom")}
                  className="py-2.5 md:py-2.5 text-xs md:text-sm order-2 md:order-2 w-full md:w-auto bg-white/40 hover:bg-white/60"
                >
                  Anpassen
                </SecondaryCTA>
                <button
                  onClick={() => handleConsent("essential")}
                  className="text-[11px] md:text-sm font-bold text-charcoal/60 hover:text-charcoal underline underline-offset-4 px-2 py-2.5 md:py-2.5 transition-colors flex items-center justify-center order-3 md:order-1 w-full md:w-auto"
                >
                  Ablehnen
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
