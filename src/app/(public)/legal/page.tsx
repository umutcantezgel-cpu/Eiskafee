"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Server,
  Database,
  Cookie as CookieIcon,
  Scale,
  Mail,
  AlertTriangle,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  Info,
  Building2,
  Phone,
} from "lucide-react";
import * as CookieConsentLib from "vanilla-cookieconsent";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";

/* ═══════════════════════════════════════════════════════════
   Utility Components
   ═══════════════════════════════════════════════════════════ */

function LegalIcon({
  children,
  color = "#A0402C",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: color,
        color: "#fefefe",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

/** Collapsible accordion section */
function AccordionSection({
  icon,
  number,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      layout
      style={{
        background: open ? "rgba(245,239,232,0.6)" : "transparent",
        borderRadius: 18,
        border: open
          ? "1px solid rgba(228,192,168,0.4)"
          : "1px solid transparent",
        marginBottom: 8,
        overflow: "hidden",
        transition: "background 0.3s, border 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <LegalIcon>{icon}</LegalIcon>
        <div style={{ flex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.72rem",
              fontWeight: 800,
              color: "#A0402C",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            {number}
          </span>
          <div
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "1.05rem",
              color: "#2d1f19",
            }}
          >
            {title}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <ChevronDown size={20} color="#9a7060" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 20px 20px 64px",
                fontFamily: "var(--font-body), sans-serif",
                color: "#5c3d35",
                fontSize: "0.9rem",
                lineHeight: 1.72,
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/** Cookie pill badge */
function CookieBadge({ category }: { category: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    Notwendig: { bg: "#A0402C", text: "#fefefe" },
    Funktional: { bg: "#E4C0A8", text: "#2d1f19" },
    Statistik: { bg: "#754C3E", text: "#fefefe" },
    Marketing: { bg: "#5c3d35", text: "#fefefe" },
  };
  const c = colors[category] || colors.Notwendig;
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        padding: "3px 12px",
        borderRadius: 50,
        fontSize: "0.7rem",
        fontWeight: 800,
        letterSpacing: "0.03em",
      }}
    >
      {category}
    </span>
  );
}

/** Right card - one of the Betroffenenrechte */
function RightCard({ right, article }: { right: string; article: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(204,98,76,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        background: "rgba(238,223,204,0.5)",
        borderRadius: 14,
        padding: "14px 18px",
        cursor: "default",
        border: "1px solid rgba(228,192,168,0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 2,
        }}
      >
        <CheckCircle2 size={14} color="#A0402C" />
        <span
          style={{ fontWeight: 800, color: "#2d1f19", fontSize: "0.85rem" }}
        >
          {right}
        </span>
      </div>
      <span style={{ fontSize: "0.72rem", color: "#754C3E", fontWeight: 600 }}>
        {article}
      </span>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main Legal Page
   ═══════════════════════════════════════════════════════════ */
export default function LegalPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeSection, setActiveSection] = useState("impressum");

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "impressum", label: "Impressum", icon: <Building2 size={14} /> },
    { id: "datenschutz", label: "Datenschutz", icon: <Shield size={14} /> },
    { id: "cookies", label: "Cookies", icon: <CookieIcon size={14} /> },
    { id: "agb", label: "AGB", icon: <FileText size={14} /> },
  ];

  return (
    <div
      ref={containerRef}
      style={{ minHeight: "100vh", background: "#fefefe" }}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 68,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, #CC624C, #E4C0A8)",
          transformOrigin: "left",
          scaleX,
          zIndex: 100,
        }}
      />

      {/* Hero Header */}
      <div
        style={{
          background: "linear-gradient(180deg, #eedfcc 0%, #F5EFE8 100%)",
          paddingTop: 120,
          paddingBottom: 48,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: "10%",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(204,98,76,0.06)",
            animation: "blobFloat 9s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "5%",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(228,192,168,0.15)",
            animation: "blobFloat 12s ease-in-out infinite reverse",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(204,98,76,0.1)",
              padding: "6px 16px",
              borderRadius: 50,
              marginBottom: 16,
            }}
          >
            <Shield size={14} color="#A0402C" />
            <span
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#A0402C",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              DSGVO · TDDDG · DDG konform
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#2d1f19",
              margin: "0 0 8px",
            }}
          >
            Rechtliches
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: "#5c3d35",
              fontSize: "1rem",
              margin: 0,
            }}
          >
            Transparenz & Vertrauen bei Hey Fede!
          </p>
        </motion.div>

        {/* Sticky section nav */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            gap: 6,
            justifyContent: "center",
            marginTop: 28,
            flexWrap: "wrap",
            padding: "0 16px",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background:
                  activeSection === item.id
                    ? "#A0402C"
                    : "rgba(245,239,232,0.8)",
                color: activeSection === item.id ? "#fefefe" : "#5c3d35",
                padding: "8px 18px",
                borderRadius: 50,
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 800,
                fontSize: "0.8rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backdropFilter: "blur(8px)",
                border:
                  activeSection === item.id
                    ? "1px solid transparent"
                    : "1px solid rgba(228,192,168,0.3)",
              }}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </motion.nav>
      </div>

      {/* Content */}
      <div
        style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 96px" }}
      >
        {/* ═══ IMPRESSUM ═══ */}
        <section
          id="impressum"
          style={{ marginBottom: 72, scrollMarginTop: 100 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "1.8rem",
              color: "#2d1f19",
              marginBottom: 28,
              borderBottom: "2px solid #eedfcc",
              paddingBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Building2 size={24} color="#A0402C" /> Impressum
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {/* Anbieter Card */}
            <motion.div
              whileHover={{ y: -4 }}
              style={{
                background: "#F5EFE8",
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(228,192,168,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <Building2 size={16} color="#A0402C" />
                <h3
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    color: "#2d1f19",
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  Anbieter
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  color: "#5c3d35",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Hey Fede - Dessertbar & Cafè
                <br />
                Inhaberin: {BUSINESS.founder}
                <br />
                {BUSINESS.street}
                <br />
                {BUSINESS.postalCode} {BUSINESS.city}
              </p>
            </motion.div>

            {/* Kontakt Card */}
            <motion.div
              whileHover={{ y: -4 }}
              style={{
                background: "#F5EFE8",
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(228,192,168,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <Phone size={16} color="#A0402C" />
                <h3
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    color: "#2d1f19",
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  Kontakt
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  color: "#5c3d35",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Tel: {BUSINESS.phone}
                <br />
                WhatsApp: {BUSINESS.whatsappDisplay}
                <br />
                E-Mail:{" "}
                <span style={{ color: "#A0402C", fontWeight: 700 }}>
                  hallo@hey-fede.de
                </span>
                <br />
                <span
                  style={{
                    fontSize: "0.75rem",
                    opacity: 0.8,
                    display: "block",
                    marginTop: "4px",
                  }}
                >
                  Hinweis: Wir prüfen dieses Postfach nur sehr unregelmäßig.
                  Bitte rufe uns bei dringenden Anliegen an!
                </span>
              </p>
            </motion.div>

            {/* USt-ID Card */}
            <motion.div
              whileHover={{ y: -4 }}
              style={{
                background: "#F5EFE8",
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(228,192,168,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <FileText size={16} color="#A0402C" />
                <h3
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    color: "#2d1f19",
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  Steuernummer
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  color: "#5c3d35",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                USt-IdNr. gem. § 27a UStG:
                <br />
                <span
                  style={{
                    display: "inline-block",
                    background: "#eedfcc",
                    padding: "3px 10px",
                    borderRadius: 8,
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    marginTop: 6,
                    color: "#A0402C",
                    fontWeight: "bold",
                  }}
                >
                  {BUSINESS.vatId}
                </span>
              </p>
            </motion.div>

            {/* Inhaltlich Verantwortlich */}
            <motion.div
              whileHover={{ y: -4 }}
              style={{
                background: "#F5EFE8",
                borderRadius: 20,
                padding: 24,
                border: "1px solid rgba(228,192,168,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <Info size={16} color="#A0402C" />
                <h3
                  style={{
                    fontFamily: "var(--font-heading), serif",
                    color: "#2d1f19",
                    fontSize: "0.95rem",
                    margin: 0,
                  }}
                >
                  § 18 MStV
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  color: "#5c3d35",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Verantwortlich für den Inhalt:
                <br />
                {BUSINESS.founder}
                <br />
                {FULL_ADDRESS}
              </p>
            </motion.div>
          </div>

          {/* EU Streitschlichtung */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(135deg, #eedfcc 0%, #F5EFE8 100%)",
              padding: 20,
              borderRadius: 16,
              marginTop: 20,
              fontSize: "0.85rem",
              fontFamily: "var(--font-body), sans-serif",
              color: "#5c3d35",
              border: "1px solid rgba(228,192,168,0.3)",
            }}
          >
            <strong style={{ color: "#2d1f19" }}>EU-Streitschlichtung:</strong>{" "}
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#A0402C",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              ec.europa.eu/consumers/odr{" "}
              <ExternalLink size={12} style={{ verticalAlign: "middle" }} />
            </a>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </motion.div>
        </section>

        {/* ═══ DATENSCHUTZ ═══ */}
        <section
          id="datenschutz"
          style={{ marginBottom: 72, scrollMarginTop: 100 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "1.8rem",
              color: "#2d1f19",
              marginBottom: 28,
              borderBottom: "2px solid #eedfcc",
              paddingBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Shield size={24} color="#A0402C" /> Datenschutzerklärung
          </motion.h2>

          <AccordionSection
            icon={<Shield size={14} />}
            number="01"
            title="Verantwortlicher"
            defaultOpen
          >
            <p>
              {BUSINESS.founder}, Inhaberin von Hey Fede! Dessertbar & Café
              <br />
              {FULL_ADDRESS}
              <br />
              E-Mail:{" "}
              <span style={{ fontWeight: 700, color: "#A0402C" }}>
                datenschutz@hey-fede.de
              </span>
            </p>
          </AccordionSection>

          <AccordionSection
            icon={<Database size={14} />}
            number="02"
            title="Erhobene Daten"
          >
            <p style={{ marginBottom: 12 }}>
              Für die Nutzung unserer Website und den Vorbestellservice erfassen
              wir:
            </p>
            <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
              <li>Name & Handynummer (für Rückfragen zur Abholung)</li>
              <li>E-Mail-Adresse (für Bestellbestätigung & Kontoanmeldung)</li>
              <li>Bestelldaten (zur Zubereitung deiner Bestellung)</li>
              <li>
                Technische Daten: IP-Adresse, Browser-Typ, Gerät, Betriebssystem
              </li>
              <li>
                Nutzungsdaten: Aufgerufene Seiten, Verweildauer (nur bei
                Statistik-Consent)
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection
            icon={<Scale size={14} />}
            number="03"
            title="Rechtsgrundlagen"
          >
            <div
              style={{
                display: "grid",
                gap: 10,
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {[
                {
                  art: "Art. 6 Abs. 1 lit. a",
                  title: "Einwilligung",
                  desc: "Optionale Cookies (Statistik, Marketing)",
                },
                {
                  art: "Art. 6 Abs. 1 lit. b",
                  title: "Vertragserfüllung",
                  desc: "Abwicklung deiner Bestellung",
                },
                {
                  art: "Art. 6 Abs. 1 lit. f",
                  title: "Berechtigtes Interesse",
                  desc: "Server-Logs, Website-Sicherheit",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(245,239,232,0.5)",
                    padding: 12,
                    borderRadius: 12,
                    border: "1px solid rgba(228,192,168,0.2)",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "#A0402C",
                    }}
                  >
                    {r.art}
                  </strong>
                  <strong
                    style={{
                      display: "block",
                      fontSize: "0.9rem",
                      color: "#2d1f19",
                    }}
                  >
                    {r.title}
                  </strong>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#754C3E",
                      marginTop: 4,
                    }}
                  >
                    {r.desc}
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          <AccordionSection
            icon={<Eye size={14} />}
            number="04"
            title="Empfänger & Auftragsverarbeiter"
          >
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "0.82rem",
                }}
              >
                <thead>
                  <tr style={{ background: "rgba(238,223,204,0.6)" }}>
                    {["Dienst", "Anbieter", "Zweck"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "10px 14px",
                          fontWeight: 800,
                          color: "#2d1f19",
                          textAlign: "left",
                          fontSize: "0.72rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          borderBottom: "1px solid rgba(228,192,168,0.4)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Firebase Auth",
                      "Google Ireland Ltd",
                      "Nutzer-Authentifizierung",
                    ],
                    [
                      "Firebase Firestore",
                      "Google Ireland Ltd",
                      "Speicherung von Bestellungen",
                    ],
                    ["Vercel", "Vercel Inc., USA", "Website-Hosting & CDN"],
                    [
                      "Google Maps",
                      "Google Ireland Ltd",
                      "Interaktive Karte (nach Einwilligung)",
                    ],
                  ].map(([d, a, z], i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid rgba(228,192,168,0.25)",
                      }}
                    >
                      <td style={{ padding: "10px 14px", fontWeight: 700 }}>
                        {d}
                      </td>
                      <td style={{ padding: "10px 14px" }}>{a}</td>
                      <td style={{ padding: "10px 14px" }}>{z}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionSection>

          <AccordionSection
            icon={<Server size={14} />}
            number="05"
            title="Drittlandtransfer (USA)"
          >
            <p>
              Einige der eingesetzten Dienste (Google, Vercel) haben ihren Sitz
              in den USA. Die Datenübermittlung erfolgt auf Grundlage des{" "}
              <strong>EU-US Data Privacy Framework</strong>{" "}
              (Angemessenheitsbeschluss gem. Art. 45 DSGVO) sowie ergänzend auf
              Basis von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c
              DSGVO).
            </p>
          </AccordionSection>

          <AccordionSection
            icon={<FileText size={14} />}
            number="06"
            title="Speicherdauer"
          >
            <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
              <li>
                <strong>Bestelldaten:</strong> 90 Tage nach Abholung
                (automatische Löschung)
              </li>
              <li>
                <strong>Kontodaten:</strong> Bis zur Löschung deines Kontos
                durch dich
              </li>
              <li>
                <strong>Server-Logs:</strong> Maximal 30 Tage
              </li>
              <li>
                <strong>Kontaktanfragen:</strong> 6 Monate nach Abschluss der
                Bearbeitung
              </li>
              <li>
                <strong>Steuerrelevante Daten:</strong> 10 Jahre (gesetzliche
                Aufbewahrungspflicht)
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection
            icon={<Lock size={14} />}
            number="07"
            title="Deine Rechte (Betroffenenrechte)"
          >
            <p style={{ marginBottom: 12 }}>
              Nach der DSGVO stehen dir folgende Rechte zu:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                gap: 8,
              }}
            >
              {[
                ["Auskunft", "Art. 15"],
                ["Berichtigung", "Art. 16"],
                ["Löschung", "Art. 17"],
                ["Einschränkung", "Art. 18"],
                ["Datenübertragbarkeit", "Art. 20"],
                ["Widerspruch", "Art. 21"],
              ].map(([r, a]) => (
                <RightCard key={r} right={r} article={a} />
              ))}
            </div>
            <p style={{ marginTop: 16 }}>
              Kontaktiere uns unter{" "}
              <span style={{ fontWeight: 700, color: "#A0402C" }}>
                datenschutz@hey-fede.de
              </span>
              .
            </p>
          </AccordionSection>

          <AccordionSection
            icon={<Server size={14} />}
            number="08"
            title="Hosting & CDN"
          >
            <p>
              Unsere Website wird bei <strong>Vercel Inc.</strong> (440 N
              Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Beim Aufruf
              werden technische Daten (IP-Adresse, Browser, Zeitpunkt)
              automatisch erhoben. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
              Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.
            </p>
          </AccordionSection>

          <AccordionSection
            icon={<Database size={14} />}
            number="09"
            title="Firebase (Google)"
          >
            <p>
              Für die Nutzer-Authentifizierung und Datenspeicherung nutzen wir
              Firebase-Dienste von Google Ireland Limited (Gordon House, Barrow
              Street, Dublin 4, Irland). Rechtsgrundlage: Art. 6 Abs. 1 lit. b
              DSGVO. Datentransfer in die USA erfolgt auf Grundlage des EU-US
              Data Privacy Framework.
            </p>
          </AccordionSection>

          <AccordionSection
            icon={<Mail size={14} />}
            number="10"
            title="Kontaktformular"
          >
            <p>
              Wenn du uns kontaktierst, werden die angegebenen Daten (Name,
              E-Mail, Nachricht) zur Bearbeitung deiner Anfrage verarbeitet.
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Die Daten werden nach
              Abschluss der Bearbeitung und Ablauf steuerrechtlicher
              Aufbewahrungsfristen gelöscht.
            </p>
          </AccordionSection>

          <AccordionSection
            icon={<AlertTriangle size={14} />}
            number="11"
            title="Beschwerderecht"
          >
            <p>
              Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu
              beschweren (Art. 77 DSGVO).
            </p>
            <div
              style={{
                background: "rgba(238,223,204,0.5)",
                borderRadius: 14,
                padding: 16,
                marginTop: 12,
                border: "1px solid rgba(228,192,168,0.3)",
              }}
            >
              <strong style={{ color: "#2d1f19" }}>Zuständige Behörde:</strong>
              <br />
              Der Hessische Beauftragte für Datenschutz und Informationsfreiheit
              (HBDI)
              <br />
              Postfach 3163, 65021 Wiesbaden
              <br />
              <a
                href="https://datenschutz.hessen.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#A0402C",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                }}
              >
                datenschutz.hessen.de{" "}
                <ExternalLink size={12} style={{ verticalAlign: "middle" }} />
              </a>
            </div>
          </AccordionSection>
        </section>

        {/* ═══ COOKIES (Interactive) ═══ */}
        <section
          id="cookies"
          style={{ marginBottom: 72, scrollMarginTop: 100 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "1.8rem",
              color: "#2d1f19",
              marginBottom: 12,
              borderBottom: "2px solid #eedfcc",
              paddingBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <CookieIcon size={24} color="#A0402C" /> Cookies & Tracking
          </motion.h2>

          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.9rem",
              color: "#5c3d35",
              lineHeight: 1.72,
              marginBottom: 24,
            }}
          >
            Unsere Website verwendet Cookies. Die Rechtsgrundlage für technisch
            notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen
            Cookies holen wir deine Einwilligung ein (Art. 6 Abs. 1 lit. a
            DSGVO, § 25 TDDDG).
          </p>

          {/* Interactive cookie cards */}
          <div style={{ display: "grid", gap: 12 }}>
            {[
              {
                name: "cc_cookie",
                provider: "Hey Fede!",
                purpose: "Cookie-Einstellungen speichern",
                duration: "6 Monate",
                category: "Notwendig",
              },
              {
                name: "__session",
                provider: "Firebase Auth",
                purpose: "Login-Session-Verwaltung",
                duration: "Sitzung",
                category: "Notwendig",
              },
              {
                name: "splash_shown",
                provider: "Hey Fede!",
                purpose: "Splash-Screen nur 1× zeigen",
                duration: "Sitzung",
                category: "Notwendig",
              },
              {
                name: "hf_ach_*",
                provider: "Hey Fede!",
                purpose: "Achievement-Gamification-Fortschritt",
                duration: "Dauerhaft",
                category: "Funktional",
              },
              {
                name: "NID / 1P_JAR",
                provider: "Google Maps",
                purpose: "Interaktive Karte auf der Besuch-Seite",
                duration: "6 Monate",
                category: "Funktional",
              },
            ].map((cookie) => (
              <motion.div
                key={cookie.name}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  background: "#F5EFE8",
                  borderRadius: 16,
                  padding: "14px 20px",
                  border: "1px solid rgba(228,192,168,0.3)",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "#2d1f19",
                    minWidth: 100,
                  }}
                >
                  {cookie.name}
                </span>
                <span
                  style={{
                    flex: 1,
                    fontSize: "0.82rem",
                    color: "#5c3d35",
                    minWidth: 140,
                  }}
                >
                  {cookie.purpose}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#754C3E",
                    minWidth: 70,
                  }}
                >
                  {cookie.duration}
                </span>
                <CookieBadge category={cookie.category} />
              </motion.div>
            ))}
          </div>

          {/* CTA: manage cookies */}
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            data-cc="show-preferencesModal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
              width: "100%",
              marginTop: 24,
              padding: "14px 28px",
              background: "#A0402C",
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
            <CookieIcon size={18} /> Cookie-Einstellungen jetzt anpassen
          </motion.button>
        </section>

        {/* ═══ AGB ═══ */}
        <section id="agb" style={{ scrollMarginTop: 100 }}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "var(--font-heading), serif",
              fontSize: "1.8rem",
              color: "#2d1f19",
              marginBottom: 28,
              borderBottom: "2px solid #eedfcc",
              paddingBottom: 16,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <FileText size={24} color="#A0402C" /> AGB
          </motion.h2>

          {/* TL;DR Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(135deg, #E4C0A8 0%, #eedfcc 100%)",
              padding: 24,
              borderRadius: 20,
              marginBottom: 32,
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.88rem",
              color: "#5c3d35",
              border: "1px solid rgba(228,192,168,0.3)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#2d1f19",
                fontSize: "1rem",
                margin: "0 0 14px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Info size={16} color="#A0402C" /> Das Wichtigste in Kürze
            </h3>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                "Vorbestellung ist kostenlos & unverbindlich",
                "Zahlung erfolgt vor Ort im Laden",
                "Stornierung bis 30 Min vor Abholung möglich",
                "Nicht abgeholte Bestellungen werden nach 30 Min aufgelöst",
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <CheckCircle2 size={14} color="#A0402C" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AGB Paragraphs as Accordions */}
          {[
            {
              n: "§ 1",
              t: "Geltungsbereich",
              c: "Diese AGB gelten für alle Vorbestellungen über die Hey Fede! Online-Plattform.",
            },
            {
              n: "§ 2",
              t: "Vertragsschluss",
              c: "Der Vertrag kommt mit Bestätigung deiner Bestellung per SMS oder E-Mail zustande. Bis dahin gilt die Bestellung als unverbindliche Anfrage.",
            },
            {
              n: "§ 3",
              t: "Preise & Bezahlung",
              c: "Alle Preise inkl. gesetzl. MwSt. (7% für Speisen zum Mitnehmen, 19% Verzehr vor Ort). Bezahlt wird ausschließlich vor Ort - bar, mit EC- oder Kreditkarte.",
            },
            {
              n: "§ 4",
              t: "Abholung & Stornierung",
              c: "Stornierung kostenlos bis 30 Min vor Abholzeit über die App, telefonisch oder per WhatsApp. Bei Nichtabholung kann die Bestellung anderweitig vergeben werden.",
            },
            {
              n: "§ 5",
              t: "Haftung",
              c: "Hey Fede! haftet nur bei Vorsatz und grober Fahrlässigkeit. Für leichte Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.",
            },
          ].map((s) => (
            <AccordionSection
              key={s.n}
              icon={<Scale size={14} />}
              number={s.n}
              title={s.t}
            >
              <p style={{ margin: 0 }}>{s.c}</p>
            </AccordionSection>
          ))}
        </section>

        {/* Last updated */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: 56,
            padding: "16px 24px",
            background: "linear-gradient(135deg, #eedfcc 0%, #F5EFE8 100%)",
            borderRadius: 16,
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.78rem",
            color: "#754C3E",
            textAlign: "center",
            border: "1px solid rgba(228,192,168,0.3)",
          }}
        >
          Stand: Mai 2026 · Diese Seite dient der Information und ersetzt keine
          Rechtsberatung.
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes blobFloat { 0%,100%{transform:translate(0,0)} 33%{transform:translate(6px,-10px)} 66%{transform:translate(-5px,7px)} }
      `,
        }}
      />
    </div>
  );
}
