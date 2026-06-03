"use client";

import React from "react";
import { LegalPageLayout, CookieBadge } from "@/components/legal/LegalUI";
import { Cookie as CookieIcon } from "lucide-react";
import { motion } from "framer-motion";
import * as CookieConsentLib from "vanilla-cookieconsent";

export default function CookieRichtliniePage() {
  return (
    <LegalPageLayout
      title="Cookie-Richtlinie"
      subtitle="Details zu allen eingesetzten Cookies und Technologien auf Hey Fede!"
      lastUpdated="Juni 2026"
    >
      <div
        style={{
          fontFamily: "var(--font-nunito), sans-serif",
          fontSize: "0.9rem",
          color: "#5c3d35",
          lineHeight: 1.7,
        }}
      >
        <p style={{ marginBottom: 24 }}>
          Diese Cookie-Richtlinie erklärt, was Cookies sind und wie wir sie auf
          unserer Website verwenden. Du solltest diese Richtlinie lesen, um zu
          verstehen, welche Arten von Cookies wir verwenden, welche
          Informationen wir mit Cookies sammeln und wie diese Informationen
          verwendet werden.
        </p>

        <p style={{ marginBottom: 24 }}>
          Deine Zustimmung gilt für die folgende Domain:{" "}
          <strong>hey-fede.de</strong> (sowie etwaige Subdomains).
        </p>

        <h2
          style={{
            fontFamily: "var(--font-calistoga), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
          }}
        >
          1. Was sind Cookies?
        </h2>
        <p style={{ marginBottom: 24 }}>
          Cookies sind kleine Textdateien, die dazu verwendet werden, kleine
          Informationen zu speichern. Sie werden auf deinem Gerät gespeichert,
          wenn die Website in deinem Browser geladen wird. Diese Cookies helfen
          uns, die Website ordnungsgemäß funktionieren zu lassen, sie sicherer
          zu machen, eine bessere Benutzererfahrung zu bieten und zu verstehen,
          wie die Website funktioniert, sowie zu analysieren, was funktioniert
          und wo Verbesserungen nötig sind.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-calistoga), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
          }}
        >
          2. Wie verwenden wir Cookies?
        </h2>
        <p style={{ marginBottom: 24 }}>
          Wie die meisten Online-Dienste verwendet unsere Website First-Party-
          und Third-Party-Cookies für verschiedene Zwecke. Die
          First-Party-Cookies (Erstanbieter) sind meistens notwendig, damit die
          Website richtig funktioniert. Sie sammeln keine deiner persönlich
          identifizierbaren Daten. <br />
          <br />
          Die Third-Party-Cookies (Drittanbieter), die auf unserer Website
          verwendet werden, dienen hauptsächlich dazu, zu verstehen, wie die
          Website funktioniert, wie du mit unserer Website interagierst, unsere
          Dienste sicher zu halten, dir irrelevante Werbung fernzuhalten und dir
          alles in allem eine bessere und verbesserte Benutzererfahrung zu
          bieten.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-calistoga), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
          }}
        >
          3. Welche Arten von Cookies verwenden wir?
        </h2>

        {/* Interactive cookie cards */}
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {[
            {
              name: "cc_cookie",
              provider: "Hey Fede!",
              purpose:
                "Speichert deine getroffenen Cookie-Einwilligungen und -Ablehnungen, damit das Banner nicht ständig neu erscheint.",
              duration: "6 Monate",
              category: "Notwendig",
            },
            {
              name: "__session",
              provider: "Firebase Auth",
              purpose:
                "Verwaltung der aktiven Login-Sitzung, wenn du ein Konto bei uns erstellt hast.",
              duration: "Sitzung",
              category: "Notwendig",
            },
            {
              name: "splash_shown",
              provider: "Hey Fede!",
              purpose:
                "Stellt sicher, dass die Eintrittsanimation (Splash-Screen) pro Sitzung nur einmalig abgespielt wird.",
              duration: "Sitzung",
              category: "Notwendig",
            },
            {
              name: "hf_ach_*",
              provider: "Hey Fede!",
              purpose:
                "Speichert deinen Fortschritt bei versteckten Easter Eggs und Achievements (Gamification) lokal in deinem Browser.",
              duration: "Dauerhaft (Local Storage)",
              category: "Funktional",
            },
            {
              name: "NID / 1P_JAR",
              provider: "Google Maps",
              purpose:
                "Wird von Google gesetzt, um Nutzereinstellungen und Informationen zu speichern, wenn du die interaktive Anfahrtskarte ansiehst.",
              duration: "6 Monate",
              category: "Funktional",
            },
          ].map((cookie) => (
            <motion.div
              key={cookie.name}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                background: "#f5efe8",
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
            fontFamily: "var(--font-calistoga), serif",
            fontSize: "1.6rem",
            color: "#2d1f19",
            marginBottom: 16,
          }}
        >
          4. Verwalte deine Einstellungen
        </h2>
        <p style={{ marginBottom: 24 }}>
          Du kannst deine Cookie-Präferenzen jederzeit ändern, indem du auf die
          Schaltfläche unten klickst. Dies ermöglicht dir, das
          Einwilligungsbanner erneut aufzurufen und deine Präferenzen zu ändern
          oder deine Einwilligung sofort zu widerrufen.
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
            background: "#b34832",
            color: "#fefefe",
            border: "none",
            borderRadius: 50,
            cursor: "pointer",
            fontFamily: "var(--font-nunito), sans-serif",
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
