"use client";

import React from "react";
import { LegalPageLayout, CookieBadge } from "@/components/legal/LegalUI";
import { Cookie as CookieIcon } from "lucide-react";
import { motion } from "framer-motion";
import * as CookieConsentLib from "vanilla-cookieconsent";

export default function CookieRichtliniePage() {
  return (
    <LegalPageLayout
      title="Cookie-Richtlinie bei Hey Fede!"
      subtitle="Transparente Informationen zu allen eingesetzten Cookies, Web-Technologien und Datenschutz-Präferenzen."
      lastUpdated="Juni 2026"
    >
      <div
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.95rem",
          color: "#5c3d35",
          lineHeight: 1.75,
        }}
      >
        <p style={{ marginBottom: 24 }}>
          Diese Cookie-Richtlinie erläutert transparent und nachvollziehbar,
          welche digitalen Technologien und Cookies auf der Website von Hey
          Fede! in Wetzlar eingesetzt werden. Wir informieren dich darüber, für
          welche konkreten Zwecke Daten gespeichert werden, welche Arten von
          Cookies zum Einsatz kommen und wie du deine persönlichen Einstellungen
          jederzeit selbst verwalten kannst.
        </p>

        <p style={{ marginBottom: 32 }}>
          Deine erteilte Zustimmung gilt für die Webdomäne{" "}
          <strong style={{ color: "#2d1f19" }}>hey-fede.de</strong> sowie für
          alle dazugehörigen Subdomains unserer Eiscafé- und
          Dessertbar-Plattform. Wir legen höchsten Wert auf Datensparsamkeit und
          Transparenz bei jedem deiner Besuche.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
            marginTop: 36,
          }}
        >
          1. Was sind Cookies und Web-Technologien?
        </h2>
        <p style={{ marginBottom: 24 }}>
          Cookies und ähnliche Speichertechnologien (wie Local Storage) sind
          kleine Textdateien oder Datenspeicher, die beim Besuch unserer Website
          auf deinem Endgerät (Browser, Smartphone oder Tablet) hinterlegt
          werden. Sie ermöglichen es uns, dir eine reibungslose Navigation,
          sichere Bestellabläufe für unsere Eis- und Dessertspezialitäten sowie
          eine individuell angepasste Nutzungserfahrung bei Hey Fede! in Wetzlar
          zu gewährleisten. Darüber hinaus helfen anonymisierte Erkenntnisse aus
          der Nutzung dabei, unser Online-Angebot kontinuierlich zu verbessern.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
            marginTop: 36,
          }}
        >
          2. Wie verwenden wir Cookies?
        </h2>
        <p style={{ marginBottom: 16 }}>
          Wie bei modernen Webanwendungen üblich setzt Hey Fede! sowohl
          Erstanbieter-Cookies (First-Party) als auch Drittanbieter-Cookies
          (Third-Party) für klar definierte Zwecke ein:
        </p>
        <ul
          style={{
            paddingLeft: 24,
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <li>
            <strong style={{ color: "#2d1f19" }}>
              Erstanbieter-Cookies (First-Party):
            </strong>{" "}
            Werden direkt von unserer Website gesetzt. Sie sind technisch
            erforderlich, um Basisfunktionen wie die Session-Verwaltung beim
            Login, die Speicherung deines Warenkorbs oder die Merkfunktion für
            deine Cookie-Einwilligungen bereitzustellen. Diese Notwendigen
            Cookies erfassen keine personenbezogenen Profile zu
            Marketingzwecken.
          </li>
          <li>
            <strong style={{ color: "#2d1f19" }}>
              Drittanbieter-Cookies (Third-Party):
            </strong>{" "}
            Werden von eingebundenen Diensten (wie beispielsweise Google Maps
            für unsere interaktive Standort- und Anfahrtskarte in Wetzlar)
            verwendet. Sie dienen dazu, interaktive Zusatzfunktionen
            bereitzustellen und die technische Stabilität sowie Performance
            unserer Seite sicherzustellen.
          </li>
        </ul>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
            marginTop: 36,
          }}
        >
          3. Welche Arten von Cookies verwenden wir?
        </h2>
        <p style={{ marginBottom: 20 }}>
          Nachfolgend findest du eine detaillierte und transparente Übersicht
          aller auf unserer Plattform genutzten Cookies und
          Local-Storage-Einträge, aufgeteilt nach ihrer Zweck-Kategorie,
          Speicherdauer und dem jeweiligen Anbieter:
        </p>

        {/* Interactive cookie cards */}
        <div style={{ display: "grid", gap: 12, marginBottom: 36 }}>
          {[
            {
              name: "cc_cookie",
              provider: "Hey Fede!",
              purpose:
                "Speichert deine getroffenen Cookie-Einwilligungen und Präferenzen, damit das Banner bei deinen nächsten Besuchen nicht erneut erscheint.",
              duration: "6 Monate",
              category: "Notwendig",
            },
            {
              name: "__session",
              provider: "Firebase Auth",
              purpose:
                "Verwaltung deiner aktiven und gesicherten Login-Sitzung in deinem persönlichen Hey Fede! Kundenkonto.",
              duration: "Sitzung",
              category: "Notwendig",
            },
            {
              name: "splash_shown",
              provider: "Hey Fede!",
              purpose:
                "Stellt sicher, dass die Begrüßungsanimation (Splash-Screen) pro Besuchssitzung nur einmalig für eine flüssige Bedienung abgespielt wird.",
              duration: "Sitzung",
              category: "Notwendig",
            },
            {
              name: "hf_ach_*",
              provider: "Hey Fede!",
              purpose:
                "Speichert deinen lokalen Spielfortschritt bei versteckten Easter Eggs und Treue-Achievements direkt in deinem Browser.",
              duration: "Dauerhaft (Local Storage)",
              category: "Funktional",
            },
            {
              name: "NID / 1P_JAR",
              provider: "Google Maps",
              purpose:
                "Wird von Google Maps verwendet, um Karteneinstellungen und Standortdaten für die interaktive Anfahrtsbeschreibung zu Hey Fede! in Wetzlar zu verarbeiten.",
              duration: "6 Monate",
              category: "Funktional",
            },
          ].map((cookie) => (
            <motion.div
              key={cookie.name}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                background: "#F5EFE8",
                borderRadius: 16,
                padding: "16px 20px",
                border: "1px solid rgba(228,192,168,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#2d1f19",
                  }}
                >
                  {cookie.name}
                </span>
                <CookieBadge category={cookie.category} />
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#5c3d35",
                  marginBottom: 6,
                }}
              >
                <strong>Anbieter:</strong> {cookie.provider} |{" "}
                <strong>Dauer:</strong> {cookie.duration}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#5c3d35" }}>
                {cookie.purpose}
              </div>
            </motion.div>
          ))}
        </div>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
            marginTop: 36,
          }}
        >
          4. Verwalte deine Einstellungen
        </h2>
        <p style={{ marginBottom: 24 }}>
          Du behältst jederzeit die volle Kontrolle über deine Daten und
          Cookie-Einstellungen. Über die nachfolgende Schaltfläche kannst du
          deine getroffenen Einwilligungen für funktionale oder externe Dienste
          (wie Google Maps) mit einem Klick anpassen, erneuern oder vollständig
          widerrufen. Selbstverständlich kannst du Cookies auch direkt in den
          Sicherheitseinstellungen deines Webbrowsers verwalten oder löschen.
        </p>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => CookieConsentLib.showPreferences()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 28px",
            background: "#CC624C",
            color: "#fefefe",
            border: "none",
            borderRadius: 50,
            cursor: "pointer",
            fontFamily: "var(--font-body), sans-serif",
            fontWeight: 800,
            fontSize: "0.88rem",
            boxShadow: "0 6px 20px rgba(204,98,76,0.3)",
          }}
        >
          <CookieIcon size={18} /> Cookie-Einstellungen aufrufen
        </motion.button>
      </div>
    </LegalPageLayout>
  );
}
