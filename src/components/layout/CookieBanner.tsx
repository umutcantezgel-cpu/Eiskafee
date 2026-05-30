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
    const initCC = () => {
      // Small extra delay after splash for smooth UX
      setTimeout(() => {
        CookieConsent.run({
          autoShow: false,
          guiOptions: {
            consentModal: {
              layout: "box",
              position: "bottom left",
              equalWeightButtons: true,
            },
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
              de: {
                consentModal: {
                  title: "🧇 Cookies & Datenschutz",
                  description:
                    'Hey! Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Du entscheidest selbst, welche Kategorien du zulassen möchtest. Mehr dazu in unserer <a href="/legal#datenschutz" class="cc-link">Datenschutzerklärung</a>.',
                  acceptAllBtn: "Alle akzeptieren",
                  acceptNecessaryBtn: "Nur Notwendige",
                  showPreferencesBtn: "Einstellungen anpassen",
                },
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
        });

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

    CookieConsent.hide();
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
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 pointer-events-none flex justify-center"
        >
          <div className="pointer-events-auto bg-cream border-2 border-peach rounded-3xl shadow-clay p-6 w-full max-w-4xl flex flex-col gap-6 relative overflow-hidden">
            {/* Top Right Bite Mark */}
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
              style={{ maskImage: "url(#bitemark-top-right)" }}
            />

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-peach rounded-full flex items-center justify-center text-terracotta">
                <Cookie className="w-8 h-8" />
              </div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="font-calistoga text-2xl text-charcoal mb-2">
                  Cookies für dich!
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed max-w-xl">
                  Wir verwenden Cookies, um dir das beste Erlebnis auf unserer
                  Website zu bieten. Manche sind essenziell, andere helfen uns,
                  unseren Service zu verbessern. Bist du einverstanden?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => handleConsent("essential")}
                  className="text-sm font-bold text-charcoal/60 hover:text-charcoal underline underline-offset-4 px-4 py-2 transition-colors"
                >
                  Ablehnen
                </button>
                <SecondaryCTA
                  onClick={() => handleConsent("custom")}
                  className="py-2 text-sm"
                >
                  Anpassen
                </SecondaryCTA>
                <PrimaryCTA
                  onClick={() => handleConsent("all")}
                  className="py-2 text-sm whitespace-nowrap"
                >
                  Akzeptieren
                </PrimaryCTA>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
